import React from "react";

// Data for the testimonials
const testimonials = [
  {
    id: 1,
    name: "Ibrahima K.",
    role: "Senior Marketing At Amazon",
    quote:
      '"Itec provide perfect IT solutions, fast process and affordable price. We’re really satisfied!"',
    image:
      "https://img.freepik.com/photos-gratuite/portrait-jeune-homme-beau-chemise-jean-souriant-bras-croises_176420-12083.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Ben S.",
    role: "CEO At ThemesCamp",
    quote:
      '"Itec - 1st my choice for cloud services method"',
    image:
      "https://img.freepik.com/free-photo/expressive-bearded-man-wearing-shirt_273609-5894.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Alexander A.",
    role: "Tech Leader Of Traveloka",
    quote:
      '"Our profit increased so much. Really Awesome!"',
    image:
      "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">The Trust From Clients</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Side - Main testimonial */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full lg:w-1/2 flex flex-col items-center text-center">
          <img
            src="https://images.pexels.com/photos/13299469/pexels-photo-13299469.jpeg"
            alt="Casper Defloy"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Casper Defloy
          </h3>
          <p className="text-sm text-gray-500 mb-4">Tech Leader at Esty Inc</p>
          <div className="flex justify-center items-center mb-4">
            <button className="bg-blue-500 p-3 rounded-full text-white">
              <i className="fas fa-play text-2xl"></i>
            </button>
          </div>
          <p className="text-gray-700">
            "Itec provide perfect IT solutions, fast process and affordable price. We’re really satisfied!"
          </p>
        </div>

        {/* Right Side - Client Testimonials */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <div className="flex items-center mb-2">
                {/* Rating */}
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
                <span className="text-sm ml-2 text-gray-500">{testimonial.name}</span>
              </div>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
