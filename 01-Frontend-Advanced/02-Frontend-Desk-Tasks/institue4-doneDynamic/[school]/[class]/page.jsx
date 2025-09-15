"use client"

import { useParams, usePathname } from "next/navigation"
import Link from "next/link"
import studentsData from "../../students.json"
import { slugify } from "../../slugify"



export default function ClassPage() {
  const params = useParams()
  const pathname = usePathname() // e.g., /institue/sunrise-academy/class9
  const { school, class: classSlug } = params

  const schoolName = Object.keys(studentsData).find(key => slugify(key) === school)
  if (!schoolName) return <div>School not found</div>

  const classData = studentsData[schoolName][Object.keys(studentsData[schoolName]).find(
    key => slugify(key) === classSlug
  )]

  if (!classData) return <div>Class not found</div>

  // If class has sections (object), show sections
  if (typeof classData[0] === "undefined" && !Array.isArray(classData)) {
    const sections = Object.keys(classData)
    return (
      <div>
        <h1>3.2:::{schoolName} || {classSlug}</h1>
        {sections.map(section => (
          <div key={section}>
            <Link href={`${pathname}/${slugify(section)}`}>{section}</Link>
          </div>
        ))}
      </div>
    )
  }

  // Direct student array
  return (
    <div>
      <h1>3.1:{schoolName} || {classSlug}</h1>
      {classData.map(student => (
        <div key={student.roll}>
          {student.name} (Roll: {student.roll})
        </div>
      ))}
    </div>
  )
}
