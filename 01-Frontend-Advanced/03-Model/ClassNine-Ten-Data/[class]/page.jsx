"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import studentsData from "../students.json"
import { slugify } from "../slugify"
import Link from "next/link"

export default function ClassPage() {
  const { class: classSlug } = useParams()
  const [activeTab, setActiveTab] = useState("")

  const classKey = Object.keys(studentsData).find(k => slugify(k) === classSlug)
  if (!classKey) return <div className="p-12 text-red-500">Class not found</div>

  const sections = studentsData[classKey]
  const sectionKeys = Object.keys(sections)

  // Set first tab active if section is array
  if (!activeTab) {
    const firstArrayKey = sectionKeys.find(
      key => Array.isArray(sections[key])
    )
    if (firstArrayKey) setActiveTab(firstArrayKey)
  }

  return (
    <main className="w-full min-h-screen bg-black text-green-400 font-mono px-4 py-12 flex flex-col items-center">
      <Link href="/student" className="mb-8 text-green-300 hover:text-green-100 transition">
        ← Back to Classes
      </Link>

      <h1 className="text-5xl font-bold mb-8">{classKey}</h1>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {sectionKeys.map(sectionKey => {
          const sectionData = sections[sectionKey]
          const isArray = Array.isArray(sectionData)

          // Tabs for simple arrays (class8)
          if (isArray) {
            return (
              <button
                key={sectionKey}
                onClick={() => setActiveTab(sectionKey)}
                className={`px-6 py-3 font-bold rounded-t-lg ${
                  activeTab === sectionKey
                    ? "bg-green-500 text-black"
                    : "bg-black/50 text-green-300 hover:bg-green-400/30 transition"
                }`}
              >
                {sectionKey}
              </button>
            )
          }

          // Button for nested objects (class9)
          return (
            <Link
              key={sectionKey}
              href={`/student/${slugify(classKey)}/${slugify(sectionKey)}`}
              className="px-8 py-4 bg-green-500 rounded-lg font-bold text-black hover:bg-green-400 transition"
            >
              {sectionKey}
            </Link>
          )
        })}
      </div>

      {/* Render content if active tab (only for arrays like class8) */}
      {activeTab && Array.isArray(sections[activeTab]) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections[activeTab].map(student => (
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
