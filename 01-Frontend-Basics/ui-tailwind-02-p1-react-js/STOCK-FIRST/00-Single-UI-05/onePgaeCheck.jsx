// React + TailwindCSS Projects Showcase Landing Page UI Only

import React from "react";

const projects = [
  {
    title: "AI Chat Assistant",
    description: "A smart chatbot that integrates OpenAI for customer service.",
    image: "/images/project1.jpg",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal branding site for creative professionals.",
    image: "/images/project2.jpg",
    link: "#"
  },
  {
    title: "Fitness App",
    description: "Mobile-friendly app to track daily workouts and meals.",
    image: "/images/project3.jpg",
    link: "#"
  }
];

const testimonials = [
  {
    name: "Sarah Ahmed",
    quote: "The projects showcased here inspired me to start building my own!"
  },
  {
    name: "Jamal Uddin",
    quote: "Professional, clean, and very impressive work."
  }
];

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-blue-600">ProjectHub</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center">
          <h2 className="text-4xl font-bold mb-4">Showcasing Innovation Through Projects</h2>
          <p className="mb-6">Explore impactful solutions crafted with creativity and precision.</p>
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold">View Projects</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">🚀 Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow rounded-xl overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm mb-4">{project.description}</p>
                  <a href={project.link} className="text-blue-600 hover:underline font-medium">View Details →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-6">💡 About This Showcase</h3>
          <p className="text-gray-700 text-lg">
            This platform highlights innovative projects in tech, design, and development. With a focus on real-world impact, these projects represent skill, creativity, and passion.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">🌟 What People Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow text-left">
                <p className="text-gray-800 italic">“{t.quote}”</p>
                <p className="mt-4 font-semibold text-blue-600">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6">📬 Get in Touch</h3>
        <p className="mb-6 text-gray-700">Interested in collaborating or learning more?</p>
        <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700">
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 ProjectHub. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
