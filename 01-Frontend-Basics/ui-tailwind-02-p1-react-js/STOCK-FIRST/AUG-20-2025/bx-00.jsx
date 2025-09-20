import React from "react";

const cards = [
  {
    title: "Text to image",
    desc: "Generate high-quality images using text with latest Image 4 Model.",
    img: "https://4.imimg.com/data4/VB/JI/MY-22345174/natural-agro-products.png", // Place your local image in public/images/
  },
  {
    title: "Text to video",
    desc: "Generate video clips from a detailed description.",
    img: "https://www.shyamgroup.org/images/slider/slider3.jpg",
  },
  {
    title: "Boards (beta)",
    desc: "Generate images or upload your own and start remixing on a board.",
    img: "https://www.shyamgroup.org/images/agro/003.jpg",
    tag: "New",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Top Navigation */}
      <div className="flex gap-4 mb-8">
        {["Featured", "Image", "Video", "Audio", "Vector"].map((item) => (
          <button
            key={item}
            className={`px-4 py-2 rounded-full ${
              item === "Featured"
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="relative">
              <img src={card.img} alt={card.title} className="w-full h-64 object-cover" />
              {card.tag && (
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {card.tag}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
              <button className="mt-4 bg-gray-100 px-3 py-2 rounded-full text-gray-800 text-sm">
                &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
