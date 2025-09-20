import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    img: "https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    img: "https://www.pranfoods.net/sites/default/files/styles/large/public/cheera-358x358px.png.webp?itok=6b2ZfqaU",
  },
  {
    id: 3,
    name: "Portable Speaker",
    price: "$79",
    img: "https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg",
  },
];

const portfolioItems = [
  { id: 1, title: "Project One", img: "https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg" },
  { id: 2, title: "Project Two", img: "https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg" },
  { id: 3, title: "Project Three", img: "https://www.pranfoods.net/sites/default/files/styles/large/public/cheera-358x358px.png.webp?itok=6b2ZfqaU" },
  { id: 4, title: "Project Four", img: "https://www.pranfoods.net/sites/default/files/styles/large/public/cheera-358x358px.png.webp?itok=6b2ZfqaU" },
];

export default function Limon() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24 font-sans text-gray-800">

      {/* 1. CTA Section with subtle bg gradient */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-600 text-white rounded-lg p-14 flex flex-col items-center space-y-8 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-4xl leading-tight">
          Ready to transform your business? Let's get started today!
        </h1>
        <p className="max-w-3xl text-lg md:text-xl opacity-90">
          Join thousands of happy customers who have boosted their sales with our solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <button className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded shadow hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="border border-white px-8 py-4 rounded hover:bg-white hover:text-indigo-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* 2. Long-form Content + Image for visual break */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="prose max-w-xl">
          <h2 className="text-3xl font-semibold mb-6">How to Stay Productive Working From Home</h2>
          <p>
            Working from home offers flexibility but also presents challenges to productivity. To
            maintain focus, create a dedicated workspace that is free from distractions. Set regular
            work hours and take breaks to recharge.
          </p>
          <ul className="list-disc list-inside space-y-2">
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
        </div>
        <img
          src="https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg"
          alt="Productivity Working From Home"
          className="rounded-lg shadow-lg max-w-md w-full object-cover"
          loading="lazy"
        />
      </section>

      {/* 3. Ecommerce Products + Image to build trust */}
      <section className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Products</h2>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          {/* Image left */}
          <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img
              src="https://www.pranfoods.net/sites/default/files/styles/large/public/cheera-358x358px.png.webp?itok=6b2ZfqaU"
              alt="High quality products"
              className="rounded-xl shadow-lg object-contain w-72"
              loading="lazy"
            />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            {products.map(({ id, name, price, img }) => (
              <div
                key={id}
                className="border rounded-lg shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center"
              >
                <img
                  src={img}
                  alt={name}
                  className="mb-4 w-40 h-40 object-cover rounded-md"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-indigo-600 font-bold mb-4">{price}</p>
                <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Section with real SVG social icons */}
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
        <div className="mt-8 flex justify-center space-x-10 text-indigo-600">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="hover:text-indigo-800 transition" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.466h-1.26c-1.243 0-1.63.77-1.63 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          {/* Twitter */}
          <a href="#" aria-label="Twitter" className="hover:text-indigo-800 transition" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.03 9.03 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.69 4.13 12.83 12.83 0 0 1-9.3-4.7 4.49 4.49 0 0 0 1.39 6.04 4.48 4.48 0 0 1-2.04-.56v.06a4.52 4.52 0 0 0 3.63 4.42 4.52 4.52 0 0 1-2.03.08 4.52 4.52 0 0 0 4.21 3.13 9.07 9.07 0 0 1-5.6 1.93A9.29 9.29 0 0 1 1 19.54 12.79 12.79 0 0 0 7 21c8.3 0 12.85-6.87 12.85-12.83 0-.2 0-.39-.01-.58A9.18 9.18 0 0 0 23 3z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="hover:text-indigo-800 transition" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6zM6 9h4v12H6zM8 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="hover:text-indigo-800 transition" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-4.74-4.74 4 4 0 0 1 4.74 4.74z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </section>

      {/* 5. Portfolio Grid Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-10 text-center">My Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map(({ id, title, img }) => (
            <div
              key={id}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img src={img} alt={title} className="w-full h-40 object-cover" loading="lazy" />
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
