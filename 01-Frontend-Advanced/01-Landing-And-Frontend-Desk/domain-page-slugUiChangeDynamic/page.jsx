"use client"

import Link from "next/link"
import topicsData from "./topics.json"
import { slugify } from "../utils/slugify"
import { usePathname } from "next/navigation"

export default function PrivatePage() {
  const pathname = usePathname() // current path, e.g., "/private"
  const basePath = pathname // use current path as base dynamically

  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center justify-start px-4 py-12 text-green-400 font-mono">
      <h1 className="text-5xl md:text-6xl font-bold mb-12 animate-pulse text-center">
        Topics
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {topicsData.map((topic) => {
          const topicSlug = slugify(topic.title) // dynamic slug

          return (
            <Link
              key={topic.title}
              href={`${basePath}/${topicSlug}`} // dynamic base + slug
              className="group relative overflow-hidden rounded-2xl border border-green-500/40 bg-black/60 p-6 text-center shadow-md hover:shadow-green-400/40 transition duration-300 ease-in-out"
            >
              <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 blur-2xl transition duration-500"></div>
              <h2 className="text-2xl font-semibold tracking-wider group-hover:scale-110 transition-transform duration-300">
                {topic.title}
              </h2>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
