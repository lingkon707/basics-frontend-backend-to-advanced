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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">
        Hi, I'm <span className="text-gray-800 font-bold">Z.ai</span>
      </h1>

      {/* Input Box */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="How can I help you today?"
            className="flex-grow outline-none px-2 text-gray-700 text-base placeholder-gray-400"
          />
          <button className="bg-gray-200 rounded-md px-3 py-1 ml-2 text-sm text-gray-600 font-medium">
            Tools
          </button>
        </div>
      </div>

      {/* Tool Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className="flex items-center gap-1 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50 transition text-sm font-medium text-gray-700"
          >
            {btn.label}
            {btn.hot && <span className="text-red-500 text-lg">🔥</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ZaiInterface;
