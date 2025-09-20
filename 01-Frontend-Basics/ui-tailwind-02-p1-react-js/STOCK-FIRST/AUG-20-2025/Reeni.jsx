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

      {/* Statistics Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
        {/* Each Statistic Box */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="text-red-500 text-4xl mb-3">
            <i className="fas fa-laptop-code"></i>
          </div>
          <h3 className="font-semibold text-lg mb-2">Web Design</h3>
          <p className="text-gray-600">120 Projects</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="text-red-500 text-4xl mb-3">
            <i className="fas fa-cogs"></i>
          </div>
          <h3 className="font-semibold text-lg mb-2">Ui/Ux Design</h3>
          <p className="text-gray-600">241 Projects</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="text-red-500 text-4xl mb-3">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 className="font-semibold text-lg mb-2">Web Research</h3>
          <p className="text-gray-600">240 Projects</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transform transition duration-300 ease-in-out">
          <div className="text-red-500 text-4xl mb-3">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3 className="font-semibold text-lg mb-2">Marketing</h3>
          <p className="text-gray-600">331 Projects</p>
        </div>
      </section>

      {/* Experience & Project Completion Section */}
      <section className="bg-red-500 p-12 text-white text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold mb-3">0</h3>
            <p className="text-lg">Years Of Experience</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold mb-3">20k+</h3>
            <p className="text-lg">Our Project Complete</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold mb-3">10k+</h3>
            <p className="text-lg">Our Natural Products</p>
          </div>
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
