import React from "react";

export default function LogoDesignPromo() {
  const images = [
    "https://www.avanse.com/blogs/images/Untitled%20design%20(1).png",
    "https://iaeglobal.in/wp-content/uploads/Top-10-Benefits-of-Studying-in-the-USA-for-Indian-Students-copy.webp",
    "https://aspiresquare.com/wp-content/uploads/2024/05/Benefits-of-Studying-in-USA-960x550-1.webp",
  ];

  return (
    <section className="relative bg-white max-w-7xl mx-auto p-10 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-12">
      {/* Decorative shapes */}
      <div className="hidden md:block absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full opacity-30 filter blur-3xl"></div>
      <div className="hidden md:block absolute -bottom-24 -right-20 w-80 h-80 bg-purple-300 rounded-full opacity-30 filter blur-3xl"></div>

      {/* Left text */}
      <div className="md:w-1/2 space-y-8 z-10">
        <h1 className="text-5xl font-extrabold text-gray-900 border-b-4 border-pink-500 inline-block pb-2 max-w-max">
          Fast & Powerful <br /> Business Logo Design
        </h1>
        <p className="text-gray-600 text-lg max-w-md">
          1 M+ happy customers have gotten their company logo designs from our AI logo tool. Now it’s your turn!
        </p>
        <div className="flex gap-6 mt-6">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-pink-700 transition font-semibold">
            Get Started
          </button>
          <button className="border border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* Right images collage */}
      <div className="md:w-1/2 relative flex justify-center items-center">
        <div className="relative w-72 h-72">
          {/* Big center image */}
          <img
            src={images[0]}
            alt="Logo design 1"
            className="rounded-xl shadow-2xl object-cover w-full h-full"
            loading="lazy"
            draggable={false}
          />
          {/* Small top-left */}
          <img
            src={images[1]}
            alt="Logo design 2"
            className="absolute top-0 left-0 w-24 h-24 rounded-lg border-4 border-white shadow-md object-cover -translate-x-8 -translate-y-8"
            loading="lazy"
            draggable={false}
          />
          {/* Small bottom-right */}
          <img
            src={images[2]}
            alt="Logo design 3"
            className="absolute bottom-0 right-0 w-28 h-28 rounded-lg border-4 border-white shadow-md object-cover translate-x-8 translate-y-8"
            loading="lazy"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
