import React from 'react';

const NewButtonGroup = () => {
  return (
    <div className="w-80 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-center">
        {/* Save Button */}
        <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-md text-sm hover:bg-blue-600 transition">
          Save
        </button>

        {/* Reset Button */}
        <button className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-md text-sm hover:bg-yellow-500 transition">
          Reset
        </button>

        {/* Info Button */}
        <button className="px-5 py-2 bg-green-500 text-white font-semibold rounded-md text-sm hover:bg-green-600 transition">
          Info
        </button>
      </div>
    </div>
  );
};

export default NewButtonGroup;
