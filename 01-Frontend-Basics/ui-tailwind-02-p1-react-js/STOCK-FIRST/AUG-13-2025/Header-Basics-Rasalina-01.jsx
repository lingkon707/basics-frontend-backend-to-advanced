import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans relative overflow-hidden">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-16 py-6 border-b border-gray-200">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span className="text-yellow-500 text-3xl mr-1">R</span>
          <span>Rasalina</span>
        </div>

        {/* Navigation */}
        <nav className="space-x-8 text-sm font-medium hidden md:flex">
          <a href="#" className="hover:text-yellow-500">HOME</a>
          <a href="#" className="hover:text-yellow-500">ABOUT</a>
          <a href="#" className="hover:text-yellow-500">PORTFOLIO</a>
          <a href="#" className="hover:text-yellow-500">SERVICES</a>
          <a href="#" className="hover:text-yellow-500">BLOG</a>
          <a href="#" className="hover:text-yellow-500">CONTACT</a>
        </nav>

        {/* Contact Button */}
        <button className="bg-blue-600 text-white px-5 py-2 text-sm rounded hover:bg-blue-700 transition">
          CONTACT ME
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-16 py-20">
        {/* Left Content */}
        <div className="md:w-1/2 text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight font-serif">
            I will give you <span className="underline decoration-yellow-400">Best</span><br />
            Product in the <br />
            shortest time.
          </h1>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2018/08/18/16/23/indian-man-3615047_1280.jpg"
            alt="Profile"
            className="w-[400px] h-auto object-cover rounded-md"
          />
        </div>
      </section>

      {/* Theme Toggle (UI only) */}
      <div className="fixed right-5 bottom-5 text-xs font-semibold uppercase tracking-wide flex items-center gap-2">
        <span>Light</span>
        <div className="w-10 h-5 bg-gray-300 rounded-full relative">
          <div className="w-5 h-5 bg-white rounded-full absolute left-0 top-0 shadow-md"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
