// File: ButtonsShowcase.jsx
import React from "react";

export default function ButtonsShowcase() {
  return (
    // <main className="flex justify-center items-center min-h-screen bg-gray-100">
    <main>
      <div className="bg-blue-500 p-4 rounded-xl shadow-lg flex items-center justify-center space-x-4">
        <button className="text-white text-2xl hover:bg-red-600 p-4 rounded-full transition-colors duration-300">
          &lt;
        </button>
        <button className="bg-yellow-400 text-white text-2xl font-semibold p-4 rounded-full shadow-md transition-colors duration-300">
          1
        </button>
        <button className="text-white text-2xl hover:bg-blue-400 p-4 rounded-full hover:scale-105 transition-all duration-300">
          2
        </button>
        <button className="text-white text-2xl hover:bg-blue-400 p-4 rounded-full hover:scale-105 transition-all duration-300">
          3
        </button>
        <button className="text-white text-2xl hover:bg-red-600 p-4 rounded-full transition-colors duration-300">
          &gt;
        </button>
      </div>
    </main>
  );
}
