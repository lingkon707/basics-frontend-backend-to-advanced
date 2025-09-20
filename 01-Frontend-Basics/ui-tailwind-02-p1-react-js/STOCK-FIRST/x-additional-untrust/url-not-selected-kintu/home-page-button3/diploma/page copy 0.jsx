"use client";

import { useRouter } from "next/navigation";

export default function DiplomaPage() {
  const router = useRouter();

  const handleClick = (dept) => {
    router.push(`/diploma/${dept.toLowerCase()}`);
  };

  return (
    <main>
      <button onClick={() => handleClick("CSE")}>CSE</button>
      <button onClick={() => handleClick("BBA")}>BBA</button>
      <button onClick={() => handleClick("MCA")}>MCA</button>
      
    </main>
  );
}
