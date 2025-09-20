import React from "react";

const services = [
  {
    title: "Executive Suites",
    description:
      "Premium private office suites with flexible leasing and 24/7 access.",
    img: "https://cdn2.hubspot.net/hubfs/1583367/worker-executive-suites.jpg",
  },
  {
    title: "Team Workspaces",
    description:
      "Collaborative open-plan workspaces designed to boost creativity.",
    img: "https://t4.ftcdn.net/jpg/05/45/89/41/360_F_545894172_fLINXPGJs19SgFvA3P6vTvXN59iScZJ0.jpg",
  },
  {
    title: "Premium Offices",
    description:
      "Fully furnished premium offices with high-end amenities and services.",
    img: "https://watermark.lovepik.com/photo/20211204/large/lovepik-president-office-boss-portrait-picture_501527654.jpg",
  },
  {
    title: "Business Consulting",
    description:
      "Expert consulting services to optimize your business operations.",
    img: "https://thumbs.dreamstime.com/b/business-man-boss-office-happy-37505013.jpg",
  },
  // You can add more services here
];

const ServicesPage = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of office solutions designed to empower your business.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {services.map(({ title, description, img }) => (
          <div
            key={title}
            className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-white"
          >
            {/* Image */}
            <div className="overflow-hidden h-56">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-200 text-sm mb-4">{description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md text-white font-medium shadow-md">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
