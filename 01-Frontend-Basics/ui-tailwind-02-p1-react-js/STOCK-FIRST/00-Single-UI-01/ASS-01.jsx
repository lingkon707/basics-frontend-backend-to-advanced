import React from "react";

const tags = [
  "Girl",
  "Female Model",
  "Model",
  "Fashion Model",
  "Model Girl",
  "Female",
  "Woman",
  "Fashion",
];

const images = [
  {
    url: "https://live.staticflickr.com/2627/4117177600_8e70c6d49a.jpg",
    title: "Vintage Shoot",
    source: "Flickr",
  },
  {
    url: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
    title: "Street Style",
    source: "Unsplash",
  },
  {
    url: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a",
    title: "Studio Portrait",
    source: "Unsplash",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Girl model</h1>

      {/* Tag Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tags.map((tag, index) => (
          <button
            key={index}
            className="border border-gray-300 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-xl shadow-md bg-gray-100"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-3 text-sm">
              <strong>{img.title}</strong>
              <div className="text-xs opacity-80">{img.source}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
