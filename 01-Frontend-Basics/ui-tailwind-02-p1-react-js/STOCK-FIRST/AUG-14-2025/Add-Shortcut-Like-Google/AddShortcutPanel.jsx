import React, { useState } from 'react';

const AddShortcutPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shortcuts, setShortcuts] = useState([]);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleAddClick = () => setIsOpen(true);
  const handleCancel = () => {
    setIsOpen(false);
    setName('');
    setUrl('');
  };

//   const handleSubmit = () => {
//     if (!name || !url) return;
//     setShortcuts([...shortcuts, { name, url }]);
//     handleCancel();
//   };

const handleSubmit = () => {
  if (!name || !url) return;

  // Ensure URL starts with http:// or https://
  let fullUrl = url.trim();
  if (!/^https?:\/\//i.test(fullUrl)) {
    fullUrl = 'https://' + fullUrl;
  }

  setShortcuts([...shortcuts, { name, url: fullUrl }]);
  handleCancel();
};


  return (
    <div className="p-8">
      {/* Shortcuts Display */}
      <div className="flex flex-wrap gap-6">
        {shortcuts.map((item, index) => (
          <div
            key={index}
            onClick={() => window.open(item.url, '_blank')}
            className="flex flex-col items-center justify-center w-24 h-24 rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer shadow-md transition-all"
          >
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {item.name[0].toUpperCase()}
            </div>
            <span className="mt-2 text-sm text-gray-800 text-center w-full truncate">{item.name}</span>
          </div>
        ))}

        {/* Add Shortcut Button */}
        <div
          onClick={handleAddClick}
          className="flex flex-col items-center justify-center w-24 h-24 rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer shadow-md transition-all"
        >
          <div className="flex items-center justify-center w-14 h-14 bg-teal-300 rounded-full text-black text-3xl">
            +
          </div>
          <span className="mt-2 text-sm text-gray-700 text-center">Add shortcut</span>
        </div>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1">URL</label>
              <input
                type="text"
                className="w-full p-2 border-b border-teal-600 bg-gray-100 rounded"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancel}
                className="px-4 py-1 rounded-full border border-teal-400 text-teal-600 hover:bg-teal-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!name || !url}
                className={`px-4 py-1 rounded-full text-white ${
                  name && url ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-300 cursor-not-allowed'
                }`}
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

export default AddShortcutPanel;
