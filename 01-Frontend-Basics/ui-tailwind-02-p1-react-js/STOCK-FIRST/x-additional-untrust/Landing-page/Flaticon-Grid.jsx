import React from 'react';

const Main = () => {
  return (
    <div className="bg-white py-16 px-8">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          What's New in Flaticon
        </h2>
        <p className="text-lg text-gray-500 mt-2">
          See the latest website updates, new features, and tools, and get the most of your Flaticon experience.
        </p>
      </div>

      {/* Content Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-400 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="bg-white text-indigo-500 font-bold text-xs px-2 py-1 rounded-full">NEW</div>
            <img className="w-10 h-10" src="https://img.icons8.com/ios/452/figma.png" alt="Figma Icon" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            New Figma plugin with SVG format is here
          </h3>
          <p className="text-white text-sm">
            Enhance your workflow with the new Flaticon Figma plugin, now with SVG format support.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="bg-white text-teal-500 font-bold text-xs px-2 py-1 rounded-full">NEW UI</div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Simplify your UI experience</h3>
          <p className="text-white text-sm">
            Explore new filters and color options for a cleaner, faster design experience.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="bg-white text-green-500 font-bold text-xs px-2 py-1 rounded-full">NEW</div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Sort by style and find matching icons fast</h3>
          <p className="text-white text-sm">
            Find the perfect icons faster with our new sorting filters based on style and match.
          </p>
        </div>
      </div>

      {/* "Browse all" Button */}
      <div className="text-center mt-10">
        <button className="bg-green-500 text-white text-lg px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
          Browse all
        </button>
      </div>
    </div>
  );
};

export default Main;
