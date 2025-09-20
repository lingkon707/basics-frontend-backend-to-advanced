import { useState } from "react";

export default function LanguageToggle() {
  const [selected, setSelected] = useState("British");

  return (
    <main className="p-48 pt-48">
  
    <div className="inline-flex  rounded-lg overflow-hidden border border-gray-300">
      <button
        className={`px-4 py-2 font-medium ${
          selected === "American"
            ? "bg-blue-600 text-white"
            : "bg-white text-black"
        }`}
        onClick={() => setSelected("American")}
      >
        American
      </button>
      <button
        className={`px-4 py-2 font-medium ${
          selected === "British"
            ? "bg-blue-600 text-white"
            : "bg-white text-black"
        }`}
        onClick={() => setSelected("British")}
      >
        British
      </button>
    </div>
    </main>
  );
}
