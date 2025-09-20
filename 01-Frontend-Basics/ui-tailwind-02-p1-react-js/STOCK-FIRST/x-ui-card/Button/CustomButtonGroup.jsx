import React from 'react';

const CustomButtonGroup = () => {
  return (
    <div className="w-72 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <div className="flex flex-col space-y-3">
        {/* Primary Button */}
        <button className="w-full px-6 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-full text-sm hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
          Primary
        </button>

        {/* Secondary Button */}
        <button className="w-full px-6 py-2 border-2 border-gray-600 text-gray-600 font-semibold rounded-full text-sm hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
          Secondary
        </button>

        {/* Tertiary Button */}
        <button className="w-full px-6 py-2 border-2 border-green-600 text-green-600 font-semibold rounded-full text-sm hover:bg-green-600 hover:text-white transition duration-300 ease-in-out">
          Tertiary
        </button>
      </div>
    </div>
  );
};

export default CustomButtonGroup;
