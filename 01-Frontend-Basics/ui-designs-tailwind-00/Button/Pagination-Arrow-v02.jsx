// File: ButtonsShowcase.jsx
import React from "react";

export default function ButtonsShowcase() {
  return (
    // <main className="flex justify-center items-center min-h-screen bg-gray-200">
    <main>
      <div className="bg-white p-6 rounded-lg shadow-xl flex items-center justify-center space-x-3">
        <button className="text-gray-600 text-lg p-3 rounded-lg hover:bg-gray-200 transition-colors duration-300">
          &lt;
        </button>
        <button className="bg-indigo-600 text-white text-lg font-semibold p-3 rounded-lg shadow-md transition-colors duration-300">
          1
        </button>
        <button className="text-gray-600 text-lg hover:bg-gray-200 p-3 rounded-lg transition-colors duration-300">
          2
        </button>
        <button className="text-gray-600 text-lg hover:bg-gray-200 p-3 rounded-lg transition-colors duration-300">
          3
        </button>
        <button className="text-gray-600 text-lg p-3 rounded-lg hover:bg-gray-200 transition-colors duration-300">
          &gt;
        </button>
      </div>
    </main>
  );
}
