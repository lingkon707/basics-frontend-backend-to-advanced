// app/private/page.jsx
"use client"
import { useState } from "react"

export default function PrivatePage() {
  const [verified, setVerified] = useState(false)
  const [input, setInput] = useState("")
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const password = "2580"

  const aggressiveMessages = [
    "INTRUDER ALERT! YOU SHOULD NOT BE HERE!",
    "WARNING! SYSTEM DETECTS UNAUTHORIZED PRESENCE!",
    "ALERT! YOUR ACTIONS ARE BEING MONITORED!",
    "DANGER! SECURITY PROTOCOLS ENGAGED!",
    "ACCESS DENIED! LEAVE IMMEDIATELY!",
    "ALERT! COUNTERMEASURES ACTIVATED!",
    "INTRUDER LOGGED! THIS IS YOUR FINAL WARNING!",
    "SECURITY BREACH! SYSTEM TRACE INITIATED!",
    "WARNING! FATAL CONSEQUENCES POSSIBLE!"
  ]

  const handleVerify = () => {
    if (input === password) {
      setVerified(true)
      setError(false)
      setErrorMessage("")
    } else {
      setError(true)
      startAggressiveMode()
    }
  }

  const startAggressiveMode = () => {
    let i = 0
    setErrorMessage(aggressiveMessages[i])
    const interval = setInterval(() => {
      i++
      if (i >= aggressiveMessages.length) i = 0
      setErrorMessage(aggressiveMessages[i])
    }, 1200)
    setTimeout(() => {
      clearInterval(interval)
      setError(false)
      setErrorMessage("")
    }, 15000)
  }

  return (
    <main className={`relative flex items-center justify-center min-h-screen transition-colors duration-500 ${verified ? "bg-black" : error ? "bg-red-950" : "bg-gray-950"}`}>
      {!verified && (
        <div className="absolute inset-0 backdrop-blur-2xl flex items-center justify-center z-10 px-4">
          <div className={`bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-xl w-full max-w-xs h-[340px] flex flex-col justify-between`}>
            <h2 className={`text-center font-mono text-lg sm:text-xl tracking-widest text-green-400`}>
              {error ? "ACCESS DENIED" : "ENTER ACCESS KEY"}
            </h2>

            <div className="flex-1 mt-2 overflow-y-auto">
              {error && (
                <p className="text-red-400 text-center font-mono text-sm sm:text-base break-words whitespace-pre-line">
                  {errorMessage}
                </p>
              )}
            </div>

            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="●●●●"
              className="border border-gray-700 bg-black text-green-400 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-mono text-sm sm:text-base text-center tracking-widest w-full"
            />
            <button
              onClick={handleVerify}
              className={`mt-2 py-2 rounded-lg font-bold uppercase tracking-widest transition-all duration-300 w-full ${error ? "bg-red-700 hover:bg-red-800 text-white" : "bg-green-600 hover:bg-green-700 text-black"}`}
            >
              {error ? "Retry" : "Unlock"}
            </button>
          </div>
        </div>
      )}
      {verified && (
        <div className="w-full h-full flex flex-col items-center justify-center text-green-400 font-mono px-4 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-pulse">ACCESS GRANTED</h1>
          <p className="text-base sm:text-2xl">Welcome, Master. All systems unlocked.</p>
        </div>
      )}
    </main>
  )
}
