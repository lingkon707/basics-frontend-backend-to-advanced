"use client"

import Link from "next/link"
import studentsData from "./students.json"
import { slugify } from "./slugify"



export default function StudentPage() {
  const classes = Object.keys(studentsData)

  return (
    <main className="w-full min-h-screen bg-black text-green-400 font-mono px-4 py-12 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 animate-pulse">Students</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {classes.map(cls => (
          <Link
            key={cls}
            href={`/student/${slugify(cls)}`}
            className="px-8 py-4 bg-green-500 rounded-lg font-bold text-black hover:bg-green-400 transition"
          >
            {cls}
          </Link>
        ))}
      </div>
    </main>
  )
}
