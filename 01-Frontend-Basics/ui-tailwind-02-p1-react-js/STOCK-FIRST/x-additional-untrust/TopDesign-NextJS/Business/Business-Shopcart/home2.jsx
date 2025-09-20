// pages/index.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-6">
          <h1 className="text-4xl font-bold text-gray-900">Shopcart</h1>
          <nav className="space-x-8 text-lg">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">Categories</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">Deals</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">What's New</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">Delivery</a>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <input
            type="text"
            className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search products"
          />
          <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">Account</a>
        </div>
      </header>

      {/* Promotional Banner Section */}
      <section className="bg-green-500 text-center py-12 mb-16 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white">Grab Up to 50% Off on Selected Headphones</h2>
        <button className="mt-6 px-8 py-3 bg-white text-green-600 rounded-full text-lg font-medium hover:bg-green-100 transition duration-300">
          Shop Now
        </button>
      </section>

      {/* Product Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition duration-300">
          <img src="https://via.placeholder.com/200" alt="Wireless Earbuds" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold text-gray-800">Wireless Earbuds</h3>
          <p className="text-sm text-gray-600">Price: $59.99</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition duration-300">
          <img src="https://via.placeholder.com/200" alt="AirPods Max" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold text-gray-800">AirPods Max</h3>
          <p className="text-sm text-gray-600">Price: $550</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition duration-300">
          <img src="https://via.placeholder.com/200" alt="Vivefox Headphones" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h3 className="text-xl font-semibold text-gray-800">Vivefox Headphones</h3>
          <p className="text-sm text-gray-600">Price: $139</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
          <div className="p-6 bg-gray-100 rounded-xl text-center hover:bg-gray-200 transition duration-300">
            <img src="https://via.placeholder.com/60" alt="Furniture" className="mx-auto mb-4"/>
            <p className="text-lg text-gray-800">Furniture</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl text-center hover:bg-gray-200 transition duration-300">
            <img src="https://via.placeholder.com/60" alt="Headphones" className="mx-auto mb-4"/>
            <p className="text-lg text-gray-800">Headphones</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl text-center hover:bg-gray-200 transition duration-300">
            <img src="https://via.placeholder.com/60" alt="Shoe" className="mx-auto mb-4"/>
            <p className="text-lg text-gray-800">Shoe</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl text-center hover:bg-gray-200 transition duration-300">
            <img src="https://via.placeholder.com/60" alt="Laptop" className="mx-auto mb-4"/>
            <p className="text-lg text-gray-800">Laptop</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center py-8 bg-gray-100 shadow-md">
        <p className="text-sm text-gray-500">© 2025 Shopcart | <a href="#" className="text-blue-600 hover:underline">Privacy</a> | <a href="#" className="text-blue-600 hover:underline">Terms</a></p>
      </footer>
    </div>
  );
};

export default HomePage;
