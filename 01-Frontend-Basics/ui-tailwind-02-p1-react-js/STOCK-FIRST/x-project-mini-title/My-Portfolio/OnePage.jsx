"use client";
import React from "react";

const FeatureRichProfile = () => {
  const images = [
    "https://thumbs.dreamstime.com/b/arabian-religious-muslim-man-isolated-36430232.jpg",
    "https://blog.al-islam.org/wp-content/uploads/2019/09/5n67Yz7FlFoIus06VmIC.png",
    "https://ellow.io/wp-content/uploads/2024/07/Coders-vs.-Programmers-1024x536.webp",
    "https://blog.hyperiondev.com/wp-content/uploads/2021/01/Web-dev-cover.jpg",
  ];

  const features = [
    {
      title: "Clean Code",
      description:
        "Writing maintainable, readable, and efficient code to build scalable applications.",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
    },
    {
      title: "Responsive Design",
      description:
        "Ensuring seamless user experience on all devices, from mobiles to desktops.",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" ry="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v.01" />
        </svg>
      ),
    },
    {
      title: "Modern Tech Stack",
      description:
        "Expertise in React, Next.js, Tailwind CSS, TypeScript, and version control with Git.",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: "User Focused",
      description:
        "Building intuitive interfaces focused on user needs and accessibility.",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-10">
      <div className="max-w-7xl mx-auto bg-black/70 backdrop-blur-md rounded-3xl p-12 shadow-xl">

        {/* Hero Section */}
        <section className="md:flex md:items-center md:space-x-12 mb-16">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src="https://blog.hyperiondev.com/wp-content/uploads/2021/01/Web-dev-cover.jpg"
              alt="Limon Islam"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-5xl font-extrabold mb-4">Limon Islam</h1>
            <p className="text-yellow-400 text-2xl font-semibold mb-6">Frontend Developer</p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Passionate about crafting scalable, maintainable frontend applications using the latest technologies.
              Experienced in React, Next.js, Tailwind CSS, and TypeScript. I focus on delivering beautiful UI with exceptional user experience.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-10 border-b-4 border-yellow-400 w-max pb-2">
            Core Features
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {features.map(({ title, description, icon }, idx) => (
              <div
                key={idx}
                className="bg-white/10 rounded-xl p-6 flex flex-col items-center text-center hover:bg-yellow-400 hover:text-black cursor-default transition"
              >
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Image Grid Section */}
        <section>
          <h2 className="text-4xl font-bold mb-10 border-b-4 border-yellow-400 w-max pb-2">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform">
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact Button */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-4 rounded-full shadow-lg transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureRichProfile;
