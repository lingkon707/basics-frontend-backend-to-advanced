'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({ products: 0, orders: 0 })
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (!user || user.email !== 'admin@example.com') {
      router.push('/') // Not admin, redirect to home
      return
    }

    // Load dashboard stats
    Promise.all([
      fetch('/json/products.json').then(res => res.json()),
      fetch('/json/orders.json').then(res => res.json())
    ])
      .then(([products, orders]) => {
        setStats({
          products: products.length,
          orders: orders.length,
        })
        setLoading(false)
      })
      .catch(() => {
        setStats({ products: 0, orders: 0 })
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading admin dashboard...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 rounded shadow">
          <p className="text-sm text-gray-600">Total Products</p>
          <p className="text-2xl font-bold">{stats.products}</p>
        </div>
        <div className="p-6 bg-gray-100 rounded shadow">
          <p className="text-sm text-gray-600">Total Orders</p>
          <p className="text-2xl font-bold">{stats.orders}</p>
        </div>
      </div>
    </div>
  )
}
