"use client";

import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductCard";
import { Product } from "./types";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false); // toggle form visibility

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleSave = (product: Product) => {
    const exists = products.find(p => p.id === product.id);
    if (exists) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      setProducts([...products, product]);
    }
    setShowForm(false); // hide form after adding
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close" : "Add Product"}
        </button>
      </div>

      {/* Conditionally show form */}
      {showForm && <ProductForm handleSave={handleSave} />}

      {/* Product Grid */}
      {/* <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.map((product, index) => (
    <ProductCard 
      key={product.id || index} // use id if exists, fallback to index
      product={product} 
    />
  ))}
</div>




    </div>
  );
}
