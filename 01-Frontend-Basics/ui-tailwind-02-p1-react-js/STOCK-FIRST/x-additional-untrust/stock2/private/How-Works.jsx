// app/private/page.jsx
"use client"
import { useState } from "react"

export default function PrivatePage() {
  const [verified, setVerified] = useState(false)
  const [input, setInput] = useState("")
  const password = "2580"

  const handleVerify = () => {
    if (input === password) {
      setVerified(true)
    } else {
      alert("Wrong Password")
    }
  }

  return (
    <main className="relative flex items-center justify-center min-h-screen">


      {!verified && (
        <div className="absolute inset-0 backdrop-blur-xl flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-3 w-80">
            <h2 className="text-xl font-semibold text-center">Verify Access</h2>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Password"
              className="border rounded-lg px-3 py-2 focus:outline-none"
            />
            <button
              onClick={handleVerify}
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      
      {verified && (
          <h1>Unlocked! Add components here.</h1>
      )}


      
    </main>
  )
}
