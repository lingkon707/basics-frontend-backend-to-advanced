import React, { useState, useEffect } from "react";

const testimonialsData = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    title: "Alex Johnson",
    text: "Working with this team has been a transformative experience. Their dedication and talent are unmatched.",
    category: "design",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    title: "Emily Carter",
    text: "Absolutely brilliant! Their work speaks volumes about their expertise and attention to detail.",
    category: "development",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    title: "Michael Smith",
    text: "Professional, timely, and creative – I couldn't have asked for a better collaboration.",
    category: "marketing",
  },
  {
    id: 4,
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    title: "Sophia Lee",
    text: "From concept to completion, they delivered excellence. Highly recommended!",
    category: "design",
  },
  {
    id: 5,
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    title: "David Kim",
    text: "Their innovative approach set them apart. They truly understand user-centric design.",
    category: "development",
  },
];

const categories = ["all", "design", "development", "marketing"];

export default function App() {
  const [filter, setFilter] = useState("all");
  const [activeModal, setActiveModal] = useState(null);

  const filteredTestimonials =
    filter === "all"
      ? testimonialsData
      : testimonialsData.filter((t) => t.category === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-gray-800">Testimonials</h1>
        <p className="text-gray-600 text-lg">Hear what our clients say about us</p>
      </header>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full font-medium shadow transition-transform duration-200 transform hover:scale-105 ${
              filter === cat
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-blue-50"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-xl rounded-xl p-6 cursor-pointer hover:shadow-2xl transition group"
            onClick={() => setActiveModal(testimonial)}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.title}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 group-hover:scale-105 transition"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-800">{testimonial.title}</h3>
                <p className="text-sm capitalize text-gray-500">
                  {testimonial.category}
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {testimonial.text.length > 100
                ? testimonial.text.slice(0, 100) + "..."
                : testimonial.text}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg w-full p-8 rounded-2xl relative shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
              onClick={() => setActiveModal(null)}
            >
              ✕
            </button>
            <div className="flex items-center gap-6 mb-6">
              <img
                src={activeModal.avatar}
                alt={activeModal.title}
                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{activeModal.title}</h2>
                <p className="capitalize text-indigo-600 font-medium">
                  {activeModal.category}
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              {activeModal.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}