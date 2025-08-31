// File: ButtonsShowcase.jsx
import React from "react";

export default function ButtonsShowcase() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Primary / Secondary / Danger */}
      <h1 className="text-2xl font-bold mb-2">Primary / Secondary / Danger</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Primary
      </button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
        Secondary
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
        Danger
      </button>
      <br /><br />

      {/* Hoverable / Focusable / Disabled */}
      <h1 className="text-2xl font-bold mb-2">Hoverable / Focusable / Disabled</h1>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:ring-2 focus:ring-green-300">
        Hover & Focus
      </button>
      <button
        className="bg-gray-400 text-gray-200 px-4 py-2 rounded cursor-not-allowed"
        disabled
      >
        Disabled
      </button>
      <br /><br />

      {/* Outline / Pill / Icon / Gradient / Ghost */}
      <h1 className="text-2xl font-bold mb-2">Outline / Pill / Icon / Gradient / Ghost</h1>
      <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
        Outline
      </button>
      <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-700">
        Pill
      </button>
      <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-700">
        ❤️
      </button>
      <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded hover:from-pink-600 hover:to-yellow-600">
        Gradient
      </button>
      <button className="text-blue-500 border border-transparent hover:border-blue-500 hover:bg-blue-100 px-4 py-2 rounded">
        Ghost
      </button>
      <br /><br />

      {/* Small / Medium / Large */}
      <h1 className="text-2xl font-bold mb-2">Small / Medium / Large</h1>
      <button className="bg-indigo-500 text-white px-2 py-1 text-sm rounded">Small</button>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded">Medium</button>
      <button className="bg-indigo-500 text-white px-6 py-3 text-lg rounded">Large</button>
      <br /><br />
    </div>
  );
}
