import React from "react";

const App = () => {
  const categories = [
    {
      label: "LAY'S CLASSIC",
      image: "https://www.dccbazar.com.bd/images/detailed/8/71Drb_lWlfL._SL1500_.jpg",
    },
    {
      label: "SPICY SNACKS",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/608588179928623.6501f0213467b.jpg",
    },
    {
      label: "LIGHTLY SALTED",
      image: "https://www.lays.com/sites/lays.com/files//2019-09/Lightly%20Salted%20Classic.png",
    },
    {
      label: "YELLOW CLASSIC",
      image: "https://www.yellowdiamond.in/wp-content/uploads/2024/07/Chips_Classic_Salted-e1722353260254.png",
    },
    {
      label: "DIAMOND CRUNCH",
      image: "https://www.yellowdiamond.in/wp-content/uploads/2024/07/Chips.png",
    },
  ];

  return (
    <section className="w-screen bg-blue-600 py-16 text-white overflow-x-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 tracking-wide">
        EXPLORE MORE
      </h2>

      <div className="w-full flex flex-wrap justify-center gap-x-16 gap-y-20 px-4 sm:px-10">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center w-40">
            <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-white hover:scale-105 transition-transform duration-300">
              <img
                src={category.image}
                alt={category.label}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm sm:text-base font-semibold text-white mt-4 uppercase tracking-wide text-center">
              {category.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default App;
