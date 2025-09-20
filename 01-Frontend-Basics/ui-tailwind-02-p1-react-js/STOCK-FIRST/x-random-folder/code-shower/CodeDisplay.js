import React from 'react';

const CodeDisplay = ({ title, code }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-white text-lg mb-2">{title}</h3>
      <pre className="text-white font-mono text-sm overflow-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;