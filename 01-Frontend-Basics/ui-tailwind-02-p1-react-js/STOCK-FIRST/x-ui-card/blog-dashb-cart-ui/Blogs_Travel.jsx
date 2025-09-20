import React from 'react';

const TravelExplorer = () => {
  const nav = [
    { name: "Discover", emoji: "🧭" },
    { name: "Destinations", emoji: "🌍" },
    { name: "Trips", emoji: "🧳" },
    { name: "Bucket List", emoji: "✅" },
  ];

  const tools = [
    { name: "Weather", emoji: "☀️" },
    { name: "Currency", emoji: "💱" },
    { name: "Packing List", emoji: "📦" },
    { name: "Book Now", emoji: "🛫" },
  ];

  const destination = {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: `
      Bali is a tropical paradise known for its beautiful beaches, lush rice terraces,
      and spiritual culture. Whether you're surfing, hiking to waterfalls, or relaxing in a jungle villa,
      there's something for every traveler.
      
      Popular spots include Ubud, Seminyak, Canggu, and Nusa Penida.
      Balinese food is flavorful, and the island’s temples and traditions make it unforgettable.
    `,
    highlights: ["Surfing", "Temples", "Rice Fields", "Beach Clubs", "Cultural Tours"],
  };

  return (
    <div className="h-screen w-full bg-gray-100 flex font-sans text-gray-800">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-indigo-600 mb-8 tracking-tight">🌴 Explorer</h1>
          <nav className="space-y-3">
            {nav.map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 transition"
              >
                <span className="text-xl">{item.emoji}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
        <p className="text-xs text-gray-400 text-center">© 2025 Travel Co.</p>
      </aside>

      {/* Main Travel Destination */}
      <main className="flex-1 overflow-y-auto px-10 py-10">
        <article className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-72 object-cover rounded-xl mb-6"
          />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{destination.name}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6 text-lg">
            {destination.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {destination.highlights.map((tag, i) => (
              <span
                key={i}
                className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>
      </main>

      {/* Right Sidebar */}
      <aside className="w-64 bg-white shadow-md border-l p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Travel Tools</h3>
          <nav className="space-y-3">
            {tools.map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 transition"
              >
                <span className="text-xl">{item.emoji}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
        <p className="text-xs text-gray-400 text-center">Plan your journey</p>
      </aside>
    </div>
  );
};

export default TravelExplorer;
