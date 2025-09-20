import React from 'react';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-white text-xl font-bold mb-4 text-center">What is in your Mind ?</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="search-item">
            <input
              type="text"
              placeholder="User icon PNG"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="search-item">
            <input
              type="text"
              placeholder="User example"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="search-item">
            <input
              type="text"
              placeholder="Users icon"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="search-item">
            <input
              type="text"
              placeholder="User icon free"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="search-item">
            <input
              type="text"
              placeholder="User icon SVG"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="search-item">
            <input
              type="text"
              placeholder="User icon white"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="search-item">
            <input
              type="text"
              placeholder="User icon png free"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="search-item">
            <input
              type="text"
              placeholder="User icon jpg"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
