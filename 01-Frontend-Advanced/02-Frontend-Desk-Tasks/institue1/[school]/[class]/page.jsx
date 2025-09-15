"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import studentsData from "../../students.json"
import { slugify } from "../../slugify"

export default function ClassPage() {
  const params = useParams()
  const schoolSlug = params.school
  const classSlug = params.class

  const schoolName = Object.keys(studentsData).find(
    key => slugify(key) === schoolSlug
  )

  if (!schoolName) return <div>School not found</div>

  const className = Object.keys(studentsData[schoolName]).find(
    key => slugify(key) === classSlug
  )

  if (!className) return <div>Class not found</div>

  const students = studentsData[schoolName][className]

  return (
    <div>
      <h1>Students in {className} ({schoolName})</h1>
      {students.map(student => (
        <div key={student.roll}>
          <Link href={`/institue/${schoolSlug}/${classSlug}/${slugify(student.name)}`}>
            {student.name} (Roll: {student.roll})
          </Link>
        </div>
      ))}
    </div>
  )
}
