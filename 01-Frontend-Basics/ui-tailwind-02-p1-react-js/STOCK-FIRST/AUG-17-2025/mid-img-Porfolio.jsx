import React from "react";

const heroData = {
  greeting: "👋 Halo there!",
  welcome: "Welcome to my Portfolio.",
  name: "I’m Robert William.",
  role: "I am an Architect.",
  heading: "Creative,\nSketch,\nDraw,\nArchitect.",
  buttonText: "Buy on",
  buttonLogo: "https://cdn.iconscout.com/icon/free/png-256/envato-2-282295.png",
  mainImage:
    "https://demo.casethemes.net/maiko/wp-content/uploads/2024/11/home5-s1-01.webp",
};

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#fdfcf9] relative">
      {/* Grid background lines */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
          <p className="text-2xl">👋 Halo there!</p>
          <p className="text-xl text-gray-600">{heroData.welcome}</p>
          <h1 className="text-4xl font-bold leading-tight">{heroData.name}</h1>
          <h2 className="text-3xl font-medium text-gray-700">{heroData.role}</h2>

          <button className="mt-6 bg-black text-white flex items-center px-6 py-3 rounded-full hover:bg-gray-800 transition">
            <img
              src={heroData.buttonLogo}
              alt="envato"
              className="w-5 h-5 mr-2"
            />
            {heroData.buttonText} Envato
          </button>
        </div>

        {/* Center Image */}
        <div className="w-full lg:w-1/3 relative my-12 lg:my-0 flex justify-center">
          <div className="relative z-10">
            <img
              src={heroData.mainImage}
              alt="Robert William"
              className="w-full max-w-md lg:max-w-lg object-cover grayscale"
            />
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-70"></div>
        </div>

        {/* Right Column Text */}
        <div className="w-full lg:w-1/3 text-center lg:text-right">
          {heroData.heading.split(",").map((line, index) => (
            <h2
              key={index}
              className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              {line.trim()}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
