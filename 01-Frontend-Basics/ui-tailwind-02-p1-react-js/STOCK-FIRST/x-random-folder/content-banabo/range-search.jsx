import React, { useState } from "react";

export default function ProductFilter() {
  const products = [
    { id: 1, name: "Phone", price: 499 },
    { id: 2, name: "Laptop", price: 1099 },
    { id: 3, name: "Tablet", price: 299 },
    { id: 4, name: "Monitor", price: 199 },
    { id: 5, name: "Smartwatch", price: 149 },
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
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Filter by Price</h2>

      <div className="flex gap-4 mb-6">
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded w-full"
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded w-full"
        />
      </div>

      <ul className="space-y-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li
              key={product.id}
              className="p-4 bg-gray-100 rounded shadow text-gray-800"
            >
              {product.name} - ${product.price}
            </li>
          ))
        ) : (
          <p className="text-gray-400">No products in this range.</p>
        )}
      </ul>
    </div>
  );
}
