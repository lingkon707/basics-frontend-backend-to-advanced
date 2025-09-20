"use client";

import React, { useEffect, useRef, useState } from "react";

export default function JSCompilerPage() {
  const [code, setCode] = useState(`console.log('Hello World');`);
  const [logs, setLogs] = useState([]);
  const iframeRef = useRef(null);
  const blobUrlRef = useRef(null);

  useEffect(() => {
    function onMessage(e) {
      if (!e.data || e.data.source !== "js-sandbox") return;
      setLogs((l) => [...l, e.data.payload]);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    return () => {
      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    };
  }, []);

  function buildSandboxHtml(userCode) {
    return `<!doctype html><html><body><script>
      function send(payload){ parent.postMessage({ source:'js-sandbox', payload }, '*'); }
      (function(){
        const orig = console;
        ['log','error'].forEach(fn => {
          console[fn] = function(...args){
            send({ level: fn, args: args.map(a=>String(a)) });
            orig[fn].apply(orig,args);
          };
        });
        try { ${userCode} } catch(err){ send({ level:'error', args:[String(err)] }); }
      })();
    </script></body></html>`;
  }

  function runCode() {
    setLogs([]);
    const html = buildSandboxHtml(code);
    const blob = new Blob([html], { type: "text/html" });
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    blobUrlRef.current = URL.createObjectURL(blob);
    if (iframeRef.current) iframeRef.current.src = blobUrlRef.current;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 grid gap-6 lg:grid-cols-2">
      <section>
        <label className="block text-sm mb-2">Editor</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-96 p-3 rounded-lg bg-slate-800 text-slate-100 font-mono text-sm border border-slate-700 focus:outline-none"
        />
        <button
          onClick={runCode}
          className="mt-3 px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-medium"
        >
          Run
        </button>
      </section>

      <section>
        <label className="block text-sm mb-2">Output</label>
        <div className="bg-slate-800 border border-slate-700 rounded-md p-3 h-96 overflow-auto text-xs font-mono">
          {logs.length === 0 ? (
            <div className="text-slate-400">No output yet. Click Run.</div>
          ) : (
            logs.map((item, idx) => (
              <div key={idx}>
                <span className={item.level === 'error' ? 'text-red-400' : 'text-emerald-400'}>
                  {item.level}:
                </span> {item.args.join(' ')}
              </div>
            ))
          )}
        </div>
        <iframe ref={iframeRef} title="sandbox" sandbox="allow-scripts" className="hidden" />
      </section>
    </div>
  );
}