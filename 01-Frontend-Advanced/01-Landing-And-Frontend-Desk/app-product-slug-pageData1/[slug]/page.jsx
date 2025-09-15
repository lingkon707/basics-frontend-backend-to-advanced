"use client"

import { useParams } from "next/navigation"
import Link from "next/link"

export default function TopicPage() {
  const { slug } = useParams()

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

  // Define different UI per topic
  const renderContent = () => {
    switch (slug) {
      case "artificial-intelligence":
        return (
          <div className="bg-black/70 border border-blue-500 p-8 rounded-xl shadow-lg text-blue-400">
            <h2 className="text-3xl font-bold mb-4">AI Insights</h2>
            <p>Explore the future of Artificial Intelligence, Machine Learning, and automation.</p>
          </div>
        )
      case "cyber-security":
        return (
          <div className="bg-black/70 border border-red-500 p-8 rounded-xl shadow-lg text-red-400">
            <h2 className="text-3xl font-bold mb-4">Cyber Security Hub</h2>
            <p>Learn about hacking, defense strategies, and keeping data safe online.</p>
          </div>
        )
      case "quantum-computing":
        return (
          <div className="bg-black/70 border border-purple-500 p-8 rounded-xl shadow-lg text-purple-400">
            <h2 className="text-3xl font-bold mb-4">Quantum Realm</h2>
            <p>Dive into qubits, superposition, and the next era of computation.</p>
          </div>
        )
      default:
        return (
          <div className="bg-black/70 border border-green-500 p-8 rounded-xl shadow-lg text-green-400">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p>General topic page content goes here.</p>
          </div>
        )
    }
  }

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

      {/* Topic-specific content */}
      {renderContent()}

    </main>
  )
}
