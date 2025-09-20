import React, { useState } from "react";

const movies = [
  {
    id: 1,
    title: "Black Panther: Wakanda Forever",
    year: 2022,
    rating: "PG-13",
    genres: ["Action", "Adventure", "Fantasy"],
    description:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.",
    poster:
      "https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=UVbQdN72l7c",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: "PG-13",
    genres: ["Action", "Adventure", "Sci-Fi"],
    description:
      "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    poster:
      "https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: "PG-13",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    rating: "PG-13",
    genres: ["Action", "Crime", "Drama"],
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    poster:
      "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
];

export default function DarkMovieGallery() {
  const [selected, setSelected] = useState(movies[0]);

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold tracking-wide text-red-600 select-none">
          CineShadow
        </h1>
        <ul className="hidden md:flex space-x-8 text-gray-400 text-sm uppercase tracking-wide">
          <li className="hover:text-red-600 cursor-pointer transition">Home</li>
          <li className="hover:text-red-600 cursor-pointer transition">Movies</li>
          <li className="hover:text-red-600 cursor-pointer transition">Series</li>
          <li className="hover:text-red-600 cursor-pointer transition">My List</li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col lg:flex-row gap-12">
        {/* Movie Posters Carousel */}
        <section className="relative lg:w-2/5">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="hidden lg:flex absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 text-red-600 z-20 shadow-lg"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="hidden lg:flex absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 text-red-600 z-20 shadow-lg"
          >
            ›
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => setSelected(movie)}
                className={`snap-center flex-shrink-0 cursor-pointer rounded-xl overflow-hidden shadow-2xl border-4 transition-transform duration-300 ${
                  selected.id === movie.id
                    ? "border-red-600 scale-105 shadow-red-600"
                    : "border-transparent hover:scale-105 hover:shadow-red-600/50"
                }`}
                style={{ width: "200px", height: "300px" }}
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Movie Details */}
        <section className="lg:w-3/5 flex flex-col justify-center space-y-8">
          <h2 className="text-5xl font-extrabold tracking-tight text-red-600 drop-shadow-lg select-none">
            {selected.title}
          </h2>
          <div className="flex flex-wrap gap-4 text-gray-400 font-semibold uppercase tracking-wide text-sm">
            {selected.genres.map((g) => (
              <span key={g} className="bg-gray-800 bg-opacity-30 px-3 py-1 rounded-full">
                {g}
              </span>
            ))}
            <span className="bg-gray-800 bg-opacity-30 px-3 py-1 rounded-full">{selected.year}</span>
            <span className="bg-gray-800 bg-opacity-30 px-3 py-1 rounded-full">{selected.rating}</span>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">{selected.description}</p>
          <div className="flex space-x-6">
            <a
              href={selected.trailerUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 bg-red-600 rounded-full font-semibold shadow-lg hover:bg-red-700 transition"
            >
              ▶ Watch Trailer
            </a>
            <button
              onClick={() => alert("Watch Now clicked!")}
              className="px-8 py-3 border border-red-600 rounded-full font-semibold hover:bg-red-600 hover:text-black transition"
            >
              ▶ Watch Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
        © 2025 CineShadow. All rights reserved.
      </footer>

      {/* Hide scrollbar for all browsers */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
