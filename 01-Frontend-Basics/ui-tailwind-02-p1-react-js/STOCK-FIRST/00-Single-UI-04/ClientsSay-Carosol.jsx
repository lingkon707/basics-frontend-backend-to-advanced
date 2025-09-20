import React, { useState } from "react";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "CEO, Acme Corp",
    img: "https://thumbs.dreamstime.com/b/business-man-boss-office-happy-37505013.jpg",
    quote:
      "Great workspace that boosts productivity!",
  },
  {
    name: "Sara Khan",
    role: "Project Manager",
    img: "https://t4.ftcdn.net/jpg/05/45/89/41/360_F_545894172_fLINXPGJs19SgFvA3P6vTvXN59iScZJ0.jpg",
    quote:
      "Flexible office spaces with excellent facilities.",
  },
  {
    name: "John Doe",
    role: "CEO",
    img: "https://watermark.lovepik.com/photo/20211204/large/lovepik-president-office-boss-portrait-picture_501527654.jpg",
    quote:
      "A professional environment perfect for growth.",
  },
  {
    name: "Mark Smith",
    role: "Lead Developer",
    img: "https://cdn2.hubspot.net/hubfs/1583367/worker-executive-suites.jpg",
    quote:
      "Top-notch amenities and great team spirit!",
  },
  {
    name: "Emily Clark",
    role: "Marketing Head",
    img: "https://thumbs.dreamstime.com/b/business-man-boss-office-happy-37505013.jpg",
    quote:
      "Highly recommend these office solutions.",
  },
];

const CarouselTestimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const next = () => {
    setStartIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + 3
  ).length === 3 ? testimonials.slice(startIndex, startIndex + 3) : [
    ...testimonials.slice(startIndex),
    ...testimonials.slice(0, 3 - (testimonials.length - startIndex))
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
        Client Testimonials
      </h2>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prev}
          className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition"
          aria-label="Previous testimonials"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition"
          aria-label="Next testimonials"
        >
          ›
        </button>
      </div>
      <div className="flex gap-6 overflow-hidden">
        {visibleTestimonials.map(({ name, role, img, quote }, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-80 bg-blue-50 rounded-2xl p-6 shadow hover:shadow-xl transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={img}
                alt={name}
                className="w-14 h-14 rounded-full border-2 border-blue-400 object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-blue-800">{name}</p>
                <p className="text-xs text-blue-600">{role}</p>
              </div>
            </div>
            <p className="text-sm italic text-gray-700">"{quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarouselTestimonials;
