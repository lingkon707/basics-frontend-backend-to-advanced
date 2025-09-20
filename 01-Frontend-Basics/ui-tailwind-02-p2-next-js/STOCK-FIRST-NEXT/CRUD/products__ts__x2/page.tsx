"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductCard";
import { Product } from "./types";

export default function LandingPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

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
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header onAdd={() => { setShowForm(!showForm); setEditingProduct(null); }} />
      {showForm && <ProductForm product={editingProduct || undefined} handleSave={handleSave} />}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.id || index}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </section>
      <footer className="bg-gray-900 text-white py-6 text-center">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </footer>
    </div>
  );
}
