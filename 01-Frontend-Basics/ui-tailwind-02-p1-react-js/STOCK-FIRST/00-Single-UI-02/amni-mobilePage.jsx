import React from "react";

const TravelUI = () => {
  const thailandPlaces = [
    {
      title: "Bangkok",
      desc: "A vibrant skyline blending tradition and modernity – welcome to Bangkok.",
      img: "https://agrocerybd.com/wp-content/uploads/2024/05/38.jpg",
      rating: 4.7,
      highlight: true,
    },
    {
      title: "Chiang Mai",
      desc: "A serene blend of ancient temples and mountain charm – discover Chiang Mai.",
      img: "https://agrocerybd.com/wp-content/uploads/2024/05/38.jpg",
      rating: 4.6,
    },
    {
      title: "Phuket",
      desc: "Tropical paradise with golden beaches and vibrant island life – welcome to Phuket.",
      img: "https://freshbazarbd.com/wp-content/uploads/2020/04/RUCHI.jpg",
      rating: 4.7,
    },
  ];

  const categories = [
    { name: "Beach", img: "https://www.wellfoodbd.com/documents/products/202402/WF-Plain-Toast.png" },
    { name: "Park", img: "https://agrocerybd.com/wp-content/uploads/2024/05/38.jpg" },
    { name: "Mountain", img: "https://freshbazarbd.com/wp-content/uploads/2020/04/RUCHI.jpg" },
    { name: "Camp", img: "https://www.wellfoodbd.com/documents/products/202402/WF-Plain-Toast.png" },
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen p-6 font-sans">
      {/* Top Blue Section */}
      <div className="bg-[#0B2362] rounded-xl p-6 max-w-md mx-auto text-white relative">
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm opacity-70">Hello <b>THOMAS,</b></div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-3 border border-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-1 bg-white rounded-sm" />
            </div>
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-5 leading-snug">
          Where would you <br /> like to go?
        </h2>

        <input
          type="text"
          placeholder="Discover city"
          className="w-full rounded-md py-3 px-4 text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Thailand Section */}
      <div className="max-w-md mx-auto mt-8">
        <h3 className="text-[#0B2362] text-xl font-bold mb-1">Thailand</h3>
        <p className="text-gray-400 text-xs mb-5">Best city in Thailand</p>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {thailandPlaces.map((place, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl shadow-md min-w-[220px] flex-shrink-0 relative ${
                place.highlight ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              <img
                src={place.img}
                alt={place.title}
                className="rounded-t-xl w-full h-40 object-cover"
              />
              {place.highlight && (
                <div className="absolute top-3 left-3 bg-yellow-400 rounded-full p-1 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v16h16"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 12h16"
                    />
                  </svg>
                </div>
              )}
              <div className="p-4 text-sm">
                <p className="mb-2 leading-tight">{place.desc}</p>
                <div className="flex items-center gap-1 text-yellow-400 font-semibold">
                  <span>{place.rating}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.984a1 1 0 00.95.69h5.254c.969 0 1.371 1.24.588 1.81l-4.254 3.089a1 1 0 00-.364 1.118l1.618 4.985c.3.92-.755 1.688-1.54 1.118l-4.253-3.09a1 1 0 00-1.175 0l-4.253 3.09c-.785.57-1.838-.197-1.539-1.118l1.618-4.985a1 1 0 00-.364-1.118L2.64 10.41c-.783-.57-.38-1.81.588-1.81h5.255a1 1 0 00.95-.69l1.618-4.984z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-md mx-auto mt-8 bg-[#0B2362] rounded-xl p-4 flex gap-4 overflow-x-auto">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`min-w-[80px] cursor-pointer rounded-lg overflow-hidden relative ${
              i === categories.length - 1
                ? "ring-4 ring-yellow-400"
                : ""
            }`}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-20 object-cover"
            />
            <div className="absolute bottom-1 left-1 right-1 bg-black bg-opacity-40 text-white text-xs text-center rounded-b-lg py-1">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelUI;


// use this image in code : https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Pran_Sweetened_Plum_15gm_Pouch-Pran-34755-368109.jpg
// https://agrocerybd.com/wp-content/uploads/2024/05/38.jpg
// https://mehranfoods.com/wp-content/uploads/2024/11/3front-13.jpg
// https://www.dailyfoodshop.com/wp-content/uploads/2020/05/pran-puffed-rice.jpg  

// https://gbegbe.com/images/thumbs/0002574_ruchi-bbq-chanachur-150-gm_510.png
// https://d2n7tchuu1wmsv.cloudfront.net/uploads/12505/products/1589121357_ruchi-bbq-chanachur-350-gm.jpg
// https://freshbazarbd.com/wp-content/uploads/2020/04/RUCHI.jpg
// https://www.wellfoodbd.com/documents/products/202402/WF-Plain-Toast.png
