"use client"

import Link from "next/link"
import { slugify } from "./slugify"
import studentsData from "./students.json"

export default function InstituePage() {
  const schools = Object.keys(studentsData)

  return (
    <div>
      <h1>Schools</h1>
      {schools.map(school => (
        <div key={school}>
          <Link href={`/institue/${slugify(school)}`}>{school}</Link>
        </div>
      ))}
    </div>
  )
}
