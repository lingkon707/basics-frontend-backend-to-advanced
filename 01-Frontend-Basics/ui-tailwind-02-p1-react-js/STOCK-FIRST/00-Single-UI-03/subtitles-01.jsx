import React, { useState } from "react";

const subtitles = [
  "In a world torn by conflict, hope emerges from the shadows.",
  "The hero rises, challenging fate and rewriting destiny.",
  "Bonds are tested as darkness threatens to consume the light.",
  "A final stand will decide the fate of all mankind.",
  "And in the end, only courage will remain.",
];

export default function MovieViewer() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % subtitles.length);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      {/* Image container */}
      <div className="w-[600px] max-w-full h-[400px] bg-gray-900 rounded-lg shadow-lg overflow-hidden relative">
        <img
          src="https://images.bauerhosting.com/empire/2025/04/a-minecraft-movie-1.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80" // Replace with your actual image URL
          alt="Movie Scene"
          className="w-full h-full object-cover"
          width={600}
          height={400}
          loading="lazy"
        />

        {/* Subtitle overlay */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-base md:text-lg px-4 py-2 rounded-md max-w-[90%] text-center shadow-lg">
          {subtitles[index]}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="mt-6 px-8 py-2 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-full shadow-lg"
        aria-label="Next subtitle"
      >
        Next
      </button>
    </div>
  );
}
