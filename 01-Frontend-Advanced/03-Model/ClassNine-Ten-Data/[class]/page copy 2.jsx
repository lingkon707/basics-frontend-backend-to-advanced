"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import studentsData from "../students.json"
import { slugify } from "../slugify"

export default function ClassPage() {
  const { class: classSlug } = useParams()
  const [activeTab, setActiveTab] = useState("")

  // Find class key dynamically
  const classKey = Object.keys(studentsData).find(k => slugify(k) === classSlug)
  if (!classKey) return <div className="p-12 text-red-500">Class not found</div>

  const sections = studentsData[classKey]
  const sectionKeys = Object.keys(sections)

  // Set first tab active by default
  if (!activeTab && sectionKeys.length > 0) setActiveTab(sectionKeys[0])

  const activeSection = sections[activeTab]
  const isNested = typeof activeSection === "object" && !Array.isArray(activeSection)

  return (
    <main className="w-full min-h-screen bg-black text-green-400 font-mono px-4 py-12 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8">{classKey}</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        {sectionKeys.map(sectionKey => (
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
        ))}
      </div>

      {/* Tab Content */}
      {activeSection && (
        <div className="w-full max-w-5xl mt-4 space-y-8">
          {isNested ? (
            Object.keys(activeSection).map(subKey => (
              <div key={subKey}>
                <h2 className="text-3xl font-semibold mb-4">{subKey}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeSection[subKey].map(student => (
                    <div
                      key={student.roll}
                      className="bg-black/60 border border-green-500 p-6 rounded-xl shadow-md text-center"
                    >
                      <h3 className="text-xl font-semibold">{student.name}</h3>
                      {student.roll && <p>Roll: {student.roll}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeSection.map(student => (
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
        </div>
      )}
    </main>
  )
}
