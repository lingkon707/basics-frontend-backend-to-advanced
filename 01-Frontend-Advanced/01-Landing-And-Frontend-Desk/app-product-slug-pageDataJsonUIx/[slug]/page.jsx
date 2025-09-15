"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import topicsData from "./topics.json"

export default function TopicPage() {
  const { slug } = useParams()

  const topic = topicsData.find(t => t.slug === slug)

  if (!topic) {
    return (
      <main className="w-full min-h-screen bg-black flex items-center justify-center text-red-500 font-mono">
        <h1 className="text-4xl font-bold">Topic not found</h1>
      </main>
    )
  }

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  // Render fully different layouts per type
  const renderContent = () => {
    switch (topic.layout) {
      case "card":
        return (
          <div className="bg-black/70 border border-blue-500 p-8 rounded-xl shadow-lg text-blue-400 max-w-2xl w-full">
            <h2 className="text-3xl font-bold mb-4">{topic.title}</h2>
            <p className="text-lg">{topic.description}</p>
            <button className="mt-6 px-6 py-2 bg-blue-500 text-black font-bold rounded-lg hover:bg-blue-400 transition">
              Learn More
            </button>
          </div>
        )

      case "terminal":
        return (
          <div className="bg-black/95 border border-red-500 p-6 rounded-lg shadow-lg text-red-400 font-mono max-w-2xl w-full">
            <h2 className="text-3xl font-bold mb-4"> {topic.title}</h2>
            <p className="text-lg mb-4">{topic.description}</p>
            <div className="bg-black/80 p-4 rounded text-red-300 font-mono">
              $ execute tutorial.sh
            </div>
          </div>
        )

      case "futuristic":
        return (
          <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 p-10 rounded-3xl shadow-2xl text-white max-w-3xl w-full text-center">
            <h2 className="text-4xl font-bold mb-4">{topic.title}</h2>
            <p className="text-xl mb-6">{topic.description}</p>
            <div className="flex justify-center gap-4">
              <div className="bg-white/20 px-4 py-2 rounded hover:bg-white/40 transition cursor-pointer">
                Explore
              </div>
              <div className="bg-white/20 px-4 py-2 rounded hover:bg-white/40 transition cursor-pointer">
                Resources
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="bg-black/60 border border-green-500 p-8 rounded-xl shadow-lg text-green-400 max-w-2xl w-full">
            <h2 className="text-3xl font-bold mb-4">{topic.title}</h2>
            <p>{topic.description}</p>
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
        {topic.title}
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
