import React from "react";

const projects = [
  {
    title: "Pixel Art Generator",
    description: "Create stunning pixel art from your photos.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "AI Chatbot",
    description: "Smart chatbot for customer support.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Fitness Tracker",
    description: "Track your workouts and progress.",
    image: "https://images.unsplash.com/photo-1554284126-3e9ec0a0eefa?auto=format&fit=crop&w=600&q=80",
  },
];

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-700 via-indigo-700 to-blue-600 text-white flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
        <div className="text-2xl font-bold tracking-wide">Creativa</div>
        <ul className="flex space-x-8 text-lg font-medium">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-purple-300 transition">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-grow px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Craft Your <span className="text-yellow-300">Creative</span> Future
        </h1>
        <p className="text-lg max-w-xl mb-8 drop-shadow-md">
          Build amazing projects, showcase your skills, and connect with the world.
        </p>
        <button className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition">
          Get Started
        </button>
      </header>

      {/* Projects Grid */}
      <section className="bg-white text-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {projects.map(({ title, description, image }) => (
              <div
                key={title}
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-gray-400">
          <p>© 2025 Creativa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { name: "Twitter", url: "#", icon: "🐦" },
              { name: "GitHub", url: "#", icon: "🐙" },
              { name: "LinkedIn", url: "#", icon: "🔗" },
            ].map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                className="text-2xl hover:text-yellow-400 transition"
                aria-label={name}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
