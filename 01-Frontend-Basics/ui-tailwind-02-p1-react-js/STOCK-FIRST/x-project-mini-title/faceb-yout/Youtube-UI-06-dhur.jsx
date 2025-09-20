import React from "react";

const videosData = [
  {
    name: "PRAN Snacks Review",
    duration: 5,
    views: 1583,
    image: "https://www.pranfoods.net/sites/default/files/2023-08/SNACKS_0.jpeg",
  },
  {
    name: "BSS News Coverage",
    duration: 10,
    views: 2310,
    image: "https://www.bssnews.net/assets/news_photos/2024/07/14/image-200187-1720961313.jpg",
  },
  {
    name: "Food Delivery Test",
    duration: 3,
    views: 870,
    image: "https://images.deliveryhero.io/image/darkstores-bd/food/846656001240.jpg?height=480",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#222222] p-12 font-sans flex flex-col items-center">
      <h1 className="text-6xl font-extrabold mb-14 text-[#FF5A36] tracking-tight uppercase drop-shadow-lg">
        Art Vibes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full">
        {videosData.map((video, idx) => (
          <div
            key={idx}
            className="relative flex flex-col border-8 border-[#FF5A36] rounded-lg overflow-hidden cursor-pointer
             hover:scale-[1.05] transition-transform duration-300 bg-white shadow-[12px_12px_0_0_#FFCB05]"
            style={{ clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)" }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={video.image}
                alt={video.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-filter duration-500"
              />

              <div className="absolute top-2 left-2 bg-[#FF5A36] text-white font-bold px-3 py-1 rounded-sm text-sm tracking-wide shadow-lg">
                {video.duration} MIN
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between bg-[#FF5A36] text-white">
              <h2 className="text-2xl font-bold leading-snug mb-2">{video.name}</h2>
              
              <div className="flex items-center gap-2 mb-4 text-yellow-300 font-semibold select-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5c-7.333 0-12 7.5-12 7.5s4.667 7.5 12 7.5 12-7.5 12-7.5-4.667-7.5-12-7.5zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-7.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
                <span>{video.views.toLocaleString()} views</span>
              </div>

              <button
                className="self-start border-4 border-white px-6 py-3 font-bold text-xl hover:bg-white hover:text-[#FF5A36] transition-colors duration-300 rounded"
                aria-label={`Watch ${video.name}`}
              >
                ▶ Watch
              </button>
            </div>

            {/* Abstract block behind card */}
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FFCB05] rotate-[20deg] opacity-70 pointer-events-none"
              style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
