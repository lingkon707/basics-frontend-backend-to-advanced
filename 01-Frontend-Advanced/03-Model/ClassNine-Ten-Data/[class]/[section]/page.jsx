"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import studentsData from "../../students.json"
import { slugify } from "../../slugify"


export default function SectionPage() {
  const { class: classSlug, section: sectionSlug } = useParams()
  const [activeTab, setActiveTab] = useState("")

  // Find class key
  const classKey = Object.keys(studentsData).find(k => slugify(k) === classSlug)
  if (!classKey) return <div className="p-12 text-red-500">Class not found</div>

  // Find section key
  const sectionKey = Object.keys(studentsData[classKey]).find(k => slugify(k) === sectionSlug)
  if (!sectionKey) return <div className="p-12 text-red-500">Section not found</div>

  const sectionData = studentsData[classKey][sectionKey]
  const isNested = typeof sectionData === "object" && !Array.isArray(sectionData)
  const tabs = isNested ? Object.keys(sectionData) : []

  // Set first tab active by default
  if (isNested && !activeTab && tabs.length > 0) setActiveTab(tabs[0])

  return (
    <main className="w-full min-h-screen bg-black text-green-400 font-mono px-4 py-12 flex flex-col items-center">
      <Link href={`/student/${classSlug}`} className="mb-8 text-green-300 hover:text-green-100 transition">
        ← Back to {classKey}
      </Link>

      <h1 className="text-5xl font-bold mb-12">{sectionKey}</h1>

      {/* Tabs */}
      {isNested && (
        <div className="flex gap-4 mb-8">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-bold rounded-t-lg ${
                activeTab === tab
                  ? "bg-green-500 text-black"
                  : "bg-black/50 text-green-300 hover:bg-green-400/30 transition"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Tab Content */}
      {isNested && activeTab && (
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionData[activeTab].map(student => (
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

      {/* If sectionData is already array (class8 boys/girls) */}
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


