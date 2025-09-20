"use client"

import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Add or Update Product
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return alert("Enter name and price");

    const newProduct = { name, price };

    if (editingIndex !== null) {
      // Update existing product
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = newProduct;
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      // Add new product
      setProducts([...products, newProduct]);
    }

    // Clear form
    setName("");
    setPrice("");
  };

  // Delete Product
  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  // Edit Product
  const handleEdit = (index) => {
    setName(products[index].name);
    setPrice(products[index].price);
    setEditingIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Product CRUD App</h1>

      {/* Add / Update Form */}
      <ProductForm
        name={name}
        price={price}
        setName={setName}
        setPrice={setPrice}
        handleSubmit={handleSubmit}
        editingIndex={editingIndex}
      />

      {/* Product Showcase */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            index={index}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
