// pages/product.js
import React, { useState } from 'react';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Maroon");

  const handleQuantityChange = (action) => {
    setQuantity(action === "increase" ? quantity + 1 : Math.max(1, quantity - 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Product Detail Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="flex justify-center mb-8 md:mb-0">
          <img
            src="https://via.placeholder.com/500"
            alt="Minimalist Ceramic Vase"
            className="w-full max-w-sm object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Minimalist Ceramic Vase</h2>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-600">(64 reviews)</span>
          </div>

          <p className="text-lg text-gray-600">
            Bring a touch of nature indoors with the Flowerpot, a sustainable masterpiece made from reclaimed metal and finished with eco-friendly, plant-based dyes.
          </p>

          {/* Price */}
          <div className="space-y-4">
            <p className="text-2xl font-bold text-gray-900">$44.00 <span className="text-sm line-through text-gray-600">$65.60</span></p>
          </div>

          {/* Color Picker */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Choose a Color</h3>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => setSelectedColor("Maroon")}
                className={`w-8 h-8 rounded-full ${selectedColor === "Maroon" ? "ring-2 ring-maroon-400" : "bg-maroon-400"}`}
              />
              <button
                onClick={() => setSelectedColor("Green")}
                className={`w-8 h-8 rounded-full ${selectedColor === "Green" ? "ring-2 ring-green-400" : "bg-green-400"}`}
              />
              <button
                onClick={() => setSelectedColor("Purple")}
                className={`w-8 h-8 rounded-full ${selectedColor === "Purple" ? "ring-2 ring-purple-400" : "bg-purple-400"}`}
              />
              <button
                onClick={() => setSelectedColor("Yellow")}
                className={`w-8 h-8 rounded-full ${selectedColor === "Yellow" ? "ring-2 ring-yellow-400" : "bg-yellow-400"}`}
              />
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="px-4 py-2 bg-gray-200 rounded-lg text-xl text-gray-700"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              className="w-16 text-center border border-gray-300 rounded-lg py-2"
              readOnly
            />
            <button
              onClick={() => handleQuantityChange("increase")}
              className="px-4 py-2 bg-gray-200 rounded-lg text-xl text-gray-700"
            >
              +
            </button>
          </div>

          {/* Add to Cart & Buy Now Buttons */}
          <div className="space-y-4">
            <button className="w-full px-8 py-3 bg-green-600 text-white rounded-full text-lg font-medium hover:bg-green-700 transition duration-300">
              Add to Cart
            </button>
            <button className="w-full px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300">
              Buy Now
            </button>
          </div>

          {/* Additional Information */}
          <div className="space-y-2 text-sm text-gray-600">
            <p className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Timeless Quality</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Eco-Friendly</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-green-500">✔️</span>
              <span>Craftsmanship</span>
            </p>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      <div className="fixed top-0 right-0 w-80 bg-white shadow-xl h-full p-6 space-y-6 md:hidden">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-900">Cart</h3>
          <button className="text-gray-600">✕</button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <img
              src="https://via.placeholder.com/50"
              alt="Minimalist Ceramic Vase"
              className="w-12 h-12 object-cover rounded-lg"
            />
            <div className="flex flex-col space-y-1">
              <p className="font-medium text-gray-800">Minimalist Ceramic Vase</p>
              <p className="text-sm text-gray-600">Color: {selectedColor}</p>
              <p className="text-sm text-gray-600">${64}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-gray-600">-</button>
              <span className="text-gray-600">2</span>
              <button className="text-gray-600">+</button>
            </div>
          </div>
          <hr />
          <div>
            <p className="font-medium text-lg text-gray-900">Total: $128.00</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button className="w-full py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition duration-300">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
