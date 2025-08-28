import React from "react";

const Searchbox = () => {
  return (
    <div className="max-w-2xl mx-auto mt-20">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-4 px-6 rounded-2xl bg-gray-100 text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
          <span className="text-lg">🔍</span>
        </button>
      </div>
    </div>
  );
};

export default Searchbox;
