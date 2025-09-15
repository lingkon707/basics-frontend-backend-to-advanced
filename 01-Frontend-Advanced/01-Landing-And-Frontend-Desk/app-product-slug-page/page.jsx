"use client"

import Link from "next/link"
import { slugify } from "../utils/slugify"   // ✅ this matches your file path

const topics = [
  "Artificial Intelligence",
  "Cyber Security",
  "Quantum Computing",
  "Blockchain",
  "Space Tech",
  "Web Development",
]

export default function VerifiedYes() {
  return (
    <main>
      <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center text-green-400 font-mono px-4">
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse drop-shadow-lg">
          ACCESS GRANTED
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-green-300">
          Welcome, Master. All systems unlocked.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {topics.map((topic) => {
            const slug = slugify(topic) // ✅ works now
            return (
              <Link
                key={topic}
                href={`/private/${slug}`}
                className="group relative overflow-hidden rounded-2xl border border-green-500/40 bg-black/60 p-6 text-center shadow-md hover:shadow-green-400/40 transition duration-300 ease-in-out"
              >
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 blur-2xl transition duration-500"></div>
                <h2 className="text-2xl font-semibold tracking-wider group-hover:scale-110 transition-transform duration-300">
                  {topic}
                </h2>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
