"use client"
import { usePathname } from "next/navigation"

import Link from "next/link"
import { slugify } from "./slugify"
import studentsData from "./students.json"


export default function InstituePage() {
  const pathname = usePathname() 
  const schools = Object.keys(studentsData)

  return (
    <div>
      <h1>1: {pathname}</h1>
      {schools.map(school => (
        <div key={school}>
          <Link href={`${pathname}/${slugify(school)}`}>{school}</Link>
        </div>
      ))}
    </div>
  )
}
