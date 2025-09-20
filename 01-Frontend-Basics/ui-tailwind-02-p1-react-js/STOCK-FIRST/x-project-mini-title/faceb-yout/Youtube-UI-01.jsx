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
    <div className="p-6 bg-gradient-to-br from-purple-100 to-blue-100 min-h-screen font-sans">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-800 tracking-tight drop-shadow-lg">Featured Videos</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-6">
        {videosData.map((video, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative group">
            <img src={video.image} alt={video.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-1 truncate">{video.name}</h2>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{video.duration} mins</span>
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-medium shadow hover:brightness-110">Watch Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
