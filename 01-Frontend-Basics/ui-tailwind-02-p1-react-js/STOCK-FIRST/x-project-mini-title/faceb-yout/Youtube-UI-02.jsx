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
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 via-white to-yellow-100 p-6 font-sans">
      <h1 className="text-5xl font-bold text-center text-yellow-700 mb-12 drop-shadow-lg tracking-wide">Top Picks</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {videosData.map((video, index) => (
          <div key={index} className="bg-white rounded-xl border border-yellow-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative">
              <img src={video.image} alt={video.name} className="w-full h-56 object-cover rounded-t-xl" />
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                {video.duration} mins
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">{video.name}</h2>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-full text-sm shadow transition-all duration-200">Watch</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
