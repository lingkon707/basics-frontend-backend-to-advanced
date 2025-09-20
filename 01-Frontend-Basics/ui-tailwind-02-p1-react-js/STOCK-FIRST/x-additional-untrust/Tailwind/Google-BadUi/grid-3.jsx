// App.js
import React from "react";

const cards = [
  {
    title: "Learn About",
    image: "https://yavni.darkbull.in/wp-content/uploads/2025/03/download-10.jpeg",
  },
  {
    title: "Shiffbot",
    image: "https://www.bointernational.net/wp-content/uploads/2024/02/Cosmetics-Range-600x300.jpg",
  },
  {
    title: "Illuminate",
    image: "https://adsofbd.com/wp-content/uploads/2019/03/Drinko1.jpg",
  },
];

function App() {
  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto text-center">
        {/* Explore Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mb-8 text-lg">
          Explore Google Labs
        </button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <img src={card.image} alt={card.title} className="w-full h-56 object-cover" />
                <button
                  className="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full"
                  aria-label="Add to collection"
                >
                  +
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
