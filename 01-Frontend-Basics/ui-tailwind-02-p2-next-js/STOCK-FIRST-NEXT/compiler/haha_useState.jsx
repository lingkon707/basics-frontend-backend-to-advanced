"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Trash2, Code } from "lucide-react";

export default function JSCompiler() {
  const [code, setCode] = useState(`// Example Code
let number = 10;
var arr = [1, 2, 3];
const obj = { name: "Lingkon", age: 23 };

function greet(name) {
  return "Hello, " + name;
}

console.log(arr[0], obj.name, greet("World"));
`);
  const [logs, setLogs] = useState([]);
  const iframeRef = useRef(null);

  // Simple regex-based syntax highlighter
  const highlightCode = (code) => {
    if (!code) return "";
    let escaped = code
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/(&lt;\/?span&gt;)/g, "");

    // Keywords
    escaped = escaped.replace(/\b(let|var|const|function|return)\b/g, `<span class="text-pink-400 font-bold">$1</span>`);
    // Numbers
    escaped = escaped.replace(/\b([0-9]+)\b/g, `<span class="text-orange-400">$1</span>`);
    // Strings
    escaped = escaped.replace(/(["'`].*?["'`])/g, `<span class="text-green-400">$1</span>`);
    // Object keys
    escaped = escaped.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\b(?=\s*:)/g, `<span class="text-purple-400">$1</span>`);
    // Functions
    escaped = escaped.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\b(?=\()/g, `<span class="text-blue-400">$1</span>`);

    return escaped;
  };

  const runCode = () => {
    setLogs([]);
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

              try { ${code} } catch (e) { pushLog("error", [e.message]); }
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
          <pre
            contentEditable
            className="flex-1 p-4 font-mono text-sm md:text-base text-yellow-200 bg-transparent outline-none overflow-auto whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
            onInput={(e) => setCode(e.currentTarget.innerText)}
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
            {logs.length === 0 && <div className="text-gray-500">No output yet...</div>}
            {logs.map((log, i) => (
              <div key={i} className={log.type === "error" ? "text-red-400" : ""}>
                {log.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-300">
        <a
          href="https://www.linkedin.com/in/lingkon101/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-yellow-400 transition"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQHUkg8guWFNgQ/feedshare-shrink_2048_1536/B56Zk.wnZ8HcAw-/0/1757694573313?e=1761177600&v=beta&t=iF4gnKgcnQ1L2XoSaXMPue41qWoiSuq7uUe-0xAJ0v8"
            alt="Lingkon"
            className="w-10 h-10 rounded-full border border-gray-600 hover:scale-105 transition"
          />
          <span>
            Developed by <span className="text-yellow-400 font-semibold hover:underline">Lingkon</span>
          </span>
        </a>
      </footer>

      <iframe ref={iframeRef} className="hidden" sandbox="allow-scripts" />
    </div>
  );
}
