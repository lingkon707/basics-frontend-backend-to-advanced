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

export default function ProductDetailsPage() {
  const [selected, setSelected] = useState(0);
  const product = products[selected];

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Image section */}
          <div className="flex-1">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[300px] object-contain rounded-xl border border-green-200 bg-white mb-4"
            />
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {products.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(i)}
                  className={`border-2 rounded-xl overflow-hidden transition-all ${
                    selected === i
                      ? "border-green-500 shadow"
                      : "border-transparent hover:border-green-300"
                  }`}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-16 object-cover bg-white"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Details section */}
          <div className="flex-1 space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-green-600 text-lg font-semibold">{product.price}</p>
            <p className="text-sm text-gray-500">Published on: {product.date}</p>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Product Description</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.name} is one of our premium agricultural products,
                specially designed to improve crop health and boost soil productivity.
                Perfect for seasonal farmers and professionals.
              </p>
            </div>

            <div className="mt-6">
              <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
