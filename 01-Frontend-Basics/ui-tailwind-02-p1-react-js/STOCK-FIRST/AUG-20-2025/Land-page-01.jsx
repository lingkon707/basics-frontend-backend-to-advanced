import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center py-16 px-8">
        {/* Title */}
        <h1 className="text-5xl font-extrabold leading-tight mb-4 text-orange-500">
          PROMOTORS
        </h1>
        <h2 className="text-3xl font-semibold mb-6">
          THE BEST CAR REPAIR SERVICES TEMPLATE
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-8">
          This Template can be used for Auto Mechanics, Car Repair Shops,
          Garages, Mechanic Workshops, Auto Painting, and other Auto & Car
          related services.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-6">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-all">
            Discover Demos
          </button>
          <button className="px-6 py-3 border-2 border-gray-500 text-white font-semibold rounded-md hover:bg-gray-700 transition-all">
            Core Features
          </button>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex justify-center mt-12 space-x-6">
        <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/HTML5_logo.svg" alt="HTML5" className="h-8" />
          <p>HTML 5</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/CSS3_logo.svg" alt="CSS3" className="h-8" />
          <p>CSS 3</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/JQuery_logo.svg" alt="jQuery" className="h-8" />
          <p>jQuery</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Bootstrap_logo.svg" alt="Bootstrap 5" className="h-8" />
          <p>Bootstrap 5</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md flex items-center justify-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Sass_Logo.svg" alt="Sass" className="h-8" />
          <p>SCSS</p>
        </div>
      </div>

      {/* Demo Section */}
      <div className="mt-8">
        <p className="text-xl font-semibold text-gray-300">10+ HOME DEMOS</p>
      </div>
    </div>
  );
};

export default LandingPage;
