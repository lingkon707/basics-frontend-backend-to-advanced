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

export default function FullWidthOverlayCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 space-y-10">
      {services.map(({ title, description, img }) => (
        <div
          key={title}
          className="relative rounded-3xl overflow-hidden cursor-pointer shadow-lg group"
          style={{ height: "300px" }}
        >
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity"></div>
          <div className="absolute bottom-8 left-8 text-white max-w-lg">
            <h3 className="text-4xl font-bold drop-shadow-lg">{title}</h3>
            <p className="mt-3 text-lg drop-shadow-md">{description}</p>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

