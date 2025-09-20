// app/Zero.tsx
"use client";

import { useRouter } from "next/navigation";

export default function Zero() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/diploma");
  };

  return (

    <main className="py-32 px-32 p-24">

      <button
      onClick={handleClick}
      className="bg-green-800 text-white px-4 py-2 rounded text-5xl hover:bg-blue-600 transition"
    >
      diploma - page Link
    </button>


    </main>
    
    

  );
}
