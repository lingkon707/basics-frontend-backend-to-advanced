const VerticalListTestimonials = () => {

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
  return (
     <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">
        What People Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {testimonials.slice(0, 3).map(({ name, role, img, quote }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={img}
              alt={name}
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-400 mb-4"
            />
            <svg
              className="w-8 h-8 text-blue-400 mb-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.17 6.17A4.001 4.001 0 0111 4a4 4 0 014 4v4a4 4 0 01-4 4 1 1 0 100 2 6 6 0 006-6V8a6 6 0 00-6-6 6 6 0 00-5.83 8.17zM16.83 6.17A4.001 4.001 0 0120 4a4 4 0 014 4v4a4 4 0 01-4 4 1 1 0 100 2 6 6 0 006-6V8a6 6 0 00-6-6 6 6 0 00-5.83 8.17z" />
            </svg>
            <p className="text-gray-700 italic mb-3">&quot;{quote}&quot;</p>
            <p className="font-semibold text-blue-700">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalListTestimonials;
