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






export default function HoverRevealGrid() {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map(({ title, description, img }) => (
          <div
            key={title}
            className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg group"
            style={{ height: "280px" }}
          >
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center px-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
              <p className="text-gray-200 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

