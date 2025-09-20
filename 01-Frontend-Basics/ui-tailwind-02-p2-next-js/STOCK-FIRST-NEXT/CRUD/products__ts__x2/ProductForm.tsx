"use client";

import React, { useState } from "react";
import { ProductFormProps, Product } from "./types";

const ProductForm: React.FC<ProductFormProps> = ({ product, handleSave }) => {
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || "");
  const [description, setDescription] = useState(product?.description || "");
  const [image, setImage] = useState(product?.image || "");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !price || !description || !image) return alert("All fields are required");

    const newProduct: Product = {
      id: product?.id || Date.now().toString(),
      name,
      price,
      description,
      image,
    };
    handleSave(newProduct);

    setName(""); setPrice(""); setDescription(""); setImage("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative"
      >
        <h2 className="text-2xl font-bold mb-4">{product ? "Edit Product" : "Add New Product"}</h2>
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" accept="image/*" className="mb-4 w-full" onChange={handleImageChange} />
        {image && <img src={image} alt="Preview" className="mb-4 rounded-lg h-48 object-cover w-full" />}
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {product ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
