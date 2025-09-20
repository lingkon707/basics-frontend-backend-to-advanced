'use client'

import { useEffect, useState } from 'react'

export default function AddressesPage() {
  const [addresses, setAddresses] = useState([])

  useEffect(() => {
    fetch('/json/addresses.json')
      .then((res) => res.json())
      .then((data) => setAddresses(data['user-1'] || []))
  }, [])

  return (
    <div className="min-h-screen p-6 bg-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Addresses</h1>
      {addresses.length === 0 ? (
        <p>No addresses saved yet.</p>
      ) : (
        <div className="space-y-4">
          {addresses.map((addr) => (
            <div key={addr.id} className="border p-4 rounded shadow-sm">
              <p className="font-medium">{addr.fullName}</p>
              <p>{addr.street}</p>
              <p>{addr.city}, {addr.zip}</p>
              <p>{addr.country}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
