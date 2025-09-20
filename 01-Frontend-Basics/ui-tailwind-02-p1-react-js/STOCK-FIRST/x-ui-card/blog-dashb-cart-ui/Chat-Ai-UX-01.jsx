import React from 'react';

const ZaiInterface = () => {
  const tools = [
    { name: "AI Slides", emoji: "🖼️" },
    { name: "Help me write", emoji: "✍️" },
    { name: "Brainstorm", emoji: "💡" },
    { name: "Write code", emoji: "💻" },
    { name: "Search info", emoji: "🔍" },
  ];

  return (
    <div className="h-screen w-full flex bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-indigo-600 mb-8">Z.ai</h1>
          <nav className="space-y-3">
            {tools.map((tool, idx) => (
              <button
                key={idx}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 transition"
              >
                <span className="text-lg">{tool.emoji}</span>
                <span>{tool.name}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="text-sm text-gray-400">
          © 2025 Z.ai
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="max-w-xl w-full text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How can I help you today?</h2>
          <div className="bg-white rounded-xl shadow-md border flex items-center px-4 py-3">
            <input
              type="text"
              placeholder="Type your request..."
              className="flex-grow outline-none text-gray-700 placeholder-gray-400"
            />
            <button className="ml-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
              Ask
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ZaiInterface;
