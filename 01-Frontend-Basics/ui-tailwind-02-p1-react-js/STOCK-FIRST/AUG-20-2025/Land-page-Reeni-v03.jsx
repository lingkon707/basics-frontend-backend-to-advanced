import React, { useState } from "react";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gray-100">
      {/* Header Section (Sticky) */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 p-4 flex items-center justify-between px-6 lg:px-16">
        <div className="text-3xl font-bold text-pink-600">Reeni</div>
        <nav>
          <ul className="hidden lg:flex space-x-8 text-lg text-gray-700">
            <li><a href="#home" className="hover:text-pink-600">Home</a></li>
            <li><a href="#about" className="hover:text-pink-600">About</a></li>
            <li><a href="#services" className="hover:text-pink-600">Services</a></li>
            <li><a href="#projects" className="hover:text-pink-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
          </ul>
        </nav>
        <button
          onClick={() => setShowModal(true)}
          className="lg:hidden bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700"
        >
          Show Modal
        </button>
      </header>

      {/* Hero Section */}
      <section
        className="w-full h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://www.fruitsmith.com/pub/media/wysiwyg/Orange.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              Empowering Health Initiatives
            </h1>
            <p className="text-lg mb-8">
              Join us in making a difference. We provide top-notch services to
              support health projects globally.
            </p>
            <button className="bg-pink-600 py-2 px-6 text-white rounded-md hover:bg-pink-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-16 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          About Our Mission
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We aim to make impactful changes in the healthcare sector by providing
          innovative solutions and collaborating with like-minded individuals and
          organizations to make healthcare more accessible.
        </p>
        <button className="bg-pink-600 py-2 px-6 text-white rounded-md hover:bg-pink-700 transition duration-300">
          Read More
        </button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-6 lg:px-16">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Our Latest Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="https://tonsvalley.shop/wp-content/uploads/2024/05/apple-wax.jpg"
              alt="Project"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Project Title
            </h3>
            <p className="text-gray-600">
              Short description of the project. This is a sample text to show
              the project summary.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="https://www.tastingtable.com/img/gallery/how-to-easily-pick-out-a-pound-of-apples-without-a-scale/intro-1663952215.jpg"
              alt="Project"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Project Title
            </h3>
            <p className="text-gray-600">
              Short description of the project. This is a sample text to show
              the project summary.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="https://www.tastingtable.com/img/gallery/how-to-easily-pick-out-a-pound-of-apples-without-a-scale/intro-1663952215.jpg"
              alt="Project"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Project Title
            </h3>
            <p className="text-gray-600">
              Short description of the project. This is a sample text to show
              the project summary.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-20 bg-pink-600 text-white text-center">
        <h2 className="text-4xl font-semibold mb-6">Get Involved</h2>
        <p className="text-lg mb-8">
          Join us today in making a positive change. Fill out the form to get
          started.
        </p>
        <button className="bg-white text-pink-600 py-2 px-6 rounded-md hover:bg-pink-100 transition duration-300">
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-white text-center">
        <p>&copy; 2025 Reeni. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:text-pink-600">Facebook</a>
          <a href="#" className="hover:text-pink-600">Twitter</a>
          <a href="#" className="hover:text-pink-600">LinkedIn</a>
        </div>
      </footer>

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
