import React from "react";

const TravelUI = () => {
  const thailandPlaces = [
    {
      title: "Pran",
      desc: "A vibrant skyline blending tradition and modernity – welcome to Bangkok.",
      img: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Pran_Sweetened_Plum_15gm_Pouch-Pran-34755-368109.jpg",
      rating: 4.7,
      highlight: true,
    },
    {
      title: "ACME",
      desc: "A serene blend of ancient temples and mountain charm – discover Chiang Mai.",
      img: "https://agrocerybd.com/wp-content/uploads/2024/05/38.jpg",
      rating: 4.6,
    },
    {
      title: "One Time",
      desc: "Tropical paradise with golden beaches and vibrant island life – welcome to Phuket.",
      img: "https://mehranfoods.com/wp-content/uploads/2024/11/3front-13.jpg",
      rating: 4.7,
    },
  ];

  const categories = [
    { name: "Chips", img: "https://www.dailyfoodshop.com/wp-content/uploads/2020/05/pran-puffed-rice.jpg" },
    { name: "Fry", img: "https://gbegbe.com/images/thumbs/0002574_ruchi-bbq-chanachur-150-gm_510.png" },
    { name: "Cake", img: "https://d2n7tchuu1wmsv.cloudfront.net/uploads/12505/products/1589121357_ruchi-bbq-chanachur-350-gm.jpg" },
    { name: "Camp", img: "https://freshbazarbd.com/wp-content/uploads/2020/04/RUCHI.jpg" },
    { name: "Butter", img: "https://www.wellfoodbd.com/documents/products/202402/WF-Plain-Toast.png" },
  ];

  return (

    // Ring 2 , ring yello : color tailwind and border 
    <div className="bg-[#f8fbff] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-blue-900 to-blue-600 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-lg">
          Explore The World
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mb-8 text-white/90">
          Discover food, experiences, and test to make your dream trip a reality.
        </p>
        <input
          type="text"
          placeholder="Search your next destination..."
          className="w-full max-w-xl rounded-lg py-4 px-6 text-white shadow-md focus:ring-2  ring-2 ring-green-500 focus:ring-yellow-400 outline-none"
        />
      </section>

      {/* Thailand Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="text-[#0B2362] text-3xl font-bold mb-2">Top Destinations in Chips</h3>
            <p className="text-gray-500 text-sm">Discover our recommended Chips</p>
          </div>
          <button className="px-6 py-2 bg-yellow-400 rounded-full text-black font-medium hover:bg-yellow-300 transition">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {thailandPlaces.map((place, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden relative ${
                place.highlight ? "ring-4 ring-yellow-300" : ""
              }`}
            >
              <img
                src={place.img}
                alt={place.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{place.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{place.desc}</p>
                <div className="flex items-center text-yellow-400 font-semibold">
                  <span>{place.rating}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.984a1 1 0 00.95.69h5.254c.969 0 1.371 1.24.588 1.81l-4.254 3.089a1 1 0 00-.364 1.118l1.618 4.985c.3.92-.755 1.688-1.54 1.118l-4.253-3.09a1 1 0 00-1.175 0l-4.253 3.09c-.785.57-1.838-.197-1.539-1.118l1.618-4.985a1 1 0 00-.364-1.118L2.64 10.41c-.783-.57-.38-1.81.588-1.81h5.255a1 1 0 00.95-.69l1.618-4.984z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#0B2362] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-white text-3xl font-bold mb-10 text-center">
            Explore by Category
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-36 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-2 text-center text-sm">
                  {cat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelUI;
