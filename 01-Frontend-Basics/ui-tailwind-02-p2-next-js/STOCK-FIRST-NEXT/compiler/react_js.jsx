"use client";

import { useState, useRef } from "react";
import { Play, Trash2, Code, Maximize2, X } from "lucide-react";

export default function ReactPlayground() {
  const [code, setCode] = useState(`function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <h1 className="text-4xl text-yellow-400 font-bold">Hello React!</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`);
  const iframeRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const runCode = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="m-0 p-0">
        <div id="root"></div>
        <script type="text/babel">
          try {
            ${code}
          } catch (err) {
            document.getElementById('root').innerHTML = '<pre class="text-red-500 p-4">'+ err +'</pre>';
          }
        </script>
      </body>
      </html>
    `;

    iframe.srcdoc = html;
  };

  const clearCode = () => setCode("");

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-950 via-gray-900 to-black text-white p-6 md:p-12 flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-4 mb-8">
        <Code className="w-7 h-7 text-indigo-400" />
        <h1 className="text-3xl md:text-4xl font-extrabold">ReactJS Playground</h1>
      </header>

      {/* Main */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        {/* Editor */}
        <div className="flex flex-col bg-gray-850 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
          <div className="flex justify-between items-center bg-gray-900 px-5 py-3 border-b border-gray-700">
            <span className="text-gray-300 font-medium">Editor</span>
            <div className="flex gap-3">
              <button
                onClick={runCode}
                className="bg-indigo-600 p-2 rounded-lg hover:bg-indigo-500 transition-colors"
              >
                <Play className="w-5 h-5" />
              </button>
              <button
                onClick={clearCode}
                className="bg-red-600 p-2 rounded-lg hover:bg-red-500 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Type your ReactJS + Tailwind code here"
            className="flex-1 p-5 font-mono text-base bg-gray-850 text-yellow-300 placeholder-gray-500 focus:outline-none resize-none"
          />
        </div>

        {/* Output */}
        <div className="flex flex-col bg-gray-850 rounded-2xl shadow-xl overflow-hidden border border-gray-700 relative">
          <div className="flex justify-between items-center bg-gray-900 px-5 py-3 border-b border-gray-700">
            <span className="text-gray-300 font-medium">Output</span>
            <div className="flex gap-3">
              <button
                onClick={() => (iframeRef.current.srcdoc = "")}
                className="bg-red-600 p-2 rounded-lg hover:bg-red-500 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsFullScreen(true)}
                className="bg-indigo-600 p-2 rounded-lg hover:bg-indigo-500 transition-colors"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <iframe
            ref={iframeRef}
            className="flex-1 p-5 bg-black/80 rounded-b-2xl overflow-auto"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </main>

      {/* Full Screen Overlay */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsFullScreen(false)}
              className="bg-red-600 p-2 rounded-lg hover:bg-red-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <iframe
            srcDoc={`
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
                <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
                <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                <script src="https://cdn.tailwindcss.com"></script>
              </head>
              <body class="m-0 p-0">
                <div id="root"></div>
                <script type="text/babel">
                  try {
                    ${code}
                  } catch (err) {
                    document.getElementById('root').innerHTML = '<pre class="text-red-500 p-4">'+ err +'</pre>';
                  }
                </script>
              </body>
              </html>
            `}
            className="flex-1 w-full h-full"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      )}

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
    </div>
  );
}
