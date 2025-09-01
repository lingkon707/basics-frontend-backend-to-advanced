"use client";

import { useParams } from "next/navigation";

// Helper to convert slug back to readable title
const slugToTitle = (slug) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function DepartmentPage() {
  const params = useParams();
  const slug = params.department; // e.g. "cse-department-and-better-future-have-in-hands-on"
  const title = slugToTitle(slug);

  return (
    <main className="py-20 px-10">
      <h1 className="text-5xl font-bold">{title}</h1>
    </main>
  );
}
