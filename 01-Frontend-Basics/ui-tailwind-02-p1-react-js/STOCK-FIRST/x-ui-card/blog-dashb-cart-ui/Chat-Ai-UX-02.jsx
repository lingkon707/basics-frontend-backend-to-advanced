import React from 'react';

const ZaiInterface = () => {
  const tools = [
    { name: "AI Slides", emoji: "🖼️" },
    { name: "Write", emoji: "✍️" },
    { name: "Brainstorm", emoji: "💡" },
    { name: "Code", emoji: "💻" },
    { name: "Search", emoji: "🔍" },
  ];

  const settings = [
    { name: "Theme", emoji: "🎨" },
    { name: "History", emoji: "🕘" },
    { name: "Settings", emoji: "⚙️" },
  ];

  return (
    <div className="h-screen w-full bg-gray-100 flex font-sans text-gray-800">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-indigo-600 mb-8 tracking-tight">Z.ai</h1>
          <nav className="space-y-3">
            {tools.map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 transition"
              >
                <span className="text-xl">{item.emoji}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
        <p className="text-xs text-gray-400 text-center">© 2025 Z.ai</p>
      </aside>

      {/* Main Center Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-10 relative">
        <div className="w-full max-w-2xl">
          <h2 className="text-4xl font-bold mb-6 text-center">
            How can I assist you today?
          </h2>
          <div className="flex items-center bg-white border border-gray-300 shadow-sm rounded-full px-6 py-4">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-grow text-gray-700 placeholder-gray-400 bg-transparent outline-none text-base"
            />
            <button className="ml-4 bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
              Send
            </button>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-64 bg-white shadow-md border-l p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Tools</h3>
          <nav className="space-y-3">
            {settings.map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 transition"
              >
                <span className="text-xl">{item.emoji}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
        <p className="text-xs text-gray-400 text-center">Settings & Tools</p>
      </aside>
    </div>
  );
};

export default ZaiInterface;
