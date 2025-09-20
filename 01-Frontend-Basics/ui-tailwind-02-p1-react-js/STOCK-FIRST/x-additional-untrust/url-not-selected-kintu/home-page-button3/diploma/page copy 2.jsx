"use client";

import { useRouter } from "next/navigation";

export default function DiplomaPage() {
  const router = useRouter();

  // Helper: convert title to URL-friendly slug
  const toSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  const handleClick = (title) => {
    const slug = toSlug(title);
    router.push(`/diploma/${slug}`);
  };

  return (
    <main className="py-20 px-10 flex flex-col gap-6">

      <button
        onClick={(e) => handleClick(e.currentTarget.querySelector("h1").innerText)}
        className="bg-green-800 text-white p-6 rounded hover:bg-green-600 transition text-left"
      >
        <h1 className="text-3xl font-bold">CSE Department</h1>
        <p className="mt-2 text-lg">
          Computer Science and Engineering is all about programming, systems, and technology.
        </p>
      </button>

      <button
        onClick={(e) => handleClick(e.currentTarget.querySelector("h1").innerText)}
        className="bg-blue-800 text-white p-6 rounded hover:bg-blue-600 transition text-left"
      >
        <h1 className="text-3xl font-bold">BBA Department</h1>
        <p className="mt-2 text-lg">
          Business Administration teaches management, finance, and entrepreneurship.
        </p>
      </button>

      <button
        onClick={(e) => handleClick(e.currentTarget.querySelector("h1").innerText)}
        className="bg-red-800 text-white p-6 rounded hover:bg-red-600 transition text-left"
      >
        <h1 className="text-3xl font-bold">MCA Department</h1>
        <p className="mt-2 text-lg">
          Master of Computer Applications focuses on advanced software development and IT.
        </p>
      </button>

    </main>
  );
}
