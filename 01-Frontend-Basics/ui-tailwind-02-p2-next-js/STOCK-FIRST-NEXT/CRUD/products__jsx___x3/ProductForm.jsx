"use client";

import { useState } from "react";

export default function ProductForm({ product, handleSave, onClose }) {
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || "");
  const [category, setCategory] = useState(product?.category || "");
  const [description, setDescription] = useState(product?.description || "");
  const [image, setImage] = useState(product?.image || "");

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !category || !image) {
      alert("Please fill all mandatory fields");
      return;
    }
    const newProduct = {
      id: product?.id || Date.now().toString(),
      name,
      price,
      category,
      description,
      image,
    };
    handleSave(newProduct);
    // Clear form
    setName(""); setPrice(""); setCategory(""); setDescription(""); setImage("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 space-y-4 relative animate-fadeIn"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{product ? "Edit Product" : "Add Product"}</h2>

        {/* Mandatory Fields */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Product Name *"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price *"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <select
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category *</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
          </select>
        </div>

        {/* Optional Fields */}
        <textarea
          placeholder="Description (optional)"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Image Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:scale-105 transition">
          <input type="file" accept="image/*" className="hidden" id="imageUpload" onChange={handleImageChange} />
          <label htmlFor="imageUpload" className="cursor-pointer text-gray-400">
            {image ? "Change Image" : "Click or Drag & Drop to Upload Image *"}
          </label>
          {image && <img src={image} alt="Preview" className="mt-4 rounded-lg h-40 object-cover w-full" />}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {product ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
