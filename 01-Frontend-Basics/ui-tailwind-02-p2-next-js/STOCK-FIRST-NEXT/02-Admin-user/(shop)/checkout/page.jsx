'use client'

import { useState } from 'react'

export default function CheckoutPage() {
  const [form, setForm] = useState({ name: '', email: '', address: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Checkout submitted:', form)
    alert('Order placed!')
  }

  return (
    <div className="min-h-screen p-6 bg-white max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <button type="submit" className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
          Place Order
        </button>
      </form>
    </div>
  )
}
