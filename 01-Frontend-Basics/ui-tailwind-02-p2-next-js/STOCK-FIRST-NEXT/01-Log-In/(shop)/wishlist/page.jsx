'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function WishlistPage() {
  const [products, setProducts] = useState([])
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    Promise.all([
      fetch('/json/products.json').then((res) => res.json()),
      fetch('/json/wishlist.json').then((res) => res.json())
    ]).then(([productData, wishlistData]) => {
      const userWishlist = wishlistData['user-1'] || []
      const detailed = productData.filter((product) => userWishlist.includes(product.id))
      setWishlist(detailed)
    })
  }, [])

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <Link key={item.id} href={`/products/${item.slug}`}>
              <div className="bg-white p-4 rounded shadow hover:shadow-md transition cursor-pointer">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded mb-3" />
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-700">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
