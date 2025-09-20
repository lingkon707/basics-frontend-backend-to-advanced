import React from 'react';

export default function WebCard() {
  return (
    <div className="bg-[#107be6] py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        {/* Browser Mockup Header */}
        <div className="h-8 w-full bg-gray-100 rounded-t-xl flex items-center px-5 text-sm text-gray-500 font-mono select-none mb-6">
          🔒 Data.com
        </div>

        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
          Stay True to the Web
        </h2>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-prose">
          React lets you stream HTML while fetching data, so pages load faster. On the client, it uses web APIs to keep the UI smooth and responsive—even during heavy rendering.
        </p>

        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition w-full sm:w-auto"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
