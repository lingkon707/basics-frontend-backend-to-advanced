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

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg select-none">
      <div className="relative">
        <img
          src={currentProduct.img}
          alt={currentProduct.name}
          className="w-full h-64 object-contain rounded-md"
        />
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-green-600 text-white rounded-full p-2 hover:bg-green-700 transition"
          aria-label="Previous Slide"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-600 text-white rounded-full p-2 hover:bg-green-700 transition"
          aria-label="Next Slide"
        >
          ›
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">{currentProduct.name}</h3>
        <p className="text-green-600 font-semibold">{currentProduct.price}</p>
        <p className="text-gray-500 text-sm">Date: {currentProduct.date}</p>
        <p className="text-gray-400 text-xs mt-1">
          {currentIndex + 1} / {products.length}
        </p>
      </div>
    </div>
  );
}
