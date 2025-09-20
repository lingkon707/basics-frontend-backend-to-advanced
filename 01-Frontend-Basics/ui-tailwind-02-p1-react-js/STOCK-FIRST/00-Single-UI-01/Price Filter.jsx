import React, { useState } from "react";

export default function ProductFilter() {
  const products = [
    { id: 1, name: "Phone", price: 499 },
    { id: 2, name: "Laptop", price: 1099 },
    { id: 3, name: "Tablet", price: 299 },
    { id: 4, name: "Monitor", price: 199 },
    { id: 5, name: "Smartwatch", price: 149 },
    { id: 6, name: "Headphones", price: 89 },
    { id: 7, name: "Keyboard", price: 79 },
    { id: 8, name: "Mouse", price: 59 },
    { id: 9, name: "Charger", price: 29 },
    { id: 10, name: "Camera", price: 899 },
  ];

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = products.filter((product) => {
    const price = product.price;
    const min = minPrice !== "" ? parseFloat(minPrice) : 0;
    const max = maxPrice !== "" ? parseFloat(maxPrice) : Infinity;
    return price >= min && price <= max;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8">
          🔍 Price Filter
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Minimum Price
            </label>
            <input
              type="number"
              placeholder="e.g. 100"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Maximum Price
            </label>
            <input
              type="number"
              placeholder="e.g. 800"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center p-5 rounded-lg bg-purple-50 hover:bg-purple-100 transition shadow"
              >
                <span className="font-semibold text-lg text-gray-800">
                  {product.name}
                </span>
                <span className="text-purple-700 font-bold">${product.price}</span>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 italic">
              No products found in this price range.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
