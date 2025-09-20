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

export default function MiniGallery() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="max-w-sm mx-auto p-4 bg-gradient-to-b from-green-50 to-white border border-green-100 rounded-2xl shadow-xl">
      {/* Main Image */}
      <div className="w-full mb-3">
        <img
          src={products[selected].img}
          alt={products[selected].name}
          className="w-full h-48 object-contain rounded-xl border border-green-200 bg-white"
        />
      </div>

      {/* Info */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {products[selected].name}
        </h2>
        <p className="text-green-600 font-medium">{products[selected].price}</p>
        <p className="text-xs text-gray-500">{products[selected].date}</p>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-2">
        {products.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setSelected(i)}
            className={`rounded-xl overflow-hidden border-2 transition duration-200 ${
              selected === i
                ? "border-green-500 shadow-sm"
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
  );
}
