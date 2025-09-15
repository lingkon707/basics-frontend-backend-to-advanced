"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function StudentPage() {
  // Dynamically get parent folder name
  const pathname = usePathname() // e.g., "/student"
  const parentSlug = pathname.split("/")[1] || "student"

  // Example child slugs
  const children = ["class8", "class9", "class10"]

  return (
    <div className="p-16">
      <div>
        <span>My page folder name is: </span>
        <strong>{parentSlug}</strong>
      </div>

      <div>
        <h1>Click Button:</h1>
        {children.map(child => (
          <div key={child}>
            <Link href={`/${parentSlug}/${child}`}>
              {child}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
