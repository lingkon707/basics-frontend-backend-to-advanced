"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import studentsData from "../../students.json"
import { slugify } from "../../slugify"

export default function SectionPage() {
  const { class: classSlug, section: sectionSlug } = useParams()
  const [selectedSub, setSelectedSub] = useState(null)

  const classKey = Object.keys(studentsData).find(k => slugify(k) === classSlug)
  if (!classKey) return <div className="p-12 text-red-500">Class not found</div>

  const sectionKey = Object.keys(studentsData[classKey]).find(k => slugify(k) === sectionSlug)
  if (!sectionKey) return <div className="p-12 text-red-500">Section not found</div>

  const sectionData = studentsData[classKey][sectionKey]
  const isNested = typeof sectionData === "object" && !Array.isArray(sectionData)

  return (
    <main className="w-full min-h-screen bg-black text-green-400 font-mono px-4 py-12 flex flex-col items-center">
      <Link href={`/student/${classSlug}`} className="mb-8 text-green-300 hover:text-green-100 transition">
        ← Back to {classKey}
      </Link>

      <h1 className="text-5xl font-bold mb-12">{sectionKey}</h1>

      {isNested && !selectedSub ? (
        <div className="flex flex-wrap justify-center gap-6">
          {Object.keys(sectionData).map(subKey => (
            <button
              key={subKey}
              onClick={() => setSelectedSub(subKey)}
              className="px-8 py-4 bg-green-500 rounded-lg font-bold text-black hover:bg-green-400 transition"
            >
              {subKey}
            </button>
          ))}
        </div>
      ) : null}

      {selectedSub && (
        <div className="w-full max-w-5xl space-y-8 mt-8">
          <h2 className="text-3xl font-semibold mb-4">{selectedSub}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionData[selectedSub].map(student => (
              <div
                key={student.roll}
                className="bg-black/60 border border-green-500 p-6 rounded-xl shadow-md text-center"
              >
                <h3 className="text-xl font-semibold">{student.name}</h3>
                {student.roll && <p>Roll: {student.roll}</p>}
              </div>
            ))}
          </div>

          <button
            onClick={() => setSelectedSub(null)}
            className="mt-6 px-8 py-3 bg-red-500 text-black rounded-lg font-bold hover:bg-red-400 transition"
          >
            ← Back
          </button>
        </div>
      )}

      {!isNested && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionData.map(student => (
            <div
              key={student.roll}
              className="bg-black/60 border border-green-500 p-6 rounded-xl shadow-md text-center"
            >
              <h3 className="text-xl font-semibold">{student.name}</h3>
              {student.roll && <p>Roll: {student.roll}</p>}
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
