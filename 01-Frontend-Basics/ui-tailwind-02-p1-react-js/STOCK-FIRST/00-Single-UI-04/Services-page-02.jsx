// UI 2: Split Cards with Image Left & Text Right, Smooth Fade-In on Hover
const services = [
  {
    title: "Executive Suites",
    description: "Premium private offices with 24/7 access and concierge services.",
    img: "https://cdn2.hubspot.net/hubfs/1583367/worker-executive-suites.jpg",
  },
  {
    title: "Team Workspaces",
    description: "Open-plan workspaces designed to foster collaboration.",
    img: "https://t4.ftcdn.net/jpg/05/45/89/41/360_F_545894172_fLINXPGJs19SgFvA3P6vTvXN59iScZJ0.jpg",
  },
  {
    title: "Premium Offices",
    description: "Furnished offices with premium amenities & services.",
    img: "https://watermark.lovepik.com/photo/20211204/large/lovepik-president-office-boss-portrait-picture_501527654.jpg",
  },
  {
    title: "Business Consulting",
    description: "Expert advice to optimize your operations.",
    img: "https://thumbs.dreamstime.com/b/business-man-boss-office-happy-37505013.jpg",
  },
  {
    title: "Virtual Offices",
    description: "Professional address and reception services without physical space.",
    img: "https://cdn2.hubspot.net/hubfs/1583367/worker-executive-suites.jpg",
  },
];

export default function SplitCards() {
  return (
    <section className="max-w-6xl mx-auto p-6 space-y-10">
      {services.map(({ title, description, img }) => (
        <div
          key={title}
          className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
        >
          <div className="md:w-1/2 relative h-56 md:h-auto overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
            <button className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
