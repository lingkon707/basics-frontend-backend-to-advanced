"use client";
import React from "react";

const SimpleITLabHomepage = () => {
  const projects = [
    {
      title: "AI-powered Chatbot",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      desc: "AI chatbot improving customer support response times by 50%.",
      tag: "AI",
    },
    {
      title: "Robotics Automation",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      desc: "Autonomous robotics solutions for manufacturing.",
      tag: "Robotics",
    },
    {
      title: "IoT Smart Home System",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
      desc: "Smart home automation with IoT integration.",
      tag: "IoT",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto p-8 mb-20">
        <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-yellow-400 w-max pb-2">
          Our Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map(({ title, img, desc, tag }, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-500 transition-transform hover:scale-105 hover:-translate-y-1 duration-300 group"
            >
              {/* Tag */}
              <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                {tag}
              </span>

              {/* Image */}
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover rounded-t-xl group-hover:opacity-90 transition-opacity"
              />

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-yellow-400">{title}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
                <button className="mt-3 inline-block text-sm px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SimpleITLabHomepage;
