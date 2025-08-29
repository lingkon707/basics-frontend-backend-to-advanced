// app/Zero.tsx
"use client";

import { useRouter } from "next/navigation";

export default function Zero() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/diploma");
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gray-50">
      <button
        onClick={handleClick}
        className="bg-green-700 text-white font-semibold px-8 py-4 rounded-2xl text-xl shadow-lg 
               hover:bg-green-800 hover:shadow-xl 
               active:scale-95 transition-all duration-300 ease-in-out"
      >
        Diploma Page
      </button>
    </main>
  );
}
