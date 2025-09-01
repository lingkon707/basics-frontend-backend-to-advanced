"use client";

import { useRouter, usePathname } from "next/navigation";

const stackDataWithPath = [
  {
    title: "CSE Department and better future have in hands on",
    description: "Computer Science and Engineering is all about programming, systems, and technology.",
    color: "bg-green-800",
  },
  {
    title: "BBA Department",
    description: "Business Administration teaches management, finance, and entrepreneurship.",
    color: "bg-blue-800",
  },
];

export default function CardWithPath() {
  const router = useRouter();
  const pathname = usePathname();

  const toSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  const handleClick = (title) => {
    const slug = toSlug(title);
    router.push(`${pathname}/${slug}`);
  };

  return (
    <div className="flex flex-col gap-6">
      {stackDataWithPath.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(item.title)}
          className={`${item.color} text-white p-6 rounded hover:opacity-90 transition text-left`}
        >
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <p className="mt-2 text-lg">{item.description}</p>
        </button>
      ))}
    </div>
  );
}
