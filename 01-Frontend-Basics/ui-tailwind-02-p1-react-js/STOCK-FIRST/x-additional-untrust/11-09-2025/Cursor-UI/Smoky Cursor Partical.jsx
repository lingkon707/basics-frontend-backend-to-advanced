"use client"
import { useEffect, useRef } from 'react'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createParticle = (x, y) => {
      const count = 5
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div')
        const size = Math.random() * 8 + 4
        const offsetX = (Math.random() - 0.5) * 40
        const offsetY = (Math.random() - 0.5) * 40
        const opacity = Math.random() * 0.3 + 0.2
        const blur = Math.floor(Math.random() * 2 + 1) * 2
        const hue = 200 + Math.random() * 50 // cool smoky tones

        particle.className =
          `absolute rounded-full pointer-events-none transition duration-[1200ms] ease-out ` +
          `blur-${blur}`

        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.left = `${x + offsetX}px`
        particle.style.top = `${y + offsetY}px`
        particle.style.backgroundColor = `hsla(${hue}, 30%, 90%, ${opacity})`
        particle.style.transform = `translate(-50%, -50%) scale(1)`

        container.appendChild(particle)

        setTimeout(() => {
          particle.style.opacity = '0'
          particle.style.transform = 'translate(-50%, -50%) scale(2)'
        }, 10)

        setTimeout(() => {
          container.removeChild(particle)
        }, 1200)
      }
    }

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden cursor-none"
    >
      <div className="flex items-center justify-center min-h-screen p-6">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight tracking-tight drop-shadow-[0_0_40px_rgba(255,255,255,0.9)]">
          Smoke Trail Cursor <br className="hidden sm:block" /> with Particles
        </h1>
      </div>
    </div>
  )
}
