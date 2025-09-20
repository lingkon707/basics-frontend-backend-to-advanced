"use client";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Fertilizer Pro 1",
    price: "$12.99",
    date: "2025-07-01",
    img: "https://m.media-amazon.com/images/I/61+FNZ7DptL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    name: "Crop Booster 2",
    price: "$10.50",
    date: "2025-07-02",
    img: "https://m.media-amazon.com/images/I/61j-lpgB9+L._UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Soil Enhancer 3",
    price: "$8.99",
    date: "2025-07-03",
    img: "https://m.media-amazon.com/images/I/61BGLZw9P1L._UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Agro Special 4",
    price: "$14.99",
    date: "2025-07-04",
    img: "https://bizimages.withfloats.com/actual/5a8cf13ba3f9b90be0025abb.jpg",
  },
];

export default function ZoomImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setOrigin({ x: `${x}%`, y: `${y}%` });
  };

  const handleMouseLeave = () => {
    setOrigin({ x: "50%", y: "50%" });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-lg border border-green-100">
      {/* Main Image with Zoom */}
      <div
        className="relative w-full h-64 rounded-xl overflow-hidden border border-green-200 bg-white mb-4"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={products[selectedIndex].img}
          alt={products[selectedIndex].name}
          className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
          style={{
            transform: "scale(1.6)",
            transformOrigin: `${origin.x} ${origin.y}`,
          }}
        />
      </div>

      {/* Info */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{products[selectedIndex].name}</h2>
        <p className="text-green-600 font-medium">{products[selectedIndex].price}</p>
        <p className="text-xs text-gray-500">{products[selectedIndex].date}</p>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {products.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setSelectedIndex(idx)}
            className={`rounded-xl overflow-hidden border-2 transition-transform duration-200 ${
              selectedIndex === idx
                ? "border-green-500 shadow"
                : "border-transparent hover:border-green-300"
            }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-16 object-cover bg-white"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
