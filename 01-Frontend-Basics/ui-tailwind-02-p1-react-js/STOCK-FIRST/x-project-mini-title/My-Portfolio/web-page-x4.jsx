"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    caption: "Cutting-edge hardware prototyping",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    caption: "Innovative AI research in progress",
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    caption: "Hands-on IoT workshops & bootcamps",
  },
];

const SimpleITLabHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto p-6">
        <div className="text-yellow-400 font-bold text-2xl">IT-Lab</div>
        <div className="space-x-8 hidden md:flex">
          {["About", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-[450px] max-w-7xl mx-auto overflow-hidden rounded-lg mb-16">
        <img
          src={slides[currentSlide].img}
          alt="IT Lab banner"
          className="w-full h-full object-cover brightness-75 transition-opacity duration-700"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
            Empowering Innovation Through Technology
          </h1>
          <p className="max-w-3xl text-lg text-gray-200 mb-8 drop-shadow">
            Leading the future with advanced IT solutions, research, and community.
          </p>
          <div className="space-x-6">
            <a
              href="#contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="text-yellow-400 underline font-semibold hover:text-yellow-300 transition"
            >
              Explore Services
            </a>
          </div>
          <p className="mt-6 italic text-gray-300 drop-shadow-sm">
            {slides[currentSlide].caption}
          </p>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        className="max-w-7xl mx-auto p-8 mb-16"
      >
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-yellow-400 w-max pb-2">
          About Us
        </h2>
        <p className="max-w-4xl text-gray-300 leading-relaxed">
          IT-Lab is dedicated to pushing technology forward through innovation, research, and education. Our team of experts develops state-of-the-art solutions and nurtures the next generation of tech professionals.
        </p>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-gray-800 py-12 px-8 max-w-7xl mx-auto rounded-lg mb-16"
      >
        <h2 className="text-4xl font-bold mb-10 border-b border-yellow-400 w-max pb-2">
          Our Services
        </h2>
        <ul className="grid md:grid-cols-3 gap-8 text-gray-300">
          <li>
            <h3 className="font-semibold text-xl mb-2">Software Development</h3>
            <p>Custom applications, scalable full-stack solutions tailored for your business.</p>
          </li>
          <li>
            <h3 className="font-semibold text-xl mb-2">Hardware & IoT</h3>
            <p>Rapid prototyping, device creation, and IoT integration services.</p>
          </li>
          <li>
            <h3 className="font-semibold text-xl mb-2">AI & Research</h3>
            <p>Advanced AI research, machine learning models, and data innovation projects.</p>
          </li>
        </ul>
      </section>

      {/* Projects */}
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

      {/* Contact Us */}
      <section
        id="contact"
        className="max-w-7xl mx-auto p-8 mb-24"
      >
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-yellow-400 w-max pb-2">
          Contact Us
        </h2>

       <form className="max-w-3xl mx-auto space-y-6 text-gray-100">
  <label className="block">
    <span className="text-yellow-400 font-semibold mb-1 block">Inquiry Type</span>
    <select className="w-full rounded border border-gray-300 p-3 text-gray-900 bg-white">
      <option>General</option>
      <option>Partnership</option>
      <option>Support</option>
    </select>
  </label>
  <label className="block">
    <span className="text-yellow-400 font-semibold mb-1 block">Your Email</span>
    <input
      type="email"
      placeholder="you@example.com"
      className="w-full rounded border border-gray-300 p-3 text-gray-900 bg-white"
    />
  </label>
  <label className="block">
    <span className="text-yellow-400 font-semibold mb-1 block">Message</span>
    <textarea
      rows={5}
      className="w-full rounded border border-gray-300 p-3 text-gray-900 bg-white"
      placeholder="Write your message here..."
    ></textarea>
  </label>
  <button
    type="submit"
    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-3 rounded transition"
  >
    Send Message
  </button>
</form>



        <div className="mt-10 max-w-3xl mx-auto text-gray-300 text-center">
          <p>📍 123 Innovation Drive, Tech City, Country</p>
          <p>📞 +123 456 7890 | ✉ contact@it-lab.com</p>
          <p>Follow us on social media for the latest updates.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 py-8 text-center">
        &copy; {new Date().getFullYear()} IT-Lab. All rights reserved.
      </footer>
    </div>
  );
};

export default SimpleITLabHomepage;
