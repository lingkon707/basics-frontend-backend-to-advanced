import React from 'react';

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-8 px-4">
      {/* Container for Content */}
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-5xl w-full">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Look for the badge
        </h2>
        
        {/* Description */}
        <p className="text-lg text-gray-700 mb-6 text-center">
          We award the Google Premier Partner and Partner badge to companies with expert-level Google Ads knowledge and provide them with the latest training, support, and insights in our products. Premier Partners are top performers* that meet our exclusive tier program requirements.
        </p>

        {/* Badges Section */}
        <div className="flex justify-center gap-12 mb-6">
          {/* First Badge */}
          <div className="flex flex-col items-center transition transform hover:scale-105 duration-300">
            <div className="w-24 h-24 bg-gradient-to-r from-red-400 to-yellow-500 rounded-full flex items-center justify-center mb-2">
              <img src="https://cdn.waltonplaza.com.bd/87da39a0-ca46-497c-bb82-aeb237924b08.jpeg" alt="Google Partner" className="w-16 h-16" />
            </div>
            <p className="text-center text-gray-900 font-medium">Google Partner</p>
          </div>

          {/* Second Badge */}
          <div className="flex flex-col items-center transition transform hover:scale-105 duration-300">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-2">
              <img src="https://vibegaming.com.bd/wp-content/uploads/2024/04/Untitled-design-2-32.png" alt="Google Premier Partner 2025" className="w-16 h-16" />
            </div>
            <p className="text-center text-gray-900 font-medium">Google Partner</p>
            <span className="bg-gray-800 text-white text-xs rounded-full px-2 py-1 mt-1">PREMIER 2025</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold py-3 px-8 rounded-full hover:from-indigo-600 hover:to-blue-500 transition duration-300"
          >
            Browse Premier Partners
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
