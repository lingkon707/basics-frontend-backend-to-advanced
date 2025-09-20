import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center border-l-4 border-teal-500 px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to Our Amazing Service
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We're here to help you achieve your goals with ease. Join thousands of happy customers today!
        </p>
        <button className="bg-teal-600 text-white text-xl font-medium py-3 px-8 rounded-lg hover:bg-teal-700 transition-all">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 text-center border-l-4 border-teal-500">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Feature 1</h3>
            <p className="text-gray-600">Description of the first feature. It’s designed to help you streamline your process.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Feature 2</h3>
            <p className="text-gray-600">Description of the second feature. It’s easy to use and powerful for your business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Feature 3</h3>
            <p className="text-gray-600">Description of the third feature. It’s optimized to increase your productivity.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 text-center border-l-4 border-teal-500">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our mission is to provide the best service to our customers with a focus on innovation and excellence. We believe in simplicity, efficiency, and a personal approach.
        </p>
        <button className="bg-teal-600 text-white text-xl font-medium py-3 px-8 rounded-lg hover:bg-teal-700 transition-all">
          Learn More
        </button>
      </section>

      {/* Footer Section */}
      <footer className="py-8 px-8 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Our Company. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="/contact" className="text-teal-500 hover:text-teal-400">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
