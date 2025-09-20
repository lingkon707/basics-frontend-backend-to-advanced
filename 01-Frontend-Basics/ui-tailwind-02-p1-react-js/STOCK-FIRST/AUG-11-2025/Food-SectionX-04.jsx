import React from "react";

const App = () => {
  const foods = [
    {
      title: "Chicken Masala",
      image: "https://m.media-amazon.com/images/I/61+FNZ7DptL._UF1000,1000_QL80_.jpg",
      rating: 5,
      reviews: 102,
      price: "$4.00",
    },
    {
      title: "Mutton Kheema",
      image: "https://m.media-amazon.com/images/I/61j-lpgB9+L._UF1000,1000_QL80_.jpg",
      rating: 4,
      reviews: 86,
      price: "$4.60",
    },
    {
      title: "Chicken Fry",
      image: "https://m.media-amazon.com/images/I/61BGLZw9P1L._UF1000,1000_QL80_.jpg",
      rating: 5,
      reviews: 178,
      price: "$4.00",
    },
    {
      title: "Special Dessert",
      image: "https://bizimages.withfloats.com/actual/5a8cf13ba3f9b90be0025abb.jpg",
      rating: 5,
      reviews: 128,
      price: "$2.50",
    },
    {
      title: "Dion Premium Dish",
      image: "https://tropicalagro.in/wp-content/uploads/2023/09/DION-1024x1024.png",
      rating: 4,
      reviews: 64,
      price: "$3.80",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-16 font-sans">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
        OUR REGULAR FOOD
      </h2>
      <p className="text-center text-gray-500 max-w-xl mx-auto mb-10">
        This is our daily food list, where you will find all kinds of food. Choose your favorite and order.
      </p>

     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
  {foods.map((food, index) => (
    <div
      key={index}
      className="w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[220px] bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={food.image}
          alt={food.title}
          className="w-full h-28 sm:h-32 lg:h-36 object-cover"
        />
        <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full shadow">
          {food.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3">
        <h3 className="text-xs sm:text-sm font-bold text-gray-800 line-clamp-1">
          {food.title}
        </h3>

        <div className="flex items-center mt-1 text-yellow-500 text-[10px] sm:text-xs">
          {"★".repeat(food.rating)}
          <span className="text-gray-500 ml-1">({food.reviews})</span>
        </div>

        <p className="text-gray-600 text-[10px] sm:text-xs mt-2 line-clamp-2 leading-tight">
          Healthy dish you can eat with any meal.
        </p>

        <button className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full transition-all duration-300">
          Buy Now
        </button>
      </div>
    </div>
  ))}
</div>





    </div>
  );
};

export default App;
