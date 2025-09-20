// pages/index.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-6">
          <h1 className="text-3xl font-bold text-gray-900">e.mox</h1>
          <nav className="space-x-6 text-lg">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">All Categories</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">Electronics</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">Fashion</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">Kids’ Fashion</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">Luxury Item</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for any product or brand"
            className="px-6 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center space-x-4">
            <button className="text-gray-700">Cart</button>
            <button className="text-gray-700">Sign In</button>
          </div>
        </div>
      </header>

      {/* Main Banner Section */}
      <section className="mb-12 relative">
        <div className="relative bg-green-100 p-10 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-900">Best Sellers</h2>
          <p className="mt-2 text-lg text-gray-700">Live on Tuesdays, Wednesdays, Thursdays</p>
          <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Watch
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-green-200 opacity-30"></div>
      </section>

      {/* Categories Section */}
      <section>
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">Shop by Category</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category Card */}
          <div className="relative bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/300"
              alt="Furniture"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900">Furniture</h4>
          </div>
          <div className="relative bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/300"
              alt="Sneakers"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900">Sneakers</h4>
          </div>
          <div className="relative bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/300"
              alt="Baby Kids"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900">Baby Kids</h4>
          </div>
          <div className="relative bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/300"
              alt="Hand Bag"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900">Hand Bag</h4>
          </div>
          {/* Add more categories in the same manner */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-16 text-center py-8 bg-gray-100">
        <p className="text-sm text-gray-500">© 2025 e.mox | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
