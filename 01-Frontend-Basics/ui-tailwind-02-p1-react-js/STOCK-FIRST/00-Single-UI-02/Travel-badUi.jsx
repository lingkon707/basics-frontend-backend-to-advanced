import React from "react";

const TravelPage = () => {
  const heroImage =
    "https://cdn.dhakapost.com/media/imgAll/BG/2025February/biman-20250211201517.jpg";

  const destinations = [
    {
      name: "Bangkok",
      img: "https://us.images.westend61.de/0000807111pw/turist-using-phone-while-on-vacation-in-the-city-BSZF00096.jpg",
    },
    {
      name: "Chiang Mai",
      img: "https://st4.depositphotos.com/12985790/20516/i/450/depositphotos_205163862-stock-photo-smiling-traveler-hat-backpack-tourist.jpg",
    },
    {
      name: "Phuket",
      img: "https://st3.depositphotos.com/12982378/35274/i/450/depositphotos_352740142-stock-photo-shocked-traveler-hat-backpack-holding.jpg",
    },
    {
      name: "Krabi",
      img: "https://i.huffpost.com/gen/2006764/images/o-TOURIST-facebook.jpg",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero */}
      <div
        className="h-[90vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Find the Best
        </h1>
        <h2 className="text-yellow-400 text-5xl md:text-7xl font-extrabold mt-2 drop-shadow-lg">
          Travel Deals
        </h2>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
          Discover the world — your perfect getaway starts here. Plan your trip
          with exclusive offers and unforgettable experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-yellow-300 transition shadow-lg">
            Get Started
          </button>
          <button className="text-sm underline hover:text-yellow-300 transition">
            Privacy Policy
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white py-16 px-6 md:px-20 shadow-sm">
        <h3 className="text-3xl font-semibold mb-6 text-center md:text-left">
          Where would you like to go?
        </h3>
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search city or destination"
            className="w-full max-w-2xl border border-gray-300 rounded-lg px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Destination Highlights */}
        <h4 className="text-2xl font-bold mb-6 text-center md:text-left">
          Top places in Thailand
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <h5 className="font-semibold text-lg">{place.name}</h5>
                <p className="text-sm text-gray-500 mt-1">Explore now</p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {["Beach", "Park", "Mountain", "Camp"].map((category, i) => (
            <button
              key={i}
              className="px-6 py-2 rounded-full border border-gray-200 bg-gray-100 text-gray-700 text-sm hover:bg-blue-100 hover:text-blue-700 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Trip Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden my-20">
        <div className="md:flex">
          <img
            className="h-72 w-full md:w-1/2 object-cover"
            src="https://i.huffpost.com/gen/2006764/images/o-TOURIST-facebook.jpg"
            alt="Berlin"
          />
          <div className="p-8 flex-1">
            <h3 className="text-3xl font-bold mb-2">Germany, Berlin</h3>
            <p className="text-gray-500 mb-4 text-sm md:text-base">
              A vibrant blend of history, art, and modern culture. Explore the
              stunning streets and landmarks with expert guides.
            </p>
            <p className="text-gray-700 text-sm mb-6">Includes: Italy, Rome</p>
            <div className="flex gap-4 mb-6 text-sm flex-wrap">
              <span className="bg-gray-100 px-4 py-1 rounded-full">🛏 Bed</span>
              <span className="bg-gray-100 px-4 py-1 rounded-full">🧭 Guide</span>
              <span className="bg-gray-100 px-4 py-1 rounded-full">🍽 Dinner</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-yellow-500 text-lg">★★★★☆</p>
                <p className="text-xs text-gray-500">Customer Review</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">$780</p>
                <p className="text-xs text-gray-500">per person</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
