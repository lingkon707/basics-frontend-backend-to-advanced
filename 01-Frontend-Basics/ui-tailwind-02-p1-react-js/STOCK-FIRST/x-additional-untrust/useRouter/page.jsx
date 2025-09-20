"use client";
import { stackDataWithPath } from "./stackData";

export default function DiplomaPage() {
  return (
    <main className="py-20 px-10 flex flex-col gap-6">
      {stackDataWithPath.map((item, index) => (
        <button
          key={index}
          className={`${item.color} text-white p-6 rounded hover:opacity-90 transition text-left`}
        >
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <p className="mt-2 text-lg">{item.description}</p>
        </button>
      ))}
    </main>
  );
}
