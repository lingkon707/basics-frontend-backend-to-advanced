"use client";

import { useRouter, usePathname } from "next/navigation";

export default function DiplomaPage() {
  const router = useRouter();
  const pathname = usePathname();

  // Convert text to slug
  const toSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  // Array of H1 titles
  const titles = [
    "CSE Department and better future have in hands on",
    "EEE have in hands on",
    "BBA Department",
    "MCA Department"
  ];

  const handleClick = (title) => {
    const slug = toSlug(title);
    router.push(`${pathname}/${slug}`); // clean URL slug
  };

  return (
    <main className="py-20 px-10 flex flex-col gap-6">
      {titles.map((title, index) => (
        <h1
          key={index}
          onClick={() => handleClick(title)}
          className="cursor-pointer text-3xl font-bold bg-sky-500 text-white p-6 rounded hover:bg-green-600 transition"
        >
          {title}
        </h1>
      ))}
    </main>
  );
}
