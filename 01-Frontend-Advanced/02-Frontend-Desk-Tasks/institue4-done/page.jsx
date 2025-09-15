"use client"
import { usePathname } from "next/navigation"

import Link from "next/link"
import { slugify } from "./slugify"
import studentsData from "./students.json"




export default function InstituePage() {
  const schools = Object.keys(studentsData)


    // Dynamically get parent folder name : remove it no issues
    const pathname = usePathname()
    const parentSlug = pathname.split("/")[1] || "random"

  return (
    <div>
      <h1>Folder/PafeName :::: {parentSlug}</h1>
      <br /> <br />
      {schools.map(school => (
        <div key={school}>
          {/* <Link href={`/institue/${slugify(school)}`}>{school}</Link> */}
          <Link href={`/${parentSlug}/${slugify(school)}`}>{school}</Link>
        </div>
      ))}
    </div>
  )
}
