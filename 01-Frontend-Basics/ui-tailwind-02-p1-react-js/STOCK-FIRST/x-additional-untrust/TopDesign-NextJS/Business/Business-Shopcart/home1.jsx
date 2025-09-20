// pages/index.js
import React from 'react'

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-semibold text-gray-900">Shopcart</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700">Categories</a>
            <a href="#" className="text-gray-700">Deals</a>
            <a href="#" className="text-gray-700">What's New</a>
            <a href="#" className="text-gray-700">Delivery</a>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <input
            type="text"
            className="px-4 py-2 rounded-lg border border-gray-300"
            placeholder="Search products"
          />
          <a href="#" className="text-gray-700">Account</a>
        </div>
      </header>

      {/* Promotional Banner Section */}
      <section className="bg-green-200 text-center py-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Grab Upto 50% Off On Selected Headphones</h2>
        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg">Buy Now</button>
      </section>

      {/* Product Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border border-gray-300 rounded-lg p-4">
          <img src="https://via.placeholder.com/200" alt="Wireless Earbuds" className="w-full h-48 object-cover rounded-lg"/>
          <h3 className="mt-4 text-lg font-medium text-gray-800">Wireless Earbuds</h3>
          <p className="text-sm text-gray-600">Price: $59.99</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full">Add to Cart</button>
        </div>
        <div className="border border-gray-300 rounded-lg p-4">
          <img src="https://via.placeholder.com/200" alt="AirPods Max" className="w-full h-48 object-cover rounded-lg"/>
          <h3 className="mt-4 text-lg font-medium text-gray-800">AirPods Max</h3>
          <p className="text-sm text-gray-600">Price: $550</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full">Add to Cart</button>
        </div>
        <div className="border border-gray-300 rounded-lg p-4">
          <img src="https://via.placeholder.com/200" alt="Vivefox Headphones" className="w-full h-48 object-cover rounded-lg"/>
          <h3 className="mt-4 text-lg font-medium text-gray-800">Vivefox Headphones</h3>
          <p className="text-sm text-gray-600">Price: $139</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full">Add to Cart</button>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <img src="https://via.placeholder.com/60" alt="Furniture" className="mx-auto"/>
            <p className="mt-2 text-sm text-gray-700">Furniture</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <img src="https://via.placeholder.com/60" alt="Headphones" className="mx-auto"/>
            <p className="mt-2 text-sm text-gray-700">Headphones</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <img src="https://via.placeholder.com/60" alt="Shoe" className="mx-auto"/>
            <p className="mt-2 text-sm text-gray-700">Shoe</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <img src="https://via.placeholder.com/60" alt="Laptop" className="mx-auto"/>
            <p className="mt-2 text-sm text-gray-700">Laptop</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center py-8 bg-gray-100">
        <p className="text-sm text-gray-500">© 2025 Shopcart | <a href="#" className="text-blue-600">Privacy</a> | <a href="#" className="text-blue-600">Terms</a></p>
      </footer>
    </div>
  )
}

export default HomePage
