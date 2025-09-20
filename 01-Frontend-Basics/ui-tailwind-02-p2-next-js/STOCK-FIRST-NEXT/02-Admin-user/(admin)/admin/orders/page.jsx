'use client'

import { useEffect, useState } from 'react'

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('/json/orders.json')
      .then((res) => res.json())
      .then(setOrders)
  }, [])

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Order ID</th>
              <th className="p-3 border-b">Date</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId} className="hover:bg-gray-50">
                <td className="p-3 border-b">{order.orderId}</td>
                <td className="p-3 border-b">{order.date}</td>
                <td className="p-3 border-b">{order.status}</td>
                <td className="p-3 border-b">${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
