'use client';

export default function RGBHeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-[#000428] via-[#004e92] to-[#001f3f] text-white px-6 lg:px-20 py-16 flex flex-col items-center justify-center text-center">

      {/* Title */}
      <h1 className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 text-transparent bg-clip-text drop-shadow-lg">
        The Future is RGB
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg max-w-2xl text-gray-300">
        Experience a bold, vibrant UI that blends creativity and cutting-edge design.
        This page is designed with a unique RGB aesthetic, perfect for visionaries and tech lovers.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <button className="px-6 py-3 text-sm font-bold rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:opacity-90 transition">
          Explore Colors
        </button>
        <button className="px-6 py-3 text-sm font-semibold rounded-full border border-white text-white hover:bg-white hover:text-black transition">
          Contact Us
        </button>
      </div>

      {/* RGB Feature Cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {[
          "Innovation",
          "Creativity",
          "Technology",
          "Design",
        ].map((title, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-left border border-white/10 shadow-md hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">
              RGB-powered excellence in every detail. Push the limits of visual creativity.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
