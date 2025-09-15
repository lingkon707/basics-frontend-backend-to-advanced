"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function StudentPage() {
  // Dynamically get parent folder name
  const pathname = usePathname() // e.g., "/student"
  const parentSlug = pathname.split("/")[1] || "student"

  // Complex object with arrays
  const children = [
    { name: "class8", sections: ["boys", "girls"] },
    { name: "class9", sections: ["science", "arts", "commerce"] },
    { name: "class10", sections: ["sectionA", "sectionB"] }
  ]

  return (
    <div>
      <div className="p-16">
        <span>My page folder name is: </span>
        <strong>{parentSlug}</strong>
      </div>

      <div className="m-8">
        {children.map(child => (
          <div key={child.name}>
            <div>
              <strong>{child.name}</strong>
            </div>
            <div>
              {child.sections.map(section => (
                <div key={section}>
                  <Link href={`/${parentSlug}/${child.name}/${section}`}>
                    {section}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
