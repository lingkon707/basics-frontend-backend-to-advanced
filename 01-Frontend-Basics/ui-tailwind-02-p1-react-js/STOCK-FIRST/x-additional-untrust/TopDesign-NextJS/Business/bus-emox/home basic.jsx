// pages/index.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-8">
          <h1 className="text-4xl font-bold text-gray-900">e.mox</h1>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="px-6 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="text-gray-700">Sign In</button>
          <button className="text-gray-700">Cart</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-200 to-blue-300 p-20 rounded-xl shadow-lg mb-12">
        <div className="absolute top-0 left-0 w-full h-full bg-cover opacity-60"
          style={{ backgroundImage: "url('https://via.placeholder.com/1200x600')" }}></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl font-semibold leading-tight">Discover Best Sellers</h2>
          <p className="mt-4 text-lg">Live shopping experience every Tuesday, Wednesday, and Thursday</p>
          <button className="mt-6 px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:bg-purple-600 transition duration-300">
            Watch Now
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Browse Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Category Cards */}
          <div className="relative bg-gradient-to-br from-green-300 to-blue-300 rounded-lg shadow-xl overflow-hidden group hover:scale-105 transition duration-300">
            <img src="https://via.placeholder.com/300" alt="Furniture" className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex justify-center items-center text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300">
              Furniture
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-yellow-300 to-pink-300 rounded-lg shadow-xl overflow-hidden group hover:scale-105 transition duration-300">
            <img src="https://via.placeholder.com/300" alt="Sneakers" className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex justify-center items-center text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300">
              Sneakers
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-orange-400 to-purple-500 rounded-lg shadow-xl overflow-hidden group hover:scale-105 transition duration-300">
            <img src="https://via.placeholder.com/300" alt="Health" className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex justify-center items-center text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300">
              Health
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-red-400 to-yellow-500 rounded-lg shadow-xl overflow-hidden group hover:scale-105 transition duration-300">
            <img src="https://via.placeholder.com/300" alt="Beauty" className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex justify-center items-center text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300">
              Beauty
            </div>
          </div>
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
