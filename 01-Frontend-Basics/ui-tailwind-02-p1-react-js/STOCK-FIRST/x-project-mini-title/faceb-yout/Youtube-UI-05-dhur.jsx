import React from "react";

const videosData = [
  {
    name: "PRAN Snacks Review",
    duration: 5,
    image: "https://www.pranfoods.net/sites/default/files/2023-08/SNACKS_0.jpeg",
  },
  {
    name: "BSS News Coverage",
    duration: 10,
    image: "https://www.bssnews.net/assets/news_photos/2024/07/14/image-200187-1720961313.jpg",
  },
  {
    name: "Food Delivery Test",
    duration: 3,
    image: "https://images.deliveryhero.io/image/darkstores-bd/food/846656001240.jpg?height=480",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] p-12 font-sans flex flex-col items-center">
      <h1 className="text-6xl font-extrabold mb-14 text-[#222] tracking-tight uppercase">
        Art Vibes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
        {videosData.map((video, idx) => (
          <div
            key={idx}
            className="relative flex flex-col border-8 border-[#FF3C38] rounded-lg overflow-hidden cursor-pointer
             hover:scale-[1.04] transition-transform duration-300 bg-white shadow-[12px_12px_0_0_#FFF200]"
            style={{ clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)" }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={video.image}
                alt={video.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-filter duration-500"
              />

              <div className="absolute top-2 left-2 bg-[#FF3C38] text-white font-bold px-3 py-1 rounded-sm text-sm tracking-wide shadow-lg">
                {video.duration} MIN
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between bg-[#FF3C38] text-white">
              <h2 className="text-2xl font-bold leading-snug mb-4">{video.name}</h2>

              <button
                className="self-start border-4 border-white px-6 py-3 font-bold text-xl hover:bg-white hover:text-[#FF3C38] transition-colors duration-300 rounded"
                aria-label={`Watch ${video.name}`}
              >
                ▶ Watch
              </button>
            </div>

            {/* Abstract block behind card */}
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FFF200] rotate-[20deg] opacity-70 pointer-events-none"
              style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
