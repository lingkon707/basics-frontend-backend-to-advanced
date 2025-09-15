"use client"

import { useParams } from "next/navigation"
import Link from "next/link"

export default function TopicPage() {
  const params = useParams()
  const { slug } = params

  // Convert slug back to readable title
  const title = slug
    .split("-")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ")

  // Current date
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center justify-start text-green-400 font-mono px-4 py-12">
      
      {/* Back button */}
      <Link
        href="/private"
        className="mb-8 text-green-300 hover:text-green-100 transition-colors"
      >
        ← Back to Topics
      </Link>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-pulse drop-shadow-lg text-center">
        {title}
      </h1>

      {/* Date */}
      <p className="text-xl md:text-2xl text-green-300 mb-12 text-center">
        {currentDate}
      </p>

      {/* Content box */}
      <div className="w-full max-w-3xl bg-black/60 border border-green-500/40 rounded-2xl p-8 shadow-md hover:shadow-green-400/40 transition duration-300">
        <p className="text-green-200 text-lg md:text-xl">
          Welcome to the <span className="font-semibold">{title}</span> page.  
          Here you can add articles, notes, or any content related to this topic.  
          The date above shows the current day dynamically.
        </p>
      </div>
    </main>
  )
}
