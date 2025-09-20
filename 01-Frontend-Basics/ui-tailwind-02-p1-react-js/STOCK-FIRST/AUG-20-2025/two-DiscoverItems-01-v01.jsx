import React from 'react';

const DiscoverItems = () => {
  return (
    <div className="w-full p-8 flex justify-center">
      <div className="flex space-x-8 w-full max-w-screen-xl">
        {/* Best rated items card */}
        <div className="bg-black text-white rounded-lg p-6 flex items-center space-x-4 w-full sm:w-72">
          <div className="bg-gradient-to-r from-teal-400 to-purple-500 p-4 rounded-full">
            <i className="fas fa-star text-white text-xl"></i>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Discover best rated items</h2>
            <p className="text-sm text-gray-400">Browse now →</p>
          </div>
        </div>

        {/* Bestselling items card */}
        <div className="bg-white text-black rounded-lg p-6 flex items-center space-x-4 w-full sm:w-72 shadow-lg">
          <div className="bg-gradient-to-r from-pink-500 to-purple-400 p-4 rounded-full">
            <i className="fas fa-fire text-white text-xl"></i>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Discover bestselling items</h2>
            <p className="text-sm text-gray-400">Browse now →</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverItems;
