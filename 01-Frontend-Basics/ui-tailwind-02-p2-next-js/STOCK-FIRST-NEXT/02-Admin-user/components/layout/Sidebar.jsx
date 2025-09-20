'use client'

import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 space-y-4">
      <h2 className="text-lg font-semibold">Admin Menu</h2>
      <ul className="space-y-2 text-sm">
        <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
        <li><Link href="/products" className="hover:underline">Products</Link></li>
        <li><Link href="/orders" className="hover:underline">Orders</Link></li>
      </ul>
    </aside>
  )
}
