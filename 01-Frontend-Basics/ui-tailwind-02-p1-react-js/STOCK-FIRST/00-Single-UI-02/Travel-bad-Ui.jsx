import React from "react";

const TravelPage = () => {
  const heroImage =
    "https://cdn.dhakapost.com/media/imgAll/BG/2025February/biman-20250211201517.jpg";

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero */}
      <div
        className="h-[90vh] bg-cover bg-center flex flex-col items-center justify-center text-white px-6"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
          Find the Best
        </h1>
        <h2 className="text-yellow-400 text-5xl md:text-7xl font-extrabold mt-2">
          Travel Deals
        </h2>
        <p className="mt-6 max-w-xl text-center text-lg md:text-xl text-white/90">
          Discover the world — your perfect getaway starts here.
        </p>
        <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-300 transition">
          Get Started
        </button>
        <button className="mt-3 text-sm underline">Privacy Policy</button>
      </div>

      {/* Search Section */}
      <div className="bg-white py-12 px-6 md:px-20">
        <h3 className="text-2xl font-semibold mb-4">Where would you like to go?</h3>
        <input
          type="text"
          placeholder="Search city or destination"
          className="w-full max-w-xl border border-gray-300 rounded-lg px-5 py-3 mb-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Destination Highlights */}
        <h4 className="text-xl font-bold mb-3">Top places in Thailand</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { name: "Bangkok", img: "https://us.images.westend61.de/0000807111pw/turist-using-phone-while-on-vacation-in-the-city-BSZF00096.jpg" },
            { name: "Chiang Mai", img: "https://st4.depositphotos.com/12985790/20516/i/450/depositphotos_205163862-stock-photo-smiling-traveler-hat-backpack-tourist.jpg" },
            { name: "Phuket", img: "https://st3.depositphotos.com/12982378/35274/i/450/depositphotos_352740142-stock-photo-shocked-traveler-hat-backpack-holding.jpg" },
            { name: "Krabi", img: "https://i.huffpost.com/gen/2006764/images/o-TOURIST-facebook.jpg" },
          ].map((place, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src={place.img} alt={place.name} className="rounded-t-lg w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="font-semibold">{place.name}</h5>
                <p className="text-sm text-gray-500">Explore now</p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {["Beach", "Park", "Mountain", "Camp"].map((category, i) => (
            <button
              key={i}
              className="px-5 py-2 rounded-full border border-gray-300 bg-gray-100 text-sm hover:bg-blue-100"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Trip Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden my-16">
        <div className="md:flex">
          <img
            className="h-64 w-full md:w-1/2 object-cover"
            src="https://i.huffpost.com/gen/2006764/images/o-TOURIST-facebook.jpg"
            alt="Berlin"
          />
          <div className="p-6 flex-1">
            <h3 className="text-2xl font-bold mb-1">Germany, Berlin</h3>
            <p className="text-sm text-gray-500 mb-3">
              A vibrant blend of history, art, and modern culture.
            </p>
            <p className="text-gray-700 text-sm mb-4">Includes: Italy, Rome</p>
            <div className="flex gap-4 mb-4 text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded-full">🛏 Bed</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">🧭 Guide</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">🍽 Dinner</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-yellow-500 text-lg">★★★★☆</p>
                <p className="text-xs text-gray-500">Customer Review</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">$780</p>
                <p className="text-xs text-gray-500">per person</p>
              </div>
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
