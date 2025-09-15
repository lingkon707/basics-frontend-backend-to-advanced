"use client"

import { usePathname } from "next/navigation"

export default function StudentPage() {
  // Dynamically get parent folder name
  const pathname = usePathname() // e.g., "/student"
  const parentSlug = pathname.split("/")[1] || "student"

  return (
    <div>
      <span className="flex min-h-[20px] py-4 mt-12 ">My page folder name is :</span>
      <span>{parentSlug}</span>
    </div>
  )
}
