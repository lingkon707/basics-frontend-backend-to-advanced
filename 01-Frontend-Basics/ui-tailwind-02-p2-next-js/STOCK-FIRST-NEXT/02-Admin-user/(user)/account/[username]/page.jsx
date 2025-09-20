'use client'

import { useEffect, useState } from 'react'

export default function AccountPage() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) {
      setUser(JSON.parse(stored))
    }
  }, [])

  if (!user) {
    return <p className="p-6 text-center">Please log in to access your account.</p>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  )
}
