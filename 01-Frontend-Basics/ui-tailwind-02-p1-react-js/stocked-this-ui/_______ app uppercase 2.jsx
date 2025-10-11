"use client";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

export default function StrictTextConverter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleUppercase = () => setText(text.toUpperCase());
  const handleLowercase = () => setText(text.toLowerCase());
  const handleClear = () => setText("");
  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-800 via-teal-700 to-green-600 flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-8 md:p-10 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
           Text Converter
        </h1>

        {/* Input */}
        <textarea
          className="w-full h-40 p-4 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none font-sans mb-6 transition-all"
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            onClick={handleUppercase}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            UPPERCASE
          </button>
          <button
            onClick={handleLowercase}
            className="px-5 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg font-medium transition-colors"
          >
            lowercase
          </button>
          <button
            onClick={handleClear}
            className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors"
          >
            Clear
          </button>
        </div>

        {/* Output */}
        <div
          onClick={handleCopy}
          className="w-full p-4 rounded-lg border border-white/30 bg-white/10 text-white min-h-[100px] cursor-pointer select-text flex justify-between items-center"
        >
          <span>{text || "Click here to copy your text..."}</span>
          <span className="ml-2">
            {copied ? (
              <FaCheck className="text-green-400" />
            ) : (
              <FiCopy className="text-white/70 hover:text-white transition-colors" />
            )}
          </span>
        </div>

        {/* Copy Toast */}
        {copied && (
          <div className="absolute top-4 right-4 bg-green-500/80 text-white px-3 py-1 rounded text-sm">
            Text copied!
          </div>
        )}
      </div>
    </main>
  );
}
