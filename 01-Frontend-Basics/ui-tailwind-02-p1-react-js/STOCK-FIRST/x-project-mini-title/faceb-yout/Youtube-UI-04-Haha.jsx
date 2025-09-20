import React, { useState } from "react";

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

function TiltCard({ video }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // max 15deg tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    setTilt({ x, y });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        clipPath: `polygon(0 0, 100% 5%, 100% 90%, 5% 100%, 0 50%)`,
      }}
      className="relative bg-gradient-to-tr from-cyan-800 to-purple-900 border border-dashed border-cyan-400 shadow-[0_0_30px_cyan] cursor-pointer transition-transform duration-300 text-white p-5 w-72 mx-auto"
    >
      {/* Blob abstract shape behind */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-700 rounded-full opacity-60 filter blur-xl mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-cyan-600 rounded-full opacity-50 filter blur-2xl mix-blend-screen"></div>

      <img
        src={video.image}
        alt={video.name}
        className="rounded-lg object-cover w-full h-44 mb-4 border border-cyan-500"
      />

      <div className="flex justify-between items-center font-mono text-sm mb-3 tracking-widest">
        <span className="bg-cyan-400/30 px-2 rounded-xl">{video.duration} MIN</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      </div>

      <h2 className="text-lg font-bold tracking-tight mb-2">{video.name}</h2>

      <button className="bg-cyan-500/70 hover:bg-cyan-600 transition-colors py-2 w-full rounded-lg font-semibold">
        Play Video
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center p-10 gap-16">
      <h1 className="text-5xl text-cyan-400 font-extrabold font-mono tracking-widest mb-12 drop-shadow-[0_0_15px_cyan]">
        ✨ Future Flicks ✨
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl w-full">
        {videosData.map((video, idx) => (
          <TiltCard key={idx} video={video} />
        ))}
      </div>
    </div>
  );
}
