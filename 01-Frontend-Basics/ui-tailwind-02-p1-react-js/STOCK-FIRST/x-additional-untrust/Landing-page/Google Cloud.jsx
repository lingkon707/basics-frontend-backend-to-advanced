// src/App.js

import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white py-6 px-8 shadow-md flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-800">Google Cloud</div>
        <div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none">
            Start Free
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow bg-gray-50 flex justify-center items-center px-4">
        <div className="text-center max-w-2xl space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Start with $300 in free credits and free usage of 20+ products
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything about Google Cloud"
              className="w-full py-4 px-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            />
            <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 2l4 4m0 0l4 4m-4-4v12M6 2l-4 4m0 0l-4 4m4-4v12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-gradient-to-r from-green-400 to-yellow-500 text-white py-3 px-6 rounded-md shadow-md hover:opacity-80 transition">
              Add generative AI to my application
            </button>
            <button className="bg-gradient-to-r from-green-400 to-yellow-500 text-white py-3 px-6 rounded-md shadow-md hover:opacity-80 transition">
              Find a product for my use case
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 px-8 mt-10">
        <div className="text-center">
          <p>&copy; 2025 Google Cloud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
