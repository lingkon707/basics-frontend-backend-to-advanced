import React from "react";

export default function BlogWithCTA() {
  return (
   <div className="min-h-screen bg-white p-6 md:p-12 font-sans text-gray-900">
  {/* Container */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12 items-start">
    {/* Main Content (2/3) */}
    <div className="md:col-span-2 flex flex-col gap-6">
      {/* Author Info */}
      <div className="flex items-center gap-4 mb-2">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Author"
          className="w-12 h-12 rounded-full object-cover shadow-sm"
        />
        <div>
          <h3 className="font-semibold text-lg leading-tight">Gerrard + Bizway AI Assistant</h3>
          <p className="text-sm text-gray-500">January 3, 2024 • 5 min read</p>
        </div>
      </div>

      {/* Main Image */}
      <div className="overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src="https://cdn.prod.website-files.com/63c69048f4f6d54bbb4da610/65802262fb424d971efac479_chatgpt%20prompts%20for%20website%20design-p-800.png"
          alt="Laptop"
          className="w-full object-cover aspect-[16/9]"
          loading="lazy"
        />
      </div>
    </div>

    {/* Right-side CTA Card */}
    <aside className="border border-orange-300 rounded-2xl p-6 shadow-md bg-orange-50 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-extrabold leading-snug mb-4 text-orange-600">
          Build your intelligent AI workforce, today <span>🤖</span>
        </h2>

        <img
          src="https://cdn.prod.website-files.com/63c69048f4f6d54bbb4da610/65802262fb424d971efac479_chatgpt%20prompts%20for%20website%20design-p-800.png"
          alt="Feedback card"
          className="rounded-xl mb-5 shadow-sm w-full object-cover aspect-[16/9]"
          loading="lazy"
        />

        <p className="text-base text-gray-800 mb-6 leading-relaxed">
          Bizway lets you easily build a team of AI Agents to automate hundreds of business tasks.
          No code required. Try it, today.
        </p>
      </div>

      <button
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
        aria-label="Get started with AI Agents"
      >
        Get started with AI Agents
      </button>
    </aside>
  </div>
</div>

  );
}
