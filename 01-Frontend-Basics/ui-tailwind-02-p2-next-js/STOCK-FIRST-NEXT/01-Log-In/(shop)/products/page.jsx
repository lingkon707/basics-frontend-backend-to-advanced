'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ProductListPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Static import from /public/json/products.json
    fetch('/json/products.json')
      .then((res) => res.json())
      .then(setProducts)
  }, [])

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
