import React from 'react';

const AddShortcut = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center w-24 h-24 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer shadow-sm transition"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-teal-200 rounded-full text-black text-2xl">
        +
      </div>
      <span className="mt-2 text-sm text-gray-700 text-center">Add shortcut</span>
    </div>
  );
};

export default AddShortcut; // ✅ Make sure this is a default export
