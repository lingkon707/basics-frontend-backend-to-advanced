import React from 'react';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-white text-xl font-bold mb-4 text-center">লোকজন এলগিনও সার্চ করছে</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="search-item">
            <button className="w-full p-4 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition duration-200">
              User icon PNG
            </button>
          </div>
          <div className="search-item">
            <button className="w-full p-4 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition duration-200">
              User example
            </button>
          </div>
          <div className="search-item">
            <button className="w-full p-4 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition duration-200">
              Users icon
            </button>
          </div>
          <div className="search-item">
            <button className="w-full p-4 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition duration-200">
              User icon free
            </button>
          </div>
          <div className="search-item">
            <button className="w-full p-4 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition duration-200">
              User icon SVG
            </button>
          </div>
          <div className="search-item">
            <button className="w-full p-4 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition duration-200">
              User icon white
            </button>
          </div>
          <div className="search-item">
            <button className="w-full p-4 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition duration-200">
              User icon png free
            </button>
          </div>
          <div className="search-item">
            <button className="w-full p-4 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition duration-200">
              User icon jpg
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
