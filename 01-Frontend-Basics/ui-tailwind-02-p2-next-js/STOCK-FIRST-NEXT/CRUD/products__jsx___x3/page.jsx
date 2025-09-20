"use client";

import { useState } from "react";
import ProductForm from "./ProductForm";

export default function ProductsPage() {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);

  // This function will be passed to ProductForm
  const handleSave = (product) => {
    setProducts([...products, product]);
    setShowForm(false); // close modal after save
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <button
        className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={() => setShowForm(true)}
      >
        Add Product
      </button>

      {showForm && (
        <ProductForm
          handleSave={handleSave}   // ✅ Pass the function here
          onClose={() => setShowForm(false)}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-xl shadow p-4">
            <img src={p.image} alt={p.name} className="h-40 w-full object-cover rounded" />
            <h3 className="mt-2 font-semibold text-gray-900">{p.name}</h3>
            <p className="text-gray-700">${p.price}</p>
            <p className="text-gray-500 text-sm">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
