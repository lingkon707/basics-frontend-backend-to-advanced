"use client";

import { useRouter, usePathname } from "next/navigation";

export default function DiplomaPage() {
  const router = useRouter();
  const pathname = usePathname();

  const toSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  const handleClick = (title) => {
    const slug = toSlug(title);
    router.push(`${pathname}/${slug}?title=${encodeURIComponent(title)}`);
  };

  return (
    <main className="py-20 px-10 flex flex-col gap-6">

      <button
        onClick={(e) =>
          handleClick(e.currentTarget.querySelector("h1").innerText)
        }
        className="bg-green-800 text-white p-6 rounded hover:bg-green-600 transition text-left"
      >
        <h1 className="text-3xl font-bold">
          CSE Department and better future have in hands on
        </h1>
        <p className="mt-2 text-lg">
          Computer Science and Engineering is all about programming, systems, and technology.
        </p>
      </button>

    </main>
  );
}
