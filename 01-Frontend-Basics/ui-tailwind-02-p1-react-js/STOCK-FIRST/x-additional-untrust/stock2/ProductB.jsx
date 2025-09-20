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
        <h1 className="text-5xl font-extrabold text-center text-cyan-400 mb-12 drop-shadow-lg">
          Our Products
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-gray-900/80 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-cyan-400/40 transition-transform duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="w-full h-56 overflow-hidden rounded-t-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-xl font-bold text-cyan-300 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base flex-1">
                  {product.description}
                </p>

                {/* Button */}
                <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold py-2 px-4 rounded-xl shadow-md transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
