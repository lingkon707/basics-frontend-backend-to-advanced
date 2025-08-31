import React from "react";

const Searchbox = () => {
  return (
    <div className="max-w-2xl mx-auto mt-20">
      <div className="relative flex items-center justify-between border-2 border-gray-300 rounded-lg">
        <input
          type="text"
          placeholder="Search for icons"
          className="w-full py-4 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
        />
        <div className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600">
          <span className="text-lg">🔍</span>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
