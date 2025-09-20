"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Trash2, Code } from "lucide-react"; // icons

export default function JSCompiler() {
  const [code, setCode] = useState("// Write JS code here\nconsole.log('Hello, World!');");
  const [logs, setLogs] = useState([]);
  const iframeRef = useRef(null);

  const runCode = () => {
    setLogs([]); // clear logs on run
    const iframe = iframeRef.current;

    if (iframe) {
      iframe.srcdoc = `
        <html>
          <body>
            <script>
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

  useEffect(() => {
    const handler = (e) => {
      if (e.data.type === "log") setLogs((prev) => [...prev, { type: "log", text: e.data.args.join(" ") }]);
      if (e.data.type === "error") setLogs((prev) => [...prev, { type: "error", text: e.data.args.join(" ") }]);
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black flex flex-col p-4 md:p-8 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
        <Code className="w-6 h-6 text-yellow-400" /> JavaScript Compiler
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Editor */}
        <div className="flex flex-col bg-gray-800/70 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex justify-between items-center bg-gray-900/80 px-4 py-2">
            <span className="font-semibold text-sm text-gray-300">Editor</span>
            <div className="flex gap-2">
              <button
                onClick={runCode}
                className="p-2 rounded-full bg-green-600 hover:bg-green-500"
              >
                <Play className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCode("")}
                className="p-2 rounded-full bg-red-600 hover:bg-red-500"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-4 bg-transparent font-mono text-sm md:text-base text-yellow-200 focus:outline-none resize-none"
          />
        </div>

        {/* Output */}
        <div className="flex flex-col bg-gray-800/70 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex justify-between items-center bg-gray-900/80 px-4 py-2">
            <span className="font-semibold text-sm text-gray-300">Output</span>
            <button
              onClick={() => setLogs([])}
              className="p-2 rounded-full bg-red-600 hover:bg-red-500"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-4 font-mono text-sm md:text-base bg-black/70 text-green-400 overflow-auto">
            {logs.length === 0 && (
              <div className="text-gray-500">No output yet...</div>
            )}
            {logs.map((log, i) => (
              <div
                key={i}
                className={log.type === "error" ? "text-red-400" : ""}
              >
                {log.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hidden iframe */}
      <iframe ref={iframeRef} className="hidden" sandbox="allow-scripts" />
    </div>
  );
}
