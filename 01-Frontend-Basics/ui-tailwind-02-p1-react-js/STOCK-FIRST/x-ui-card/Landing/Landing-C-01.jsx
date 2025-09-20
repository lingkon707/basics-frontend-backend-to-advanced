import React from "react";

const logos = [
  { name: "XBOX", src: "https://upload.wikimedia.org/wikipedia/commons/4/43/Xbox_logo_%282019%29.svg", alt: "Xbox" },
  { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
  { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },
  { name: "Slack", src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png", alt: "Slack" },
  { name: "ESL", src: "https://upload.wikimedia.org/wikipedia/commons/5/55/ESL_Logo.svg", alt: "ESL" },
  { name: "Walmart", src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg", alt: "Walmart" },
];

const services = [
  { title: "Metaverse Marketing", icon: "▲", desc: "Strategic campaigns to build your metaverse presence." },
  { title: "Web3 Integration", icon: "▶", desc: "Seamless integration with blockchain and Web3 tech." },
  { title: "Growth Strategy", icon: "↻", desc: "Tailored growth plans for lasting impact." },
];

export default function MetaverseLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white font-sans">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6">
        <div className="text-xl font-bold tracking-widest">THE HIGHLY CHARGED</div>
        <ul className="hidden md:flex space-x-8 text-sm">
          <li className="hover:text-purple-400 cursor-pointer">About Us</li>
          <li className="hover:text-purple-400 cursor-pointer">Case Studies</li>
          <li className="hover:text-purple-400 cursor-pointer">Why Metaverse</li>
          <li className="hover:text-purple-400 cursor-pointer">Services</li>
        </ul>
        <button className="hidden md:inline bg-gradient-to-r from-yellow-400 to-pink-500 px-5 py-2 rounded-full text-indigo-900 font-semibold hover:brightness-110 transition">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:justify-between gap-12 py-20">
        {/* Text */}
        <div className="flex flex-col max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Unleash Your <br />
            Potential with the <br />
            <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-400">Metaverse</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            We help brands unlock their full potential in the Metaverse and Web3 by providing expert guidance and tailored
            strategies for leveraging these exciting new technologies.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-indigo-900 px-6 py-2 rounded-full font-semibold hover:brightness-110 transition">
              Book a call
            </button>
            <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-700 transition">
              See examples
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-lg">
          <img
            src="/mnt/data/o6xbhcys8098n431syla.jpg"
            alt="Man with VR headset"
            className="rounded-xl shadow-lg"
          />
          {/* Triangles */}
          <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-tr-lg rotate-[45deg] opacity-80"></div>
          <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-bl-lg rotate-[25deg] opacity-70"></div>
        </div>
      </section>

      {/* Logos */}
      <section className="max-w-7xl mx-auto flex justify-center gap-12 px-6 py-10 opacity-70">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.alt}
            className="h-8 w-auto grayscale hover:grayscale-0 transition cursor-pointer"
          />
        ))}
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-center text-xl font-semibold mb-10">Build Your Brand's Metaverse</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center bg-indigo-800 rounded-lg p-8 max-w-xs mx-auto text-center shadow-lg hover:shadow-purple-600 transition"
            >
              <div className="text-4xl mb-6 text-purple-400">{service.icon}</div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
