'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem('users')) || []

    // Admin login with fixed password
    if (email === 'hello@gmail.com') {
      if (password !== '2580') {
        setError('Invalid password for admin')
        return
      }

      const adminUser = {
        name: 'Admin',
        email,
        role: 'admin',
      }

      localStorage.setItem('user', JSON.stringify(adminUser))
     router.push('/admin/users')
      return
    }

    // Regular user login
    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    )

    if (!matchedUser) {
      setError('Invalid email or password')
      return
    }

    const loggedInUser = {
      ...matchedUser,
      role: 'user',
    }

    localStorage.setItem('user', JSON.stringify(loggedInUser))

    const username = matchedUser.name?.toLowerCase().replace(/\s+/g, '')
    router.push(`/account/${username}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 shadow-md rounded-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <Link href="/sign-up" className="text-black font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
