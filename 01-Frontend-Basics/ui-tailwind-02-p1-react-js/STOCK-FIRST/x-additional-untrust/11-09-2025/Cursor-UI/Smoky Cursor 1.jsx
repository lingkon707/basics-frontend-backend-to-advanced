'use client'


import { useEffect, useRef } from 'react'

export default function Home() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-48 h-48 rounded-full bg-[conic-gradient(at_top,_#ff00cc,_#3333ff,_#00ffcc)] opacity-50 blur-2xl animate-spin-slow mix-blend-screen"
      ></div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center tracking-tight drop-shadow-[0_5px_15px_rgba(255,255,255,0.6)]">
          Smoky Cursor <br className="hidden sm:block" /> With Huge Animated Colors
        </h1>
      </div>
    </div>
  )
}


