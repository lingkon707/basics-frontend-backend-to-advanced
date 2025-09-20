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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThO32KwxWkS8juiNGAZRaranQGRd2sh_0huw&s",
      desc: "Autonomous robotics solutions for manufacturing.",
      tag: "Robotics",
    },
    {
      title: "IoT Smart Home System",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
      desc: "Smart home automation with IoT integration.",
      tag: "IoT",
    }
    
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">

      <br />
      <br />
      <br />
      



      <section id="projects" className="max-w-7xl mx-auto p-8 mb-20">
       

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map(({ title, img, tag }, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-500 transition-transform hover:scale-105 hover:-translate-y-1 duration-300 group"
            >
             
              <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                {tag}
              </span>

              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover rounded-t-xl group-hover:opacity-90 transition-opacity"
              />
       
            </div>
          ))}
        </div>
      </section>






    </div>
  );
};

export default SimpleITLabHomepage;
