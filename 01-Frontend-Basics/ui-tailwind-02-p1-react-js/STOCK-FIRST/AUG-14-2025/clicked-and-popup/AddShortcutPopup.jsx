import React, { useState } from 'react';

const AddShortcutPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      {/* Add Shortcut Button */}
      <div
        onClick={() => setIsOpen(true)}
        className="flex flex-col items-center justify-center w-24 h-24 rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer shadow-md transition-all"
      >
        <div className="flex items-center justify-center w-14 h-14 bg-teal-300 rounded-full text-black text-3xl">
          +
        </div>
        <span className="mt-2 text-sm text-gray-700 text-center">Add shortcut</span>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
            <h2 className="text-lg font-semibold mb-4">Add shortcut</h2>

            <div className="mb-4">
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border-b border-teal-600 bg-gray-100 rounded"
                placeholder="Enter name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1">URL</label>
              <input
                type="text"
                className="w-full p-2 border-b border-teal-600 bg-gray-100 rounded"
                placeholder="https://example.com"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1 rounded-full border border-teal-400 text-teal-600 hover:bg-teal-50"
              >
                Cancel
              </button>
              <button
                className="px-4 py-1 rounded-full bg-teal-600 hover:bg-teal-700 text-white"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddShortcutPopup;
