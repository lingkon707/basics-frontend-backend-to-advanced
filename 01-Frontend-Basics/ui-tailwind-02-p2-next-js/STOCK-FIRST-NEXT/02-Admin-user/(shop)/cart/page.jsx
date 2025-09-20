'use client'

import { useEffect, useState } from 'react'

export default function CartPage() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    Promise.all([
      fetch('/json/products.json').then((res) => res.json()),
      fetch('/json/cart.json').then((res) => res.json())
    ]).then(([productData, cartData]) => {
      const userCart = cartData['user-1'] || []
      const detailedCart = userCart.map(item => {
        const product = productData.find(p => p.id === item.productId)
        return { ...product, quantity: item.quantity }
      })
      setProducts(productData)
      setCart(detailedCart)
    })
  }, [])

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow-sm">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-700 font-medium">${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="text-right mt-4 font-semibold text-lg">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  )
}
