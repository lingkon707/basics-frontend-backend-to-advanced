"use client";

import { useSearchParams, useParams } from "next/navigation";

export default function DepartmentPage() {
  const searchParams = useSearchParams();
  const fullTitle = searchParams.get("title"); // get the original title
  const params = useParams();
  const slug = params.department; // still have the slug if needed

  return (
    <main className="py-20 px-10">
      <h1 className="text-5xl font-bold">{fullTitle}</h1>
      <p className="mt-4 text-lg">Slug: {slug}</p>
    </main>
  );
}
