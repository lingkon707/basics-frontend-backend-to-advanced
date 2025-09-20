"use client";

import React from "react";
import { ProductCardProps } from "./types";
import Link from "next/link";

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded shadow overflow-hidden hover:shadow-lg flex flex-col">
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover cursor-pointer" />
      </Link>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-700 mb-2">${product.price}</p>
          <p className="text-gray-600 text-sm">{product.description}</p>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            className="flex-1 bg-yellow-400 text-white p-1 rounded hover:bg-yellow-500"
            onClick={() => onEdit(product)}
          >
            Edit
          </button>
          <button
            className="flex-1 bg-red-500 text-white p-1 rounded hover:bg-red-600"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

