import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Organic Wheat Seeds',
    category: 'Seeds',
    description: 'High-yield, organic wheat seeds.',
    price: '₹500',
    image: 'https://4.imimg.com/data4/VB/JI/MY-22345174/natural-agro-products.png',
  },
  {
    id: 2,
    name: 'Natural Fertilizer',
    category: 'Fertilizers',
    description: 'Eco-friendly organic fertilizer.',
    price: '₹800',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/4/500041379/OV/PL/BD/139021501/agro-products.jpg',
  },
  {
    id: 3,
    name: 'Hand Tools Kit',
    category: 'Equipment',
    description: 'Essential tools for modern farming.',
    price: '₹1500',
    image: 'https://www.janathaagro.com/cdn/shop/files/1200x400_copy.jpg?v=1718696048&width=3840',
  },
];

const categories = ['All', 'Seeds', 'Fertilizers', 'Equipment'];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-green-700">AgroBusiness</h1>
          <nav className="space-x-4 hidden md:block">
            <a href="#about" className="hover:text-green-600">About</a>
            <a href="#products" className="hover:text-green-600">Products</a>
            <a href="#services" className="hover:text-green-600">Services</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://www.shyamgroup.org/images/slider/slider3.jpg"
          alt="Hero"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-4xl font-bold mb-2">Empowering Agriculture, Naturally</h2>
          <p className="mb-4">Delivering high-quality products and services to farmers across India.</p>
          <div className="space-x-4">
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Shop Now</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">Learn More</button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto py-12 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-6">Featured Products</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold">{product.name}</h4>
                <p className="text-sm mt-1">{product.description}</p>
                <p className="text-green-700 mt-2 font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Listing */}
      <section id="products" className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">Our Products</h3>
          <div className="flex justify-center mb-6 space-x-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === cat
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-green-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="mt-2 text-green-700 font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white text-center px-4">
        <h3 className="text-3xl font-semibold mb-8">What Our Customers Say</h3>
        <div className="max-w-4xl mx-auto space-y-8">
          <blockquote className="text-lg italic">“AgroBusiness helped me increase my crop yield with their premium seeds and expert advice.” – Ramesh K.</blockquote>
          <blockquote className="text-lg italic">“Their fertilizer is the best I’ve used. My farm has never looked better!” – Priya S.</blockquote>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="bg-green-50 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-4">About Us</h3>
            <p>
              AgroBusiness was founded with a mission to support Indian farmers by providing quality agricultural inputs and services.
              We have helped over 10,000+ farmers nationwide.
            </p>
            <ul className="mt-4 list-disc list-inside text-green-700">
              <li>Established in 2010</li>
              <li>10,000+ Customers Served</li>
              <li>ISO Certified Products</li>
            </ul>
          </div>
          <img
            src="https://www.arpitaagro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-02-at-4.45.21-PM.jpeg"
            alt="About Us"
            className="rounded shadow"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-8">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-lg mb-2">Consultation</h4>
              <p>Expert advice for crop planning, fertilizers, and pest control.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-lg mb-2">Delivery</h4>
              <p>Fast delivery of seeds, fertilizers, and tools to your farm.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-lg mb-2">Training</h4>
              <p>Workshops and training programs to improve farming practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">Contact Us</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
              <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded"></textarea>
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Send Message</button>
            </form>
            <div className="space-y-4">
              <p><strong>Address:</strong> 123 Agro Street, Village, India</p>
              <p><strong>Phone:</strong> +91-9876543210</p>
              <p><strong>Email:</strong> contact@agrobusiness.in</p>
              <img src="https://via.placeholder.com/600x300?text=Google+Map+Placeholder" alt="Map" className="rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4">
        © 2025 AgroBusiness. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
