import React from "react";

export default function LogoDesignPromo() {
  const images = [
    "https://www.avanse.com/blogs/images/Untitled%20design%20(1).png",
    "https://iaeglobal.in/wp-content/uploads/Top-10-Benefits-of-Studying-in-the-USA-for-Indian-Students-copy.webp",
    "https://aspiresquare.com/wp-content/uploads/2024/05/Benefits-of-Studying-in-USA-960x550-1.webp",
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-10">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-indigo-900">
          Fast & Powerful Business Logo Design Solutions
        </h1>
        <p className="text-indigo-700 text-lg">
          1 M+ happy customers have gotten their company logo designs from our AI logo tool. Now it’s your turn!
        </p>
        <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>

      {/* Images Section */}
      <div className="md:w-1/2 relative flex justify-center items-center gap-6">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Promo image ${i + 1}`}
            className={`rounded-xl shadow-lg object-cover w-40 h-28 md:w-52 md:h-36 absolute transition-transform duration-300 ${
              i === 0 ? "z-30 top-0 left-0 rotate-[-6deg] shadow-indigo-300" : ""
            } ${
              i === 1 ? "z-20 top-8 left-20 rotate-[6deg] shadow-purple-300" : ""
            } ${
              i === 2 ? "z-10 top-16 left-40 rotate-[-3deg] shadow-pink-300" : ""
            } hover:scale-105`}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
}
