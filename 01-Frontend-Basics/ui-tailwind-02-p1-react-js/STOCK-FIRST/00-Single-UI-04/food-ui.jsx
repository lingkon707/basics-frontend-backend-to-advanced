import React from "react";

const imageUrl =
  "https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg";

const texts = [
  { text: "Fresh Ingredients", style: "bg-red-600 rotate-3 top-10 left-6" },
  { text: "Quick Frozen", style: "bg-blue-600 -rotate-6 top-20 right-8" },
  { text: "Healthy & Tasty", style: "bg-green-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 py-3 rounded-full shadow-xl" },
  { text: "Easy to Cook", style: "bg-yellow-500 rotate-6 bottom-16 left-8" },
  { text: "Family Favorite", style: "bg-purple-600 -rotate-3 bottom-12 right-6" },
];

export default function DynamicTextOverlay() {
  return (
    <div className="relative max-w-6xl mx-auto rounded-lg overflow-hidden shadow-2xl">
      <img
        src={imageUrl}
        alt="Frozen Food"
        className="w-full h-auto object-cover"
        loading="lazy"
      />

      <div className="absolute inset-0 pointer-events-none">
        {texts.map(({ text, style }, idx) => (
          <div
            key={idx}
            className={`absolute px-6 py-3 text-white font-extrabold uppercase text-lg sm:text-xl shadow-lg cursor-default select-none ${style}`}
            style={{
              userSelect: "none",
              boxShadow: "0 8px 12px rgba(0,0,0,0.3)",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
