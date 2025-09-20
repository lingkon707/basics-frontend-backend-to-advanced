"use client";

import { useParams } from "next/navigation";

export default function DepartmentPage() {
  const params = useParams();
  const department = params.department;

  return (
    <main className="py-32 px-32">
      <h1 className="text-5xl font-bold">
        Welcome to {department.toUpperCase()} Department
      </h1>
    </main>
  );
}
