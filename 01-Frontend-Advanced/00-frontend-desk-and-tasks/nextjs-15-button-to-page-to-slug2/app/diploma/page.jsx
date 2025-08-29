"use client";

import { useRouter, usePathname } from "next/navigation";
import { stackDataWithPath } from "./stackData";

export default function DiplomaPage() {
  const router = useRouter();
  const pathname = usePathname();

  const toSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <main className="py-20 px-10 flex flex-col gap-6">
      {stackDataWithPath.map((item, index) => (
        <button
          key={index}
          onClick={() => router.push(`${pathname}/${toSlug(item.title)}`)}
          className={`${item.color} text-white p-6 rounded hover:opacity-90 transition text-left`}
        >
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <p className="mt-2 text-lg">{item.description}</p>
        </button>
      ))}
    </main>
  );
}
