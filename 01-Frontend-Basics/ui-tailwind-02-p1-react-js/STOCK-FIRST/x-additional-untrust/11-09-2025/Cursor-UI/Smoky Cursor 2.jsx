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
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-red-500 via-yellow-500 to-blue-500 rounded-full blur-[120px] opacity-70 mix-blend-screen animate-pulse transition-transform duration-500"
      ></div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight tracking-tight drop-shadow-[0_0_40px_rgba(255,255,255,0.9)]">
          Massive RGB<br className="hidden sm:block" />Smoky Cursor Effect
        </h1>
      </div>
    </div>
  )
}




