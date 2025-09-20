'use client';
import heroContent from "./HomeAiModelImages";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-white relative overflow-hidden">

      {/* Avatars */}
      <div className="flex items-center space-x-[-12px] mb-6 z-10">
        {heroContent.avatarImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
          />
        ))}
        <span className="text-sm ml-4 font-medium text-gray-500">+ more</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl lg:text-6xl font-extrabold text-center text-gray-900 max-w-4xl leading-tight z-10">
        {heroContent.title}
      </h1>

      {/* Description */}
      <p className="text-lg text-center text-gray-600 mt-6 max-w-2xl z-10">
        {heroContent.description}
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center z-10">
        {heroContent.buttons.map((btn, index) => (
          <button
            key={index}
            className={`px-6 py-3 text-sm font-semibold rounded-full transition ${
              btn.style === "primary"
                ? "bg-black text-white hover:bg-gray-900"
                : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Feature Images */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl z-10">
        {heroContent.featureImages.map((src, index) => (
          <div key={index} className="rounded-2xl overflow-hidden shadow-lg w-full h-[200px]">
            <img
              src={src}
              alt={`Feature ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
