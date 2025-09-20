// UI 1: Card Mosaic with Diagonal Image Cuts & Overlay Text

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

export default function DiagonalCards() {
  return (
    <section className="max-w-7xl mx-auto p-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, description, img }, i) => (
        <div
          key={title}
          className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
          style={{ clipPath: `polygon(0 0, 100% 5%, 100% 95%, 0 100%)` }}
        >
          <img
            src={img}
            alt={title}
            className="w-full h-72 object-cover brightness-90 group-hover:brightness-75 transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-6 left-6 text-white max-w-xs">
            <h3 className="text-2xl font-extrabold drop-shadow-lg">{title}</h3>
            <p className="mt-2 text-sm drop-shadow-md">{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
