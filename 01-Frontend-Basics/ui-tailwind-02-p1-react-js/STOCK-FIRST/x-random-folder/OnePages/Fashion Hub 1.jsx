import React from "react";

const images = [
  "https://www.nishatlinenuae.com/cdn/shop/products/suit-42407085-_-waist-coat-42407053-_7_cd20e0a7-7da1-40fe-a67c-686efefcd7d6.jpg?v=1710832178&width=600",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThO32KwxWkS8juiNGAZRaranQGRd2sh_0huw&s",
  "https://cdn.shopify.com/s/files/1/1845/0661/files/img1_480x480.png?v=1682411198",
  "https://i.pinimg.com/736x/1a/9d/74/1a9d74383da1e27ca9a5510c9a219dea.jpg",
];

export default function FashionTailwind() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center py-6 border-b border-gray-200 sticky top-0 bg-white z-50">
        <h1 className="text-3xl font-bold">Fashion Hub</h1>
        <nav className="space-x-8 text-gray-600 font-semibold">
          <a href="#products" className="hover:text-gray-900 transition">Products</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 py-16">
        <img
          src={images[0]}
          alt="Featured Fashion"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-[500px]"
        />
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-extrabold">Elevate Your Style</h2>
          <p className="text-lg text-gray-600">
            Discover exclusive collections crafted for the modern trendsetter.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16">
        <h3 className="text-4xl font-bold text-center mb-12">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {images.slice(1).map((src, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-transform hover:scale-[1.03]"
            >
              <img
                src={src}
                alt={`Product ${i + 1}`}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h4 className="text-lg font-semibold mb-1">Product {i + 1}</h4>
              <p className="text-gray-500 mb-4">$99.99</p>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-gray-50 py-16 rounded-lg px-6 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-4xl font-bold mb-6">About Fashion Hub</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Fashion Hub, we believe style is an expression of personality.
          Our collections blend modern trends with timeless elegance.
          Quality craftsmanship and exclusive designs await you.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-16 max-w-lg mx-auto px-6"
      >
        <h3 className="text-4xl font-bold mb-10 text-center">Get in Touch</h3>
        <form
          className="flex flex-col space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white rounded-md py-3 text-lg font-semibold hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
        © 2025 Fashion Hub. All rights reserved.
      </footer>
    </div>
  );
}
