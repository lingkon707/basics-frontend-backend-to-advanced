"use client";

import { useState, useRef } from "react";

export default function JSCompiler() {
  const [code, setCode] = useState("// Write JS code here\nconsole.log('Hello, World!');");
  const [logs, setLogs] = useState([]);
  const iframeRef = useRef(null);

  const runCode = () => {
    setLogs([]); // clear logs on every run
    const iframe = iframeRef.current;

    if (iframe) {
      // Reset iframe content each run
      iframe.srcdoc = `
        <html>
          <body>
            <script>
              const logs = [];
              const pushLog = (type, args) => {
                window.parent.postMessage({ type, args }, "*");
              };

              console.log = (...args) => { pushLog("log", args); };
              console.error = (...args) => { pushLog("error", args); };

              try {
                ${code}
              } catch (e) {
                pushLog("error", [e.message]);
              }
            <\/script>
          </body>
        </html>
      `;
    }
  };

  // Listen for logs
  if (typeof window !== "undefined") {
    window.onmessage = (e) => {
      if (e.data.type === "log") setLogs((prev) => [...prev, { type: "log", text: e.data.args.join(" ") }]);
      if (e.data.type === "error") setLogs((prev) => [...prev, { type: "error", text: e.data.args.join(" ") }]);
    };
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">JavaScript Online Compiler</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Editor */}
        <div className="flex flex-col">
          <h2 className="font-semibold mb-2">Editor</h2>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-3 border rounded bg-white font-mono"
          />
          <div className="mt-3 flex gap-2">
            <button onClick={runCode} className="px-4 py-2 bg-blue-600 text-white rounded">Run</button>
            <button onClick={() => setCode("")} className="px-4 py-2 bg-gray-600 text-white rounded">Clear Editor</button>
          </div>
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <h2 className="font-semibold mb-2">Output</h2>
          <div className="w-full h-64 p-3 border rounded bg-black text-green-400 font-mono overflow-auto">
            {logs.map((log, i) => (
              <div key={i} className={log.type === "error" ? "text-red-400" : ""}>
                {log.text}
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <button onClick={() => setLogs([])} className="px-4 py-2 bg-gray-600 text-white rounded">Clear Output</button>
          </div>
        </div>
      </div>

      {/* Hidden iframe for sandbox execution */}
      <iframe ref={iframeRef} className="hidden" sandbox="allow-scripts" />
    </div>
  );
}
