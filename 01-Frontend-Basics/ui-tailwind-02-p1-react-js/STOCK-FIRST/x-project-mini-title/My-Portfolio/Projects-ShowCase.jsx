"use client";
import React from "react";


const SimpleITLabHomepage = () => {
  

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
     
     
      <section
        id="projects"
        className="max-w-7xl mx-auto p-8 mb-16"
      >
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-yellow-400 w-max pb-2">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-powered Chatbot",
              img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
              desc: "AI chatbot improving customer support response times by 50%.",
            },
            {
              title: "Robotics Automation",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
              desc: "Autonomous robotics solutions for manufacturing.",
            },
            {
              title: "IoT Smart Home System",
              img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
              desc: "Smart home automation with IoT integration.",
            },
          ].map(({ title, img, desc }, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400 transition-shadow duration-500 cursor-pointer"
            >
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-yellow-400">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default SimpleITLabHomepage;
