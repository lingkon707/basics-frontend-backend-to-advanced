import React from "react";

const Searchbox = () => {
  return (
    <div className="bg-white max-h-screen">
      <br /> <br /> <br /> <br />
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search for icons"
          className="w-full py-4 px-6 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          <span className="text-lg">🔍</span>
        </button>
      </div>
    </div>
  );
};

export default Searchbox;
