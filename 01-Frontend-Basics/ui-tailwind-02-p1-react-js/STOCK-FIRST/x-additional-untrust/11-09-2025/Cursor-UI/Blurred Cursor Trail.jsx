"use client"
import { useEffect, useRef } from 'react'

export default function Home() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    let trail = []
    const maxTrail = 50

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < trail.length; i++) {
        const p = trail[i]
        const alpha = i / trail.length
        ctx.beginPath()
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.2})`
        ctx.shadowColor = `rgba(255, 255, 255, ${alpha * 0.4})`
        ctx.shadowBlur = 20
        ctx.arc(p.x, p.y, 20, 0, Math.PI * 2)
        ctx.fill()
      }

      requestAnimationFrame(draw)
    }

    const handleMouseMove = (e) => {
      trail.push({ x: e.clientX, y: e.clientY })
      if (trail.length > maxTrail) trail.shift()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', resize)
    draw()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden cursor-none">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]">
          Blurred Cursor Trail
        </h1>
      </div>
    </div>
  )
}
