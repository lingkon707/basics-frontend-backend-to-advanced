"use client"

import { useParams } from "next/navigation"
import studentsData from "../../../students.json"
import { slugify } from "../../../slugify"

export default function SectionPage() {
  const params = useParams()
  const { school, class: classSlug, section } = params

  const schoolName = Object.keys(studentsData).find(
    key => slugify(key) === school
  )

  if (!schoolName) return <div>School not found</div>

  const classData = studentsData[schoolName][Object.keys(studentsData[schoolName]).find(
    key => slugify(key) === classSlug
  )]

  if (!classData || typeof classData !== "object") return <div>Class not found</div>

  const sectionName = Object.keys(classData).find(key => slugify(key) === section)
  if (!sectionName) return <div>Section not found</div>

  const students = classData[sectionName]

  return (
    <div>
      <h1>Students in {sectionName} ({classSlug} / {schoolName})</h1>
      {students.map(s => (
        <div key={s.roll}>
          {s.name} (Roll: {s.roll})
        </div>
      ))}
    </div>
  )
}
