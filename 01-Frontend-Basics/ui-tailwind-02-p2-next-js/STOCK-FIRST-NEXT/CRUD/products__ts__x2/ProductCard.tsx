"use client";

import React from "react";
import { ProductCardProps } from "./types";
import Link from "next/link";

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col">
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="h-56 w-full object-cover cursor-pointer" />
      </Link>
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-gray-500 text-sm mt-1">{product.description}</p>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onEdit(product)}
            className="flex-1 bg-yellow-400 text-white py-1 rounded-lg hover:bg-yellow-500 transition"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="flex-1 bg-red-500 text-white py-1 rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
