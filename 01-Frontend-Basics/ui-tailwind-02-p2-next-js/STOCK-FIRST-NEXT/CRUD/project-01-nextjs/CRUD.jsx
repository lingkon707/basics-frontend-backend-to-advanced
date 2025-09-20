"use client"
import { useState } from "react";

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
      // Update
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = newProduct;
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      // Add
      setProducts([...products, newProduct]);
    }

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
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded shadow mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editingIndex !== null ? "Edit Product" : "Add New Product"}
        </h2>
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-2 mb-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 mb-3 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {editingIndex !== null ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product Showcase */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">${product.price}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="flex-1 bg-yellow-400 text-white p-1 rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="flex-1 bg-red-500 text-white p-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
