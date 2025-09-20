'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) {
      setUser(JSON.parse(stored))
    } else {
      setUser(null)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    router.push('/sign-in')
  }

  const usernameSlug = user?.name?.trim().toLowerCase().replace(/\s+/g, '-')

  return (
    <header className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">ShopSite</Link>
      <nav className="flex items-center gap-4">
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        {user ? (
          <>
            <Link href={`/account/${usernameSlug}`}>Account</Link>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:underline"
              aria-label="Logout"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  )
}
