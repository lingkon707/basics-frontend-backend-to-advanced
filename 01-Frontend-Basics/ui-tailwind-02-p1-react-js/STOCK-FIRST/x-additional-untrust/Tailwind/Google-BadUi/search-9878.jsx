// App.js
import React from "react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Start with $300 in free credits and free usage of 20+ products
          </h1>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg">
            Get started for free
          </button>
        </div>

        {/* Search Section */}
        <div className="relative flex justify-center mb-8">
          <input
            type="text"
            placeholder="Ask anything about Google Cloud"
            className="w-2/3 p-4 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            aria-label="Submit search"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </div>

        {/* Options Section */}
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all">
            Add generative AI to my application
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all">
            Find a product for my use case
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all">
            Discover solutions for my industry
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all">
            Summarize what's new with Google Cloud
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
