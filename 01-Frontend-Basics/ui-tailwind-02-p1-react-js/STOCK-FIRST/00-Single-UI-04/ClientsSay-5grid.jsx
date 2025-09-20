import React from "react";

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

const SmallTestimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-blue-50 rounded-xl">
      <h2 className="text-3xl font-semibold text-center mb-10 text-blue-900">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {testimonials.map(({ name, role, img, quote }, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-400 mb-4">
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm italic text-gray-700 mb-3">&quot;{quote}&quot;</p>
            <p className="text-sm font-semibold text-blue-700">{name}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmallTestimonials;
