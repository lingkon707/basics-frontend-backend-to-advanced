'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function ProductDetailsPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('/json/products.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.slug === slug)
        setProduct(found)
      })
  }, [slug])

  if (!product) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="min-h-screen px-6 py-10 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-800 mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
