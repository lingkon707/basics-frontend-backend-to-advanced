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

  const classData = studentsData[schoolName][Object.keys(studentsData[schoolName]).find(
    key => slugify(key) === classSlug
  )]

  if (!classData) return <div>Class not found</div>

  // Check if this class has sections (object) or direct array
  const hasSections = typeof classData[0] === "undefined" && !Array.isArray(classData)

  if (hasSections) {
    const sections = Object.keys(classData)
    return (
      <div>
        <h1>{schoolName} {classSlug} </h1>
        {sections.map(section => (
          <div key={section}>
            <Link href={`/institue/${schoolSlug}/${classSlug}/${slugify(section)}`}>{section}</Link>
          </div>
        ))}
      </div>
    )
  }

  // Direct student array
  return (
    <div>
      <h1>{schoolName}  {classSlug} </h1>
      {classData.map(student => (
        <div key={student.roll}>
          {student.name} (Roll: {student.roll})
        </div>
      ))}
    </div>
  )
}
