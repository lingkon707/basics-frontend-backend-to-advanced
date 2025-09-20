import React from 'react';

const ZaiInterface = () => {
  const buttons = [
    { label: "AI Slides", hot: true },
    { label: "Help me write" },
    { label: "Brainstorm" },
    { label: "Write code" },
    { label: "Search info" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-white/70 shadow-xl border border-white/40 rounded-3xl w-full max-w-2xl p-8 space-y-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Hi, I'm <span className="text-indigo-600">Z.ai</span>
        </h1>

        {/* Input Box */}
        <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm hover:shadow-md transition">
          <input
            type="text"
            placeholder="How can I help you today?"
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
          <button className="ml-2 px-4 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            Tools
          </button>
        </div>

        {/* Tool Buttons */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm font-medium transition-all duration-200 shadow-sm"
            >
              {/* Icon placeholder */}
              <span className="w-4 h-4 bg-indigo-400 rounded-full"></span>
              {btn.label}
              {btn.hot && <span className="text-red-500 animate-pulse text-base">🔥</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZaiInterface;
