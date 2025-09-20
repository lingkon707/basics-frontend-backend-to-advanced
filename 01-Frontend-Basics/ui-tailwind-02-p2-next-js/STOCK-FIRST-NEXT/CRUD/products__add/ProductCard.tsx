"use client";

import React from "react";
import { Product } from "./types";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover cursor-pointer" />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-700">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
