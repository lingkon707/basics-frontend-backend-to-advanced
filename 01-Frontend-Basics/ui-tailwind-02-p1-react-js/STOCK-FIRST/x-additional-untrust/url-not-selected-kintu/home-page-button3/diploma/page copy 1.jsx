"use client";

import { useRouter } from "next/navigation";

export default function DiplomaPage() {
  const router = useRouter();

  const handleClick = (dept) => {
    router.push(`/diploma/${dept.toLowerCase()}`);
  };

  return (
    <main className="py-32 px-32 flex flex-col gap-8 items-start">
      <h1 className="text-5xl font-bold mb-12">Select Department</h1>

      <button
        onClick={() => handleClick("CSE")}
        className="bg-green-800 text-white px-6 py-4 rounded text-3xl hover:bg-green-600 transition"
      >
        CSE Departments
      </button>

      <button
        onClick={() => handleClick("EEE")}
        className="bg-blue-800 text-white px-6 py-4 rounded text-3xl hover:bg-blue-600 transition"
      >
        EEE
      </button>

      <button
        onClick={() => handleClick("CE")}
        className="bg-red-800 text-white px-6 py-4 rounded text-3xl hover:bg-red-600 transition"
      >
        CE
      </button>
    </main>
  );
}
