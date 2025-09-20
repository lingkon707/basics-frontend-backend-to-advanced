// src/App.js

import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-700 to-indigo-900 flex flex-col">
      {/* Header */}
      <header className="bg-transparent mt-2 py-6 px-8 flex justify-between items-center">
        <div className="text-4xl font-serif font-extrabold text-white">CloudVision</div>
        <div>
          <button className="bg-orange-400 text-white px-6 py-2 rounded-lg shadow-2xl hover:bg-orange-500 focus:outline-none transform transition duration-300 hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow flex justify-center items-center text-center space-y-8">
        <div className="max-w-lg text-white space-y-6">
          <h1 className="text-5xl font-serif font-extrabold leading-tight">
            Unleash the Power of Cloud with Free Credits
          </h1>

          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything about CloudVision"
              className="w-full py-4 px-6 rounded-full border-2 border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-lg transform transition duration-300 hover:scale-105"
            />
            <button className="absolute right-6 top-4 text-white">
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

          <div className="space-x-4">
            <button className="bg-gradient-to-r from-orange-300 to-yellow-400 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none transform transition duration-300 hover:scale-105">
              Start with AI
            </button>
            <button className="bg-gradient-to-r from-green-300 to-teal-400 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none transform transition duration-300 hover:scale-105">
              Explore Solutions
            </button>
            <br /> <br />
          </div>
        </div>
      </main>

      {/* Discover More Section */}
      <section className="bg-gray-800 py-16 px-8 text-white text-center">
        <h2 className="text-4xl font-serif font-semibold mb-4">Discover New Features</h2>
        <p className="text-lg mb-8">
          CloudVision offers a range of tools to help businesses scale, from AI models to secure infrastructure.
        </p>
        <button className="bg-orange-400 text-white py-3 px-10 rounded-lg shadow-2xl transform transition duration-300 hover:scale-105">
          Learn More
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 px-8 mt-12 text-center">
        <p>&copy; 2025 CloudVision Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
