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
        className="pointer-events-none fixed top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 opacity-40 blur-3xl rounded-full animate-pulse transition-transform duration-300 ease-out"
      ></div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight">
          Smoky Cursor with Animated Effect
        </h1>
      </div>
    </div>
  )
}


