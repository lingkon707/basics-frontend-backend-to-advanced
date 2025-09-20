"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Zero() {
  const router = useRouter();
  const pathname = usePathname(); // get current URL

  const handleClick = () => {
    router.push(`${pathname}/cse`); // dynamically append 'cse' to current path
  };

  return (
    <main className="py-32 px-32 mt-40 p-24">
      <button
        onClick={handleClick}
        className="bg-green-800 text-white px-4 py-2 rounded text-5xl hover:bg-blue-600 transition"
      >
        CSE - page Link
      </button>
    </main>
  );
}
