import React, { useState } from "react";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative h-screen w-full bg-gray-100">
      {/* Header Section with Fixed Position */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 grid grid-cols-3 items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-500">Reeni</div>
        
        {/* Navbar */}
        <nav>
          <ul className="flex justify-center space-x-6 text-lg">
            <li><a href="#home" className="text-gray-600 hover:text-pink-500">Home</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-pink-500">About</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-pink-500">Services</a></li>
            <li><a href="#blog" className="text-gray-600 hover:text-pink-500">Blog</a></li>
            <li><a href="#project" className="text-gray-600 hover:text-pink-500">Project</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-pink-500">Contact</a></li>
          </ul>
        </nav>

        {/* Modal Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
          >
            Show Modal
          </button>
        </div>
      </header>

      {/* Banner Image Section with Increased Height */}
      <div className="relative w-full h-[500px] mt-24"> {/* Increased height of the image */}
        <img
          src="https://inversweb.com/product/html/reeni/assets/images/projects-details/thumnail-img.png"
          alt="Project Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section with Grid Layout (2 Columns) */}
      <main className="pt-36 p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Content Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Supporting Health Initiatives</h1>
          <p className="text-lg text-gray-700 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>UI/Visual Design</li>
            <li>App Development</li>
            <li>Software Developer</li>
          </ul>
        </div>

        {/* Right Project Details Card with Hover Shadow */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">Project Details</h3>
          <div className="mt-4">
            <p><strong>Name:</strong> Hosting vps</p>
            <p><strong>Author:</strong> Nadimul Islam</p>
            <p><strong>Date:</strong> 23 January, 2024</p>
            <p><strong>Tags:</strong> Host, Web Design</p>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-gray-800">Modal Title</h2>
            <p className="text-gray-700 mt-4">
              This is a sample modal. You can place your modal content here.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
