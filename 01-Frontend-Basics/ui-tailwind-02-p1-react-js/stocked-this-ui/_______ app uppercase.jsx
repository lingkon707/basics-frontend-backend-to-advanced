"use client";
import { useState } from "react";
import { FiCopy } from "react-icons/fi"; // Copy icon
import { FaCheck } from "react-icons/fa"; // Success icon

export default function TextConverter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleUppercase = () => setText(text.toUpperCase());
  const handleLowercase = () => setText(text.toLowerCase());
  const handleClear = () => setText("");

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Hide after 1.5s
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-200">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">
          📝 Text Converter
        </h1>

        {/* Input Box */}
        <textarea
          className="w-full h-44 md:h-60 p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-gray-700 placeholder-gray-400 mb-6 transition-all"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={handleUppercase}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium"
          >
            UPPERCASE
          </button>
          <button
            onClick={handleLowercase}
            className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-medium"
          >
            lowercase
          </button>
          <button
            onClick={handleClear}
            className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all font-medium"
          >
            Clear
          </button>
        </div>

        {/* Output / Click-to-copy */}
        <div
          onClick={handleCopy}
          className="w-full p-5 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 min-h-[100px] cursor-pointer hover:bg-gray-100 transition-all relative select-text flex items-center justify-between"
        >
          <span>{text || "Click here to copy text..."}</span>
          <span className="ml-2">
            {copied ? <FaCheck className="text-green-500" /> : <FiCopy className="text-gray-400 hover:text-gray-700 transition-all" />}
          </span>
        </div>

        <p className="mt-3 text-center text-gray-500 text-sm">
          Click the output box to copy text automatically
        </p>
      </div>
    </main>
  );
}
