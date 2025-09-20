'use client';

import React from 'react';

const products = [
  {
    name: 'Frozen Food',
    image: 'https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png',
    description: 'Premium frozen food products for everyday convenience.',
  },
  {
    name: 'Cheer Up Banner',
   image: 'https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png',
    description: 'Vibrant banners to brighten up your day.',
  },
  {
    name: 'PranUp KV',
   image: 'https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png',
    description: 'Healthy and tasty products from PranUp.',
  },
  {
    name: 'Banner Min',
   image: 'https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png',
    description: 'Eye-catching promotional banners.',
  },
  {
    name: 'Beverage',
   image: 'https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png',
    description: 'Refreshing drinks for every occasion.',
  },
  {
    name: 'Bombay Sweets',
    image: 'https://www.bombaysweetsbd.com/images/slider/slide-05.jpg',
    description: 'Delicious sweets and snacks.',
  },
  {
    name: 'Tortilla Chips',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/06/tkp-tortilla-chipsArtboard-2.jpg',
    description: 'Crunchy tortilla chips for snacking.',
  },
  {
    name: 'Noodles Shop Sign',
    image: 'https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png',
    description: 'Shop sign design for noodles brand.',
  },
];

export default function ProductPage() {
return (
  <section className="bg-gray-950 min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-16">
    <div className="max-w-7xl mx-auto">
      {/* Page Title */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-cyan-400 mb-12 drop-shadow-lg">
        Our Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="group bg-gray-900/80 rounded-3xl overflow-hidden shadow-lg flex flex-col hover:scale-105 hover:shadow-cyan-400/50 transition-transform duration-300 cursor-pointer"
          >
            {/* Product Image */}
            <div className="relative w-full h-60 overflow-hidden rounded-t-3xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-95 group-hover:brightness-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-t-3xl"></div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-1 p-5 gap-3">
              <h3 className="text-xl font-bold text-cyan-300 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base flex-1">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-3">
                <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold py-2 px-4 rounded-xl shadow-md transition-all duration-300">
                  View Details
                </button>
                <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold py-2 px-4 rounded-xl shadow-md transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

}
