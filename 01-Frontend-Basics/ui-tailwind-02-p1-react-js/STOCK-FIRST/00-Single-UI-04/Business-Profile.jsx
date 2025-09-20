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


export default function CircleImageCards() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map(({ title, description, img }) => (
          <div
            key={title}
            className="bg-white rounded-3xl shadow-lg p-8 text-center relative overflow-hidden cursor-pointer group"
          >
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-8 border-blue-400 mb-6 transition-transform group-hover:scale-110">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

