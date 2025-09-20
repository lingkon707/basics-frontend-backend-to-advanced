import React from "react";

const videosData = [
  {
    name: "PRAN Snacks Review",
    uploadDate: "2025-07-10",
    duration: 5,
    views: "1.2M",
    channel: "PRAN Foods BD",
    description: "An honest review of PRAN's latest line of snacks in the Bangladeshi market.",
    image: "https://www.pranfoods.net/sites/default/files/2023-08/SNACKS_0.jpeg",
  },
  {
    name: "BSS News Coverage",
    uploadDate: "2025-07-12",
    duration: 10,
    views: "2.3M",
    channel: "BSS Official",
    description: "A quick recap of major events from the national news broadcast.",
    image: "https://www.bssnews.net/assets/news_photos/2024/07/14/image-200187-1720961313.jpg",
  },
  {
    name: "Food Delivery Test",
    uploadDate: "2025-07-08",
    duration: 3,
    views: "860K",
    channel: "Dhaka Foodies",
    description: "We tested three top delivery services for speed and food quality.",
    image: "https://images.deliveryhero.io/image/darkstores-bd/food/846656001240.jpg?height=480",
  },
];

export default function App() {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen font-sans shadow-inner">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700 drop-shadow-xl">My YouTube UI</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4">
        {videosData.map((video, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img src={video.image} alt={video.name} className="w-full h-52 object-cover shadow-md" />
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-bold text-gray-900 drop-shadow-sm">{video.name}</h2>
              <p className="text-sm text-gray-700"><span className="font-semibold">Channel:</span> {video.channel}</p>
              <p className="text-sm text-gray-600"><span className="font-semibold">Views:</span> {video.views} | <span className="font-semibold">Upload Date:</span> {video.uploadDate}</p>
              <p className="text-sm text-gray-600"><span className="font-semibold">Duration:</span> {video.duration} mins</p>
              <p className="text-sm text-gray-700 italic">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
