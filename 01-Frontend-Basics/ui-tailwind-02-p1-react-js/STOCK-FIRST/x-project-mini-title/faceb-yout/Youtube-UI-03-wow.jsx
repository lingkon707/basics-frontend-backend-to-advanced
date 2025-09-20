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
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 p-10 font-sans text-white flex flex-col items-center">
      <h1 className="text-6xl font-extrabold mb-16 tracking-widest drop-shadow-[0_0_15px_rgb(168,85,247)]">
        🌟 Featured Videos 🌟
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 w-full max-w-7xl">
        {videosData.map((video, idx) => (
          <div
            key={idx}
            className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 cursor-pointer"
          >
            <img
              src={video.image}
              alt={video.name}
              className="rounded-t-3xl w-full h-64 object-cover"
              loading="lazy"
            />

            {/* Duration vertical badge */}
            <div className="absolute top-6 left-0 bg-gradient-to-b from-purple-600 to-indigo-700 rounded-tr-xl rounded-br-xl w-12 h-24 flex flex-col items-center justify-center shadow-lg text-lg font-bold text-white drop-shadow-lg">
              <span>{video.duration}</span>
              <span className="text-xs tracking-widest mt-1">mins</span>
            </div>

            <div className="p-6 flex flex-col justify-between h-36">
              <h2 className="text-xl font-semibold line-clamp-2 drop-shadow-[0_0_5px_rgba(0,0,0,0.7)]">
                {video.name}
              </h2>

              <button className="mt-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.19v7.619a1 1 0 001.234.97l6.518-1.876a1 1 0 000-1.813z" />
                </svg>
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
