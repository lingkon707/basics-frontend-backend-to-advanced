import React from 'react';

const VerticalButtonGroup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-64 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <div className="space-y-4">
          {/* Edit Button */}
          <button className="w-full px-5 py-3 bg-indigo-600 text-white font-semibold rounded-md text-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
            Edit
          </button>

          {/* Delete Button */}
          <button className="w-full px-5 py-3 bg-red-600 text-white font-semibold rounded-md text-lg hover:bg-red-700 transition duration-300 ease-in-out">
            Delete
          </button>

          {/* View Button */}
          <button className="w-full px-5 py-3 bg-teal-500 text-white font-semibold rounded-md text-lg hover:bg-teal-600 transition duration-300 ease-in-out">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerticalButtonGroup;
