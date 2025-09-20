import React from "react";

export default function BlogWithCTA() {
  return (
   <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-12 font-sans text-gray-100">
  <div className="max-w-xl w-full bg-gray-800 rounded-3xl shadow-2xl p-10 flex flex-col items-center space-y-8">
    {/* Author Info */}
    <div className="flex items-center space-x-4 w-full">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Author"
        className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500"
      />
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">Gerrard + Bizway AI Assistant</h1>
        <p className="text-sm text-gray-400">January 3, 2024 • 5 min read</p>
      </div>
    </div>

    {/* Main Image */}
    <div className="w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-700">
      <img
        src="https://cdn.prod.website-files.com/63c69048f4f6d54bbb4da610/65802262fb424d971efac479_chatgpt%20prompts%20for%20website%20design-p-800.png"
        alt="Laptop"
        className="w-full object-cover"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="text-center space-y-4 max-w-md">
      <h2 className="text-3xl font-bold text-orange-400">
        Build your intelligent AI workforce, today <span>🤖</span>
      </h2>
      <p className="text-gray-300 leading-relaxed">
        Bizway lets you easily build a team of AI Agents to automate hundreds of business tasks.
        No code required. Try it, today.
      </p>
    </div>

    {/* CTA Button */}
    <button
      className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-semibold rounded-full px-10 py-3 shadow-lg transition"
      aria-label="Get started with AI Agents"
    >
      Get Started with AI Agents
    </button>
  </div>
</div>



  );
}
