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

    // Clear form
    setName(""); setPrice(""); setDescription(""); setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow mb-8">
      <h2 className="text-xl font-semibold mb-4">{product ? "Edit Product" : "Add New Product"}</h2>
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
      <textarea
        placeholder="Description"
        className="w-full border p-2 mb-3 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="file" accept="image/*" className="w-full mb-3" onChange={handleImageChange} />
      {image && <img src={image} alt="Preview" className="mb-3 h-40 object-cover rounded" />}
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        {product ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
