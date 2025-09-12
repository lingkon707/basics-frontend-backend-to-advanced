// app/private/page.jsx
"use client"
import { useState } from "react"

export default function PrivatePage() {
  const [verified, setVerified] = useState(false)
  const [input, setInput] = useState("")
  const [error, setError] = useState(false)
  const password = "2580"

  const handleVerify = () => {
    if (input === password) {
      setVerified(true)
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 1500)
    }
  }

  return (
    <main className={`relative flex items-center justify-center min-h-screen transition-colors duration-500 ${verified ? "bg-black" : error ? "bg-red-950" : "bg-gray-950"}`}>
      {!verified && (
        <div className="absolute inset-0 backdrop-blur-2xl flex items-center justify-center z-10">
          <div className={`p-8 rounded-2xl shadow-2xl flex flex-col gap-4 w-96 transition-all duration-500 ${error ? "bg-red-900 border-4 border-red-600 animate-pulse" : "bg-gray-900 border border-gray-700"}`}>
            <h2 className={`text-2xl font-mono text-center ${error ? "text-red-400" : "text-green-400"}`}>
              {error ? "ACCESS DENIED" : "Enter Access Key"}
            </h2>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="●●●●"
              className="border border-gray-700 bg-black text-green-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-mono text-lg text-center tracking-widest"
            />
            <button
              onClick={handleVerify}
              className={`py-3 rounded-lg font-bold uppercase tracking-widest transition-all duration-300 ${error ? "bg-red-700 hover:bg-red-800 text-white" : "bg-green-600 hover:bg-green-700 text-black"}`}
            >
              {error ? "Retry" : "Unlock"}
            </button>
            {error && (
              <p className="text-red-400 text-center font-mono text-sm animate-pulse">
                Intruder Alert! System Breach Attempt Logged.
              </p>
            )}
          </div>
        </div>
      )}
      {verified && (
        <div className="w-full h-full flex flex-col items-center justify-center text-green-400 font-mono">
          <h1 className="text-5xl font-bold mb-4 animate-pulse">ACCESS GRANTED</h1>
          <p className="text-xl">Welcome, Master. All systems unlocked.</p>
        </div>
      )}
    </main>
  )
}
