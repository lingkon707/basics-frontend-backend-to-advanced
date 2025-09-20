import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <header className="flex justify-between items-center p-6">
        {/* Logo */}
        <div className="text-3xl font-bold text-pink-500">Reeni</div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-pink-400">Home</a></li>
            <li><a href="#features" className="hover:text-pink-400">Feature</a></li>
            <li><a href="#demos" className="hover:text-pink-400">All Demos</a></li>
            <li><a href="#faq" className="hover:text-pink-400">Faq's</a></li>
          </ul>
        </nav>

        {/* Buy Now Button */}
        <button className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-400">
          Buy Now
        </button>
      </header>

      {/* Categories Section */}
      <section className="px-6 py-12">
        <div className="flex flex-wrap justify-center space-x-6 space-y-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Designer</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Developer</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Illustrator</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Animator</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">3D+ Demos</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Trending</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Consultant</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">CV</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Card</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Service</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Appointment</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Blogger</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Real Estate Agent</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700">Translator</button>
        </div>
      </section>

      {/* Footer or Bottom Section */}
      <footer className="flex justify-center py-6">
        <div className="text-center text-sm text-gray-400">
          <p>&#169; 2025 Reeni Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
