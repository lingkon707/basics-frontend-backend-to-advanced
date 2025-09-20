"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "../types";

export default function ProductDetails() {
  const pathname = usePathname();
  const router = useRouter();
  const id = pathname.split("/").pop();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    const stored = localStorage.getItem("products");
    if (stored) {
      const products: Product[] = JSON.parse(stored);
      const found = products.find(p => p.id === id);
      setProduct(found || null);
    }
  }, [id]);

  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="bg-white rounded shadow max-w-2xl w-full overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-800 mb-4">{product.description}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
