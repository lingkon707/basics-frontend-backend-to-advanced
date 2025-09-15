"use client"

import { useParams, usePathname } from "next/navigation"
import Link from "next/link"
import studentsData from "../students.json"
import { slugify } from "../slugify"



export default function SchoolPage() {
  const params = useParams()
  const pathname = usePathname() // current path: /institue/sunrise-academy
  const schoolSlug = params.school

  const schoolName = Object.keys(studentsData).find(
    key => slugify(key) === schoolSlug
  )

  if (!schoolName) return <div>School not found</div>

  const classes = Object.keys(studentsData[schoolName])

  return (
    <div>
      <h1>2:: {schoolName}</h1>
      {classes.map(cls => (
        <div key={cls}>
          <Link href={`${pathname}/${slugify(cls)}`}>{cls}</Link>
        </div>
      ))}
    </div>
  )
}

