'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AdminProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/json/products.json')
      .then((res) => res.json())
      .then(setProducts)
  }, [])

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table className="w-full text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Price</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{product.name}</td>
                <td className="p-3 border-b">${product.price}</td>
                <td className="p-3 border-b">{product.category}</td>
                <td className="p-3 border-b">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
