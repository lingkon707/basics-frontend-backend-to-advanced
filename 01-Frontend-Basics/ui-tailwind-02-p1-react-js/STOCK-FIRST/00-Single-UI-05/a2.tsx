import React from "react";


export default function LogoDesignPromo() {
  const images = [
    "https://www.avanse.com/blogs/images/Untitled%20design%20(1).png",
    "https://iaeglobal.in/wp-content/uploads/Top-10-Benefits-of-Studying-in-the-USA-for-Indian-Students-copy.webp",
    "https://aspiresquare.com/wp-content/uploads/2024/05/Benefits-of-Studying-in-USA-960x550-1.webp",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-12">
      {/* Left content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent leading-tight">
          Fast & Powerful <br /> Business Logo Design Solutions
        </h1>
        <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
          1 M+ happy customers have gotten their company logo designs from our AI logo tool. Now it’s your turn!
        </p>
        <button className="flex items-center gap-3 bg-pink-500 hover:bg-pink-600 transition text-white font-semibold px-8 py-3 rounded-full shadow-md mx-auto md:mx-0">
          Get Started 
        </button>
      </div>

      {/* Right images */}
      <div className="md:w-1/2 flex justify-center gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 cursor-pointer w-32 h-24 sm:w-40 sm:h-28"
          >
            <img
              src={src}
              alt={`Promo ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
