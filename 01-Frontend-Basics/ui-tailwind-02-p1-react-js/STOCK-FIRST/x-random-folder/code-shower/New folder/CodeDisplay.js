import React from 'react';

const CodeDisplay = ({ title, code }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
      <div className="max-h-80 overflow-y-auto">
        <pre className="text-white font-mono text-sm overflow-auto bg-gray-900 p-4 rounded-md border border-gray-700">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeDisplay;
