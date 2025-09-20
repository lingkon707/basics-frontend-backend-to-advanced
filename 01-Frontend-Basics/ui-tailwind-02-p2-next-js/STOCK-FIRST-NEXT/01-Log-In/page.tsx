'use client'

import { useEffect, useState } from 'react'
import ProductCard from './components/product/ProductCard'
import { Product } from './types/product'


// interface Product {
//   id: string
//   name: string
//   slug: string
//   price: number
//   stock: number
//   category: string
//   image: string
// }

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/json/products.json')
      .then((res) => res.json())
      .then(setProducts)
  }, [])

  return (
    <div className="p-6">
      <section className="text-center py-10 bg-gray-100 rounded mb-10">
        <h1 className="text-4xl font-bold mb-2">Welcome to ShopSite</h1>
        <p className="text-gray-600">Your favorite eCommerce store</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
