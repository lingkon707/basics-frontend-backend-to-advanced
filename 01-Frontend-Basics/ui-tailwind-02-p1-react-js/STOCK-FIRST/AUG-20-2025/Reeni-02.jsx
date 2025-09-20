import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Bar */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-3xl font-bold text-red-500">Reeni</div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-800 hover:text-red-500">Home</a>
          <a href="#about" className="text-gray-800 hover:text-red-500">About</a>
          <a href="#services" className="text-gray-800 hover:text-red-500">Services</a>
          <a href="#blog" className="text-gray-800 hover:text-red-500">Blog</a>
          <a href="#project" className="text-gray-800 hover:text-red-500">Project</a>
          <a href="#contact" className="text-gray-800 hover:text-red-500">Contact</a>
        </nav>
        <div className="md:hidden">
          {/* Hamburger Menu */}
          <button className="text-gray-800">☰</button>
        </div>
      </header>

      {/* Main Section with Numbered Blocks */}
      <section className="py-16 px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Portfolio Section */}
          <div className="relative bg-white p-6 rounded-lg shadow-xl border-l-4 border-red-500">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">01. A Portfolio of Creativity</h3>
            <p className="text-gray-600">
              Business consulting consultants provide expert advice and guide businesses to help them improve performance efficiency.
            </p>
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-red-500 rounded-full"></div>
          </div>

          {/* Innovation Section */}
          <div className="relative bg-white p-6 rounded-lg shadow-xl border-l-4 border-red-500">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">02. My Portfolio of Innovation</h3>
            <p className="text-gray-600">
              My work is driven by the belief that thoughtful design and strategic planning can empower brands and transform businesses.
            </p>
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-red-500 rounded-full"></div>
          </div>

          {/* Projects Section */}
          <div className="relative bg-white p-6 rounded-lg shadow-xl border-l-4 border-red-500">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">03. A Showcase of My Projects</h3>
            <p className="text-gray-600">
              In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design].
            </p>
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Right Image Section */}
      <section className="relative w-full h-80 bg-gray-300 flex justify-center items-center">
        <div className="absolute right-0 top-0 bg-red-500 rounded-full w-32 h-32 -mr-10 -mt-10"></div>
        <div className="absolute right-0 top-0 bg-white w-40 h-40 rounded-full -mr-12 -mt-12"></div>
        <div className="relative z-10">
          <img src="https://via.placeholder.com/400x500" alt="Person" className="w-72 h-auto rounded-full" />
        </div>
      </section>

      {/* Footer (Optional) */}
      <footer className="p-6 text-center text-gray-600 bg-gray-200">
        <p>&#169; 2025 Reeni Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
