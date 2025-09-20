'use client'

import { useEffect, useState } from 'react'

export default function OrdersPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('/json/orders.json')
      .then((res) => res.json())
      .then((data) => {
        const userOrders = data.filter((o) => o.userId === 'user-1')
        setOrders(userOrders)
      })
  }, [])

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.orderId} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Order #{order.orderId}</span>
                <span className="text-sm text-gray-500">{order.date}</span>
              </div>
              <p className="text-sm text-gray-700">Status: {order.status}</p>
              <p className="text-sm text-gray-700">Total: ${order.total}</p>
              <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                {order.items.map((item, idx) => (
                  <li key={idx}>Product ID: {item.productId} (x{item.quantity})</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
