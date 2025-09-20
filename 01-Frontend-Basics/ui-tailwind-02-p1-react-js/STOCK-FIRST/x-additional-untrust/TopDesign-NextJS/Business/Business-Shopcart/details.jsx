// pages/product.js
import React from 'react';

const ProductPage = () => {
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

      {/* Product Detail Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/500"
            alt="Airpods Max"
            className="w-full max-w-sm object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Airpods Max</h2>
          <p className="text-lg text-gray-600">A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.</p>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-600">(121 reviews)</span>
          </div>

          {/* Price */}
          <div className="space-y-4">
            <p className="text-2xl font-bold text-gray-900">$549.00 or 99.99/month</p>
            <p className="text-sm text-gray-600">Suggested payments with 6 months special financing</p>
          </div>

          {/* Color Picker */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Choose a Color</h3>
            <div className="flex space-x-4 mt-2">
              <button className="w-8 h-8 bg-red-500 rounded-full hover:ring-2 ring-red-300"></button>
              <button className="w-8 h-8 bg-blue-500 rounded-full hover:ring-2 ring-blue-300"></button>
              <button className="w-8 h-8 bg-gray-500 rounded-full hover:ring-2 ring-gray-300"></button>
              <button className="w-8 h-8 bg-green-500 rounded-full hover:ring-2 ring-green-300"></button>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-200 rounded-lg text-xl text-gray-700">-</button>
            <input type="number" value={1} className="w-16 text-center border border-gray-300 rounded-lg py-2" />
            <button className="px-4 py-2 bg-gray-200 rounded-lg text-xl text-gray-700">+</button>
          </div>

          {/* Stock Info */}
          <p className="text-sm text-gray-600">Only 12 items left! Don't miss it</p>

          {/* Buttons */}
          <div className="space-y-4">
            <button className="w-full px-8 py-3 bg-green-600 text-white rounded-full text-lg font-medium hover:bg-green-700 transition duration-300">
              Buy Now
            </button>
            <button className="w-full px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>

          {/* Delivery Info */}
          <div className="space-y-2 text-sm text-gray-600">
            <p className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Free Delivery</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-yellow-500">✔️</span>
              <span>Return Delivery</span>
            </p>
            <p className="text-sm text-blue-500 cursor-pointer hover:underline">Enter your Postal Code for Delivery Availability</p>
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

export default ProductPage;
