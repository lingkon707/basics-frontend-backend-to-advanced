// components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
      <h1 className="text-4xl font-bold tracking-widest text-gray-500">Wait for My website</h1>
    </div>
  );
};

export default Loader;
