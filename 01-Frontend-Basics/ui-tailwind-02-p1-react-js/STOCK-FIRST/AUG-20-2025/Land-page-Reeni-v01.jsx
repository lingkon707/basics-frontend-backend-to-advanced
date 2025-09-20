import React, { useState } from "react";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen w-full bg-gray-100">
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-pink-500">Reeni</div>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#home" className="text-gray-600 hover:text-pink-500">Home</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-pink-500">About</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-pink-500">Services</a></li>
            <li><a href="#blog" className="text-gray-600 hover:text-pink-500">Blog</a></li>
            <li><a href="#project" className="text-gray-600 hover:text-pink-500">Project</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-pink-500">Contact</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-pink-500"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-600 hover:text-pink-500"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-600 hover:text-pink-500"><i className="fab fa-linkedin"></i></a>
        </div>
      </header>

      {/* Banner Image Section */}
      <div className="relative w-full h-72">
        <img
          src="https://inversweb.com/product/html/reeni/assets/images/projects-details/thumnail-img.png"
          alt="Project Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <main className="p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Supporting Health Initiatives</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>UI/Visual Design</li>
            <li>App Development</li>
            <li>Software Developer</li>
          </ul>
        </div>

        {/* Project Details Card */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">Project Details</h3>
          <div className="mt-4">
            <p><strong>Name:</strong> Hosting vps</p>
            <p><strong>Author:</strong> Nadimul Islam</p>
            <p><strong>Date:</strong> 23 January, 2024</p>
            <p><strong>Tags:</strong> Host, Web Design</p>
          </div>
        </div>

        {/* Modal Button to Show Modal (Placeholder) */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-8 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
        >
          Show Modal
        </button>
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
