// File: ButtonsShowcase.jsx
import React from "react";

export default function ButtonsShowcase() {
  return (
    // <main className="flex justify-center items-center min-h-screen bg-gray-100">
    <main>
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-4">
        {/* Left arrow button */}
        <button className="bg-gray-200 text-gray-600 text-lg p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
          &lt;
        </button>
        
        {/* Page 1 button (active) */}
        <button className="bg-blue-500 text-white text-lg font-medium py-2 px-6 rounded-full shadow-md transform hover:scale-105 transition-transform duration-200">
          1
        </button>

        {/* Page 2 button */}
        <button className="bg-gray-200 text-gray-600 text-lg py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
          2
        </button>

        {/* Page 3 button */}
        <button className="bg-gray-200 text-gray-600 text-lg py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
          3
        </button>

        {/* Right arrow button */}
        <button className="bg-gray-200 text-gray-600 text-lg p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
          &gt;
        </button>
      </div>
    </main>
  );
}
