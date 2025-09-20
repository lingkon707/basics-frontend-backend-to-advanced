"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Trash2, Code } from "lucide-react";

export default function JSCompiler() {
  const [code, setCode] = useState("");
  const [logs, setLogs] = useState([]);
  const iframeRef = useRef(null);

  const runCode = () => {
    setLogs([]);
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.srcdoc = `
        <html>
          <body>
            <script>
              const pushLog = (type, args) => window.parent.postMessage({ type, args }, "*");
              console.log = (...args) => pushLog("log", args);
              console.error = (...args) => pushLog("error", args);
              try { ${code} } catch(e) { pushLog("error", [e.message]); }
            <\/script>
          </body>
        </html>
      `;
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.data.type === "log") setLogs(prev => [...prev, { type: "log", text: e.data.args.join(" ") }]);
      if (e.data.type === "error") setLogs(prev => [...prev, { type: "error", text: e.data.args.join(" ") }]);
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-950 via-gray-900 to-black text-white p-6 md:p-12 flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-4 mb-8">
        <Code className="w-7 h-7 text-indigo-400" />
        <h1 className="text-3xl md:text-4xl font-extrabold">JS Playground</h1>
      </header>

      {/* Main */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        {/* Editor Card */}
        <div className="flex flex-col bg-gray-850 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
          <div className="flex justify-between items-center bg-gray-900 px-5 py-3 border-b border-gray-700">
            <span className="text-gray-300 font-medium">Editor</span>
            <div className="flex gap-3">
              <button
                onClick={runCode}
                className="bg-indigo-600 p-2 rounded-lg hover:bg-indigo-500 transition-colors"
                title="Run Code"
              >
                <Play className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCode("")}
                className="bg-red-600 p-2 rounded-lg hover:bg-red-500 transition-colors"
                title="Clear Code"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="// Type your JavaScript code here"
            className="flex-1 p-5 font-mono text-base bg-gray-850 text-yellow-300 placeholder-gray-500 focus:outline-none resize-none"
          />
        </div>

        {/* Output Card */}
        <div className="flex flex-col bg-gray-850 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
          <div className="flex justify-between items-center bg-gray-900 px-5 py-3 border-b border-gray-700">
            <span className="text-gray-300 font-medium">Output</span>
            <button
              onClick={() => setLogs([])}
              className="bg-red-600 p-2 rounded-lg hover:bg-red-500 transition-colors"
              title="Clear Output"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-5 font-mono text-base bg-black/80 text-green-400 overflow-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-800">
            {logs.length === 0 ? (
              <div className="text-gray-500 italic select-none">...</div>
            ) : (
              logs.map((log, i) => (
                <div key={i} className={log.type === "error" ? "text-red-400" : ""}>
                  {log.text}
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-400 text-sm md:text-base">
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/lingkon101/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 font-semibold hover:underline"
        >
          Lingkon
        </a>
      </footer>

      {/* Hidden iframe */}
      <iframe ref={iframeRef} className="hidden" sandbox="allow-scripts" />
    </div>
  );
}
