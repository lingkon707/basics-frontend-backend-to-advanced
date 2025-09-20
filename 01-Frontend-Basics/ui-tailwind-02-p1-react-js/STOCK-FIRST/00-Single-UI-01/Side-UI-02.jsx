import React from "react";

export default function BlogWithCTA() {
  return (
   <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans text-gray-900">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:space-x-12 space-y-10 md:space-y-0">
    {/* Left Content */}
    <div className="md:flex-1 bg-white rounded-3xl shadow-lg p-8 flex flex-col">
      {/* Author */}
      <div className="flex items-center mb-6">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Author"
          className="w-14 h-14 rounded-full object-cover shadow"
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold leading-tight">
            Gerrard + Bizway AI Assistant
          </h3>
          <p className="text-sm text-gray-500 mt-1">January 3, 2024 • 5 min read</p>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 overflow-hidden rounded-2xl shadow-inner mb-6">
        <img
          src="https://cdn.prod.website-files.com/63c69048f4f6d54bbb4da610/65802262fb424d971efac479_chatgpt%20prompts%20for%20website%20design-p-800.png"
          alt="Laptop"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">
        Explore how Bizway's AI agents empower your business by automating complex tasks,
        streamlining workflows, and driving innovation — all without a single line of code.
      </p>
    </div>

    {/* Right CTA */}
    <div className="md:w-80 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl shadow-xl p-8 flex flex-col justify-between text-white">
      <div>
        <h2 className="text-2xl font-extrabold mb-4">
          Build your intelligent AI workforce, today <span>🤖</span>
        </h2>

        <img
          src="https://cdn.prod.website-files.com/63c69048f4f6d54bbb4da610/65802262fb424d971efac479_chatgpt%20prompts%20for%20website%20design-p-800.png"
          alt="AI Agents"
          className="rounded-xl shadow-md mb-6 object-cover w-full h-40"
          loading="lazy"
        />

        <p className="mb-8">
          Easily create AI Agents that automate hundreds of tasks. No coding needed — get started instantly!
        </p>
      </div>

      <button
        className="bg-white text-orange-600 font-bold py-3 rounded-xl shadow-lg hover:shadow-2xl transition"
        aria-label="Get started with AI Agents"
      >
        Get Started
      </button>
    </div>
  </div>
</div>


  );
}
