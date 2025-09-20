// pages/product-listing.js
import React from 'react';

const ProductListingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Title: Similar Items You Might Like */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Similar Items You Might Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product Card */}
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-md hover:shadow-xl transition duration-300">
            <img src="https://via.placeholder.com/200" alt="Gaming Headphone" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Gaming Headphone</h3>
            <p className="text-sm text-gray-600 mb-2">$239.00</p>
            <div className="flex items-center text-yellow-500 mb-2">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600 ml-2">(121 reviews)</span>
            </div>
            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>
          
          {/* Repeat for other products */}
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-md hover:shadow-xl transition duration-300">
            <img src="https://via.placeholder.com/200" alt="Macbook Pro 13" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Macbook Pro 13"</h3>
            <p className="text-sm text-gray-600 mb-2">$1099.00</p>
            <div className="flex items-center text-yellow-500 mb-2">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600 ml-2">(121 reviews)</span>
            </div>
            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>

          {/* Add more products in the similar manner */}
        </div>
      </section>

      {/* Section Title: Recently Viewed */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Recently Viewed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Recently Viewed Product Card */}
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-md hover:shadow-xl transition duration-300">
            <img src="https://via.placeholder.com/200" alt="Laptop sleeve MacBook" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Laptop sleeve MacBook</h3>
            <p className="text-sm text-gray-600 mb-2">$59.00</p>
            <div className="flex items-center text-yellow-500 mb-2">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600 ml-2">(121 reviews)</span>
            </div>
            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>

          {/* Repeat for other recently viewed items */}
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-md hover:shadow-xl transition duration-300">
            <img src="https://via.placeholder.com/200" alt="AirPods Max" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">AirPods Max</h3>
            <p className="text-sm text-gray-600 mb-2">$550.00</p>
            <div className="flex items-center text-yellow-500 mb-2">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600 ml-2">(121 reviews)</span>
            </div>
            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>

          {/* Add more recently viewed products in the same structure */}
        </div>
      </section>
    </div>
  );
};

export default ProductListingPage;
