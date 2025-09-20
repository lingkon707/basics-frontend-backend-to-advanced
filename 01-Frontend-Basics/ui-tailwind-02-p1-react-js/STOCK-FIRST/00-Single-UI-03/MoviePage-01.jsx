import React from "react";

export default function DarkMoviePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 font-sans flex flex-col">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold tracking-wide text-red-600 select-none">CineShadow</h1>
        <ul className="hidden md:flex space-x-8 text-gray-400 text-sm uppercase tracking-wide">
          <li className="hover:text-red-600 cursor-pointer transition">Home</li>
          <li className="hover:text-red-600 cursor-pointer transition">Movies</li>
          <li className="hover:text-red-600 cursor-pointer transition">Series</li>
          <li className="hover:text-red-600 cursor-pointer transition">My List</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow relative flex flex-col md:flex-row max-w-7xl mx-auto px-6 md:px-12 py-12 gap-12 items-center">
        
        {/* Movie Poster */}
        <div className="relative w-full max-w-md md:max-w-sm rounded-xl overflow-hidden shadow-2xl border border-gray-800 cursor-pointer hover:scale-105 transition-transform duration-500">
          <img
            src="https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg" // Example poster
            alt="Movie Poster"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Movie Info */}
        <section className="flex flex-col max-w-xl space-y-6">
          <h2 className="text-5xl font-extrabold tracking-tight text-red-600 drop-shadow-lg select-none">
            Black Panther: Wakanda Forever
          </h2>
          <div className="flex space-x-4 items-center text-gray-400 font-semibold uppercase tracking-wide text-sm">
            <span>Action</span>
            <span>Adventure</span>
            <span>Fantasy</span>
            <span>2022</span>
            <span>PG-13</span>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.
          </p>

          {/* Buttons */}
          <div className="flex space-x-6">
            <button className="px-8 py-3 bg-red-600 rounded-full font-semibold shadow-lg hover:bg-red-700 transition">
              ▶ Watch Trailer
            </button>
            <button className="px-8 py-3 border border-red-600 rounded-full font-semibold hover:bg-red-600 hover:text-black transition">
              ▶ Watch Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
        © 2025 CineShadow. All rights reserved.
      </footer>
    </div>
  );
}
