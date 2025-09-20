import React from "react";

const images = [
  "https://www.nishatlinenuae.com/cdn/shop/products/suit-42407085-_-waist-coat-42407053-_7_cd20e0a7-7da1-40fe-a67c-686efefcd7d6.jpg?v=1710832178&width=600",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThO32KwxWkS8juiNGAZRaranQGRd2sh_0huw&s",
  "https://cdn.shopify.com/s/files/1/1845/0661/files/img1_480x480.png?v=1682411198",
  "https://i.pinimg.com/736x/1a/9d/74/1a9d74383da1e27ca9a5510c9a219dea.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThO32KwxWkS8juiNGAZRaranQGRd2sh_0huw&s",
];

export default function FashionTailwindPro() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 font-sans text-gray-900 select-none">
      {/* Header */}
      <header className="flex justify-between items-center py-6 border-b border-gray-300 sticky top-0 bg-white z-50 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-wide text-indigo-900 cursor-pointer hover:text-indigo-700 transition">
          Fashion Hub
        </h1>
        <nav className="space-x-10 text-gray-700 font-semibold tracking-wide text-base">
          <a href="#products" className="hover:text-indigo-600 transition">Products</a>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative rounded-xl overflow-hidden mt-8"
        style={{ height: "520px" }}
      >
        <img
          src={images[0]}
          alt="Featured Fashion"
          className="absolute inset-0 w-full h-full object-cover filter brightness-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-indigo-700 to-transparent opacity-75"></div>

        <div className="relative z-10 flex flex-col justify-center h-full max-w-xl px-6 md:px-12 text-white">
          <h2 className="text-5xl font-extrabold leading-tight drop-shadow-lg mb-4">
            Elevate Your Style
          </h2>
          <p className="text-lg font-medium mb-8 drop-shadow-md">
            Discover exclusive collections crafted for the modern trendsetter.
          </p>
          <button
            className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-8 py-3 rounded-lg text-lg font-bold shadow-lg hover:scale-105 transform transition"
            aria-label="Shop Now"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20">
        <h3 className="text-4xl font-extrabold text-center text-indigo-900 mb-16 tracking-tight">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {images.slice(1).map((src, i) => (
            <div
              key={i}
              className="relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              {/* Badge */}
              {i === 0 && (
                <span className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow-md select-none">
                  New
                </span>
              )}
              {i === 1 && (
                <span className="absolute top-4 left-4 bg-yellow-400 text-gray-900 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow-md select-none">
                  Sale
                </span>
              )}
              <img
                src={src}
                alt={`Product ${i + 1}`}
                className="w-full h-60 object-cover rounded-t-xl"
                loading="lazy"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-2 text-indigo-900">
                  Product {i + 1}
                </h4>
                <p className="text-lg text-gray-700 mb-6">$99.99</p>
                <button
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-transform hover:scale-105"
                  aria-label={`Buy Product ${i + 1}`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-indigo-50 rounded-xl py-20 px-8 max-w-3xl mx-auto text-center shadow-inner"
      >
        <h3 className="text-4xl font-extrabold mb-6 text-indigo-900 tracking-tight">
          About Fashion Hub
        </h3>
        <p className="text-indigo-800 text-lg leading-relaxed max-w-xl mx-auto">
          At Fashion Hub, we believe style is an expression of personality.
          Our collections blend modern trends with timeless elegance.
          Quality craftsmanship and exclusive designs await you.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 max-w-lg mx-auto px-6"
      >
        <h3 className="text-4xl font-extrabold mb-12 text-center text-indigo-900">
          Get in Touch
        </h3>
        <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border border-indigo-300 rounded-lg px-5 py-3 text-indigo-900 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="border border-indigo-300 rounded-lg px-5 py-3 text-indigo-900 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="border border-indigo-300 rounded-lg px-5 py-3 text-indigo-900 placeholder-indigo-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-3 rounded-lg text-white font-extrabold text-lg hover:scale-105 transform transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-indigo-200 py-8 flex flex-col sm:flex-row justify-between items-center text-indigo-600 text-sm max-w-7xl mx-auto px-6">
        <p>© 2025 Fashion Hub. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          {/* Social Icons */}
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-indigo-800 transition"
            target="_blank" rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.8v-6.9H8v-2.9h2.5v-2.2c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.2c-1.2 0-1.5.7-1.5 1.5v1.9h2.6l-.4 2.9h-2.2v6.9A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-indigo-800 transition"
            target="_blank" rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.87-2.36 8.45 8.45 0 0 1-2.7 1.03 4.22 4.22 0 0 0-7.2 3.85 12 12 0 0 1-8.72-4.42 4.22 4.22 0 0 0 1.31 5.63 4.2 4.2 0 0 1-1.91-.53v.05a4.22 4.22 0 0 0 3.39 4.13 4.24 4.24 0 0 1-1.9.07 4.23 4.23 0 0 0 3.94 2.93A8.5 8.5 0 0 1 2 19.54 11.95 11.95 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0 0 22.46 6z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-indigo-800 transition"
            target="_blank" rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
