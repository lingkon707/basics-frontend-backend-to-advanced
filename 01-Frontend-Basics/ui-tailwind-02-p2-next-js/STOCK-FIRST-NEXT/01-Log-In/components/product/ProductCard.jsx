'use client'

import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-3" />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-700">${product.price}</p>
      </div>
    </Link>
  )
}
