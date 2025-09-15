"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import studentsData from "../students.json"
import { slugify } from "../slugify"

export default function ClassPage() {
  const { class: classSlug } = useParams()

  const classKey = Object.keys(studentsData).find(k => slugify(k) === classSlug)
  if (!classKey) return <div className="p-12 text-red-500">Class not found</div>

  const sections = studentsData[classKey]
  const sectionKeys = Object.keys(sections)

  return (
    <main className="w-full min-h-screen bg-black text-green-400 font-mono px-4 py-12 flex flex-col items-center">
      <Link href="/student" className="mb-8 text-green-300 hover:text-green-100 transition">
        ← Back to Classes
      </Link>

      <h1 className="text-5xl font-bold mb-12">{classKey}</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {sectionKeys.map(sectionKey => {
          const sectionData = sections[sectionKey]
          const isNested = typeof sectionData === "object" && !Array.isArray(sectionData)

          return (
            <Link
              key={sectionKey}
              href={
                isNested
                  ? `/student/${slugify(classKey)}/${slugify(sectionKey)}`
                  : `/student/${slugify(classKey)}/${slugify(sectionKey)}`
              }
              className="px-8 py-4 bg-green-500 rounded-lg font-bold text-black hover:bg-green-400 transition"
            >
              {sectionKey}
            </Link>
          )
        })}
      </div>
    </main>
  )
}
