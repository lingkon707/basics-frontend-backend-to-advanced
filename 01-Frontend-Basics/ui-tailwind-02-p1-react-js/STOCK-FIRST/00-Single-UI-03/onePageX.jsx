import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 md:px-16 py-4 border-b">
        <h1 className="text-2xl font-bold text-green-700">
          metro<span className="text-green-500">∞</span>pinion
        </h1>
        <nav className="hidden md:flex space-x-6 text-gray-700 text-sm font-medium">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#">About us</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
          <a href="#">About surveys</a>
          <a href="#">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Text Content */}
        <div className="bg-gradient-to-br from-green-600 to-green-400 p-10 md:p-16 text-white h-full">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug text-white mb-4">
            Paid surveys: Earn<br />
            money online,<br />
            <span className="text-white font-bold">Work From Home</span>
          </h2>
          <p className="text-sm text-white mb-6 font-medium">
            Get up to $5 for each survey
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition">
            START HERE !
          </button>
        </div>

        {/* Right Image */}
        <div className="h-full">
          <img
            src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg"
            alt="Woman working"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
