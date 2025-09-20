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
    <section className="max-w-4xl mx-auto px-6 py-12 bg-gray-50 rounded-xl">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        Hear from Our Clients
      </h2>
      <div className="space-y-8">
        {testimonials.slice(0, 3).map(({ name, role, img, quote }, idx) => (
          <div
            key={idx}
            className="flex items-center bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >
            <img
              src={img}
              alt={name}
              className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover flex-shrink-0"
            />
            <div className="ml-6">
              <p className="italic text-gray-700 text-lg mb-2">"{quote}"</p>
              <p className="font-bold text-blue-700">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalListTestimonials;
