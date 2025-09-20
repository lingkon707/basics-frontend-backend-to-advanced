import React, { useState } from "react";

const videos = [
  {
    category: "History",
    url: "https://www.youtube.com/watch?v=65i16Abvdxs&t=56s",
    channelName: "Labid Rahat",
    channelUrl: "https://www.youtube.com/@LabidRahat/videos",
  },
  {
    category: "Politics",
    url: "https://www.youtube.com/watch?v=uW9DPJWsjj4&t=38s",
    channelName: "PinakiBhattacharya",
    channelUrl: "https://www.youtube.com/@PinakiBhattacharya/videos",
  },
  {
    category: "Funny",
    url: "https://www.youtube.com/watch?v=oyJpxy0VcO0",
    channelName: "Ajaira LTD",
    channelUrl: "https://www.youtube.com/@ajairapublicofficial/videos",
  },
];

function extractYouTubeID(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

const cardBackgrounds = [
  "bg-gradient-to-tr from-red-50 via-pink-50 to-red-50",
  "bg-gradient-to-tr from-green-50 via-lime-50 to-green-50",
  "bg-gradient-to-tr from-blue-50 via-cyan-50 to-blue-50",
  "bg-gradient-to-tr from-purple-50 via-indigo-50 to-purple-50",
];

export default function YouTubeCategoryApp() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(videos.map((v) => v.category))];

  const filteredVideos = selectedCategory
    ? videos.filter((v) => v.category === selectedCategory)
    : videos;

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center flex-wrap gap-5 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold border transition 
              ${
                selectedCategory === null
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
              }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold border transition 
              ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredVideos.length === 0 && (
            <p className="col-span-full text-center text-gray-400 text-lg">
              No videos found in this category.
            </p>
          )}

         {filteredVideos.map(({ url, channelName, channelUrl }, i) => {
  const videoId = extractYouTubeID(url);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "";

  const bgClass = cardBackgrounds[i % cardBackgrounds.length];

  return (
    <div
      key={i}
      className={`${bgClass} rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col`}
    >
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col flex-grow">
        {thumbnail && (
          <img
            src={thumbnail}
            alt="YouTube Video Thumbnail"
            className="w-full h-44 object-cover rounded-t-2xl"
          />
        )}

        <div className="p-5 flex flex-col flex-grow">
          {/* Removed title display */}

          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 font-semibold hover:underline mb-5 flex items-center space-x-1"
          >
            <svg
              className="w-5 h-5 fill-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10 15l5-3-5-3v6z" />
              <path d="M19.14 4.94a2.75 2.75 0 0 0-1.94-1.94C15.78 2.75 12 2.75 12 2.75s-3.78 0-5.2.25a2.75 2.75 0 0 0-1.94 1.94C4.5 6.36 4.5 9.6 4.5 9.6s0 3.24.36 4.66a2.75 2.75 0 0 0 1.94 1.94c1.42.25 5.2.25 5.2.25s3.78 0 5.2-.25a2.75 2.75 0 0 0 1.94-1.94c.36-1.42.36-4.66.36-4.66s0-3.24-.36-4.66z" />
            </svg>
            <span>{channelName}</span>
          </a>

          <div className="flex gap-4">
            <button
              onClick={() => window.open(url, "_blank")}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow-md transition"
            >
              Open Video
            </button>
            <button
              onClick={() => window.open(channelUrl, "_blank")}
              className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold py-2 rounded-xl shadow-sm transition"
            >
              Channel Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
})}

        </div>
      </div>
    </div>
  );
}
