// src/App.js

import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 flex flex-col">
      {/* Header */}
      <br /> <br />
      <header className="bg-transparent py-6 px-8 flex justify-between items-center">
        <div className="text-3xl font-bold text-white">CloudX</div>
        <div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none transform transition duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow flex justify-center items-center text-center space-y-8">
        <div className="max-w-xl text-white space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Unlock the Power of Cloud with $500 in Free Credits
          </h1>

          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything about CloudX"
              className="w-full py-4 px-6 rounded-full border-2 border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg transform transition duration-300 hover:scale-105"
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
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-gradient-to-l focus:outline-none transform transition duration-300 hover:scale-105">
              Get Started with AI
            </button>
            <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-gradient-to-l focus:outline-none transform transition duration-300 hover:scale-105">
              Explore Cloud Solutions
            </button>
            <br /> <br />
          </div>
        </div>
      </main>
      

      
    </div>
  );
}

export default App;
