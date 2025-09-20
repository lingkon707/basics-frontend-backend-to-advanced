import React from 'react';

const Stats = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
        {/* Left Circle */}
        <div className="bg-gray-800 text-white text-center py-8 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <p className="text-4xl font-semibold">11</p>
          <p className="text-sm">years in business</p>
        </div>

        {/* Middle Circle (Clutch) */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-8 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative">
          <p className="text-4xl font-semibold">Clutch</p>
          <p className="text-2xl">4.9</p>
          <p className="text-sm">happy clients</p>
          <div className="absolute inset-0 border-4 border-gradient-to-r from-yellow-500 to-red-500 rounded-full opacity-30"></div>
        </div>

        {/* Right Circle */}
        <div className="bg-gray-800 text-white text-center py-8 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <p className="text-4xl font-semibold">120+</p>
          <p className="text-sm">digital products shipped</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
