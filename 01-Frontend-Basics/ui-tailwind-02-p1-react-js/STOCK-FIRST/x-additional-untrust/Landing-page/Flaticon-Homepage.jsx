import React from 'react';

const Main = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="bg-[#041a3d] text-white py-4 px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">FLATICON</div>
          <nav className="space-x-6">
            <a href="#" className="hover:text-gray-300">Authors</a>
            <a href="#" className="hover:text-gray-300">Icons</a>
            <a href="#" className="hover:text-gray-300">Stickers</a>
            <a href="#" className="hover:text-gray-300">Interface Icons</a>
            <a href="#" className="hover:text-gray-300">Animated Icons</a>
            <a href="#" className="hover:text-gray-300">More</a>
            <a href="#" className="hover:text-gray-300">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300">Sign In</a>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Access 18.1M+ vector icons & stickers
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Download Free Icons and Stickers for your projects. Resources made by and for designers. PNG, SVG, EPS, PSD, and CSS formats.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search for icons"
            className="w-full py-4 px-6 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
            <span className="text-lg">🔍</span>
          </button>
        </div>

        {/* Top Searches */}
        <div className="mt-8">
          <p className="text-lg text-gray-700">Top searches:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <button className="text-gray-500 hover:text-gray-800">Education</button>
            <button className="text-gray-500 hover:text-gray-800">Technology</button>
            <button className="text-gray-500 hover:text-gray-800">User</button>
            <button className="text-gray-500 hover:text-gray-800">Business</button>
            <button className="text-gray-500 hover:text-gray-800">Food</button>
            <button className="text-gray-500 hover:text-gray-800">People</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
