import React from 'react';

const ButtonGroup = () => {
  return (
    <div className="w-64 p-4 border border-gray-300 rounded-lg shadow-lg">
      <div className="flex flex-col space-y-2">
        {/* Submit Button */}
        <button className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-md text-sm hover:bg-teal-600 transition">
          Submit
        </button>

        {/* Cancel Button */}
        <button className="px-4 py-2 bg-gray-200 text-black font-semibold rounded-md text-sm hover:bg-gray-300 transition">
          Cancel
        </button>

        {/* Help Button */}
        <button className="px-4 py-2 border border-gray-300 text-black font-semibold rounded-md text-sm hover:bg-gray-100 transition">
          Help
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;
