import React from 'react';

const Main = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8">
      {/* Container */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Take your marketing to the next level
        </h2>
        
        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-6">
          Get help building and optimising Google Ads campaigns today.
        </p>

        {/* Button */}
        <a 
          href="#"
          className="inline-block bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Find a Partner
        </a>
      </div>
    </div>
  );
};

export default Main;
