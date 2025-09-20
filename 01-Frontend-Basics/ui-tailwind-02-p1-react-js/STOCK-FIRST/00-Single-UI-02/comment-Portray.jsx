import React from 'react';

const testimonials = [
  {
    name: "Brittany Clark",
    location: "San Francisco",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    review: "The tours on this website are great. I had been really enjoying them with my family! The team is very professional and takes care of the customers. I will surely recommend my friend to join this company!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "John Doe",
    location: "Los Angeles",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    review: "Absolutely amazing! The experience was incredible, and the customer service was excellent. Looking forward to joining more tours in the future.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Emily Johnson",
    location: "New York",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    review: "I had such a great time on the tour! The guides were knowledgeable, and the activities were well-organized. Highly recommend it!",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const TestimonialCard = ({ name, location, image, review, rating }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out">
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt="Customer"
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <p className="text-xl font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
    <p className="text-lg text-gray-700 mb-6">{review}</p>
    <div className="flex justify-center">{rating}</div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-purple-800 mb-12">
          What our customers are saying about us
        </h2>

        {/* Grid Layout for Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
