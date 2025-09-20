// app/Limon.tsx or pages/Limon.tsx
import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Portable Speaker",
    price: "$79",
    img: "https://via.placeholder.com/150",
  },
];

const portfolioItems = [
  { id: 1, title: "Project One", img: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Project Two", img: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Project Three", img: "https://via.placeholder.com/300x200" },
  { id: 4, title: "Project Four", img: "https://via.placeholder.com/300x200" },
];

export default function Limon() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20 font-sans text-gray-800">
      {/* 1. CTA Section */}
      <section className="bg-indigo-600 text-white rounded-lg p-12 flex flex-col items-center space-y-6 text-center">
        <h1 className="text-4xl font-bold max-w-3xl">
          Ready to transform your business? Let's get started today!
        </h1>
        <p className="max-w-xl text-lg">
          Join thousands of happy customers who have boosted their sales with our solutions.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-indigo-600 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* 2. Long-form Content Section */}
      <section className="prose max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">How to Stay Productive Working From Home</h2>
        <p>
          Working from home offers flexibility but also presents challenges to productivity. To
          maintain focus, create a dedicated workspace that is free from distractions. Set regular
          work hours and take breaks to recharge.
        </p>
        <p>
          Use tools and apps that help you manage your tasks efficiently. Remember to communicate
          regularly with your team to stay connected.
        </p>
        <h3>Key Tips:</h3>
        <ul>
          <li>Designate a quiet, organized workspace</li>
          <li>Stick to a consistent daily schedule</li>
          <li>Prioritize tasks with to-do lists</li>
          <li>Limit social media during work hours</li>
          <li>Take short breaks every hour</li>
        </ul>
        <p>
          By following these tips, you can maintain productivity and enjoy the benefits of remote
          work.
        </p>
      </section>

      {/* 3. Ecommerce Products Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map(({ id, name, price, img }) => (
            <div
              key={id}
              className="border rounded-lg shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center"
            >
              <img src={img} alt={name} className="mb-4 w-40 h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-indigo-600 font-bold mb-4">{price}</p>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact Page Section */}
      <section className="max-w-3xl mx-auto bg-gray-50 p-10 rounded-lg shadow">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-indigo-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-indigo-500"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-indigo-500"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded w-full hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 flex justify-center space-x-8 text-indigo-600">
          <a href="#" aria-label="Facebook" className="hover:text-indigo-800 transition text-2xl">
            <i className="fab fa-facebook-f">F</i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-indigo-800 transition text-2xl">
            <i className="fab fa-twitter">T</i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-indigo-800 transition text-2xl">
            <i className="fab fa-linkedin-in">L</i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-indigo-800 transition text-2xl">
            <i className="fab fa-instagram">I</i>
          </a>
        </div>
      </section>

      {/* 5. Portfolio Grid Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">My Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map(({ id, title, img }) => (
            <div
              key={id}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            >
              <img src={img} alt={title} className="w-full h-40 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
