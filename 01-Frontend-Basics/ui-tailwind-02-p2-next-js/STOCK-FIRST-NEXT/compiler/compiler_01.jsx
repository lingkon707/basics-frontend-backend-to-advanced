"use client";

import React, { useEffect, useRef, useState } from "react";

export default function JSCompilerPage() {
  const [code, setCode] = useState(`// Write JavaScript here. Example:\nconsole.log('Hello from the sandbox!');\nconst el = document.createElement('div');\nel.innerText = 'DOM works inside iframe';\ndocument.body.appendChild(el);\n`);
  const [logs, setLogs] = useState([]);
  const [running, setRunning] = useState(false);
  const iframeRef = useRef(null);
  const blobUrlRef = useRef(null);

  useEffect(() => {
    // receive messages from iframe (logs / errors)
    function onMessage(e) {
      if (!e.data || e.data.source !== "js-sandbox") return;
      setLogs((l) => [...l, e.data.payload]);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    return () => {
      // cleanup blob url
      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    };
  }, []);

  function buildSandboxHtml(userCode) {
    // This HTML runs inside a sandboxed iframe and forwards console messages to parent
    return `\n<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width,initial-scale=1" />\n    <title>JS Sandbox</title>\n    <style>html,body{height:100%;margin:0;font-family:system-ui,Arial;background:#0f172a;color:#e6eef8;}</style>\n  </head>\n  <body>\n    <script>\n      // send structured messages back to parent\n      function send(payload) {\n        parent.postMessage({ source: 'js-sandbox', payload }, '*');\n      }\n\n      // intercept console\n      (function() {\n        const orig = console;\n        ['log','info','warn','error','debug'].forEach(fn => {\n          const origFn = orig[fn].bind(orig);\n          console[fn] = function(...args){\n            try { send({ level: fn, args: args.map(a=>{\n              try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } catch(e){ return String(a); }\n            }) }); } catch(e){}\n            origFn(...args);\n          }\n        });\n\n        // capture global errors\n        window.onerror = function(message, source, lineno, colno, error) {\n          send({ level: 'error', args: [String(message) + ' (at ' + lineno + ':' + colno + ')'] });\n        };\n\n        window.addEventListener('unhandledrejection', function(ev){\n          send({ level: 'error', args: ['Unhandled promise rejection: ' + (ev.reason && ev.reason.stack ? ev.reason.stack : String(ev.reason))] });\n        });\n      })();\n\n      // run user code inside a safe immediate function\n      (function(){\n        try {\n          // Provide a small API to let code communicate with parent\n          const API = {\n            send: function(obj){ parent.postMessage({ source:'js-sandbox', payload: { level: 'info', args: ['__API__', JSON.stringify(obj)] } }, '*'); }\n          };\n\n          // execute user code\n          (function(api){\n            // user code starts\n            ${userCode}\n            // user code ends\n          })(API);\n\n        } catch(err) {\n          send({ level: 'error', args: [err && err.stack ? err.stack : String(err)] });\n        }\n      })();\n    </script>\n  </body>\n</html>\n`;
  }

  function runCode() {
    setLogs([]);
    setRunning(true);
    // create blob and set iframe src to blob url
    const html = buildSandboxHtml(code);
    const blob = new Blob([html], { type: "text/html" });
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    blobUrlRef.current = URL.createObjectURL(blob);
    if (iframeRef.current) {
      iframeRef.current.src = blobUrlRef.current;
    }
    // small delay to show running state; logs will arrive async
    setTimeout(() => setRunning(false), 300);
  }

  function clearLogs() {
    setLogs([]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Next.js + Tailwind — Lightweight JavaScript Online Compiler</h1>
          <p className="text-sm text-slate-300">Safe sandbox (iframe) that captures console & errors. No server execution.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className="lg:col-span-2">
            <label className="block text-sm mb-2">Editor</label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 p-3 rounded-lg bg-slate-900 text-slate-100 font-mono text-sm border border-slate-700 focus:outline-none"
            />

            <div className="mt-3 flex gap-2">
              <button onClick={runCode} className="px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-medium">
                {running ? 'Running...' : 'Run'}
              </button>
              <button onClick={() => { setCode(''); }} className="px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-500">
                Clear Editor
              </button>
              <button onClick={() => setCode(prev => prev + '\n// more...')} className="px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-500">
                Add Snippet
              </button>
            </div>
          </section>

          <aside className="lg:col-span-1">
            <label className="block text-sm mb-2">Output / Console</label>
            <div className="bg-slate-900 border border-slate-700 rounded-md p-3 h-60 overflow-auto text-xs font-mono" id="console">
              {logs.length === 0 ? (
                <div className="text-slate-400">No output yet. Click Run.</div>
              ) : (
                logs.map((item, idx) => (
                  <div key={idx} className="mb-1">
                    <span className={"inline-block px-2 py-0.5 rounded mr-2 text-[10px] " + (item.level === 'error' ? 'bg-red-600' : 'bg-slate-700')}>{item.level}</span>
                    <span>{Array.isArray(item.args) ? item.args.join(' ') : String(item)}</span>
                  </div>
                ))
              )}
            </div>

            <div className="mt-3 flex gap-2">
              <button onClick={clearLogs} className="px-3 py-2 rounded-md bg-slate-600">Clear</button>
              <button onClick={() => {
                // open iframe in new tab for debugging (blob url)
                if (blobUrlRef.current) window.open(blobUrlRef.current, '_blank');
              }} className="px-3 py-2 rounded-md bg-slate-600">Open Sandbox</button>
            </div>

            <div className="mt-6 text-xs text-slate-300">
              <strong>Notes:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>This runs entirely in the browser; your code never reaches a server.</li>
                <li>The iframe is sandboxed (only scripts allowed). It cannot access the parent DOM.</li>
                <li>Avoid long-running loops — they can freeze the iframe tab. Use web workers for heavy tasks.</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-8">
          <label className="block text-sm mb-2">Live Sandbox (hidden for layout) — inspect via Open Sandbox</label>
          <iframe
            ref={iframeRef}
            title="js-sandbox"
            sandbox="allow-scripts"
            style={{ width: '100%', height: 300, border: '1px solid rgba(148,163,184,0.2)' }}
          />
        </div>
      </div>
    </div>
  );
}
