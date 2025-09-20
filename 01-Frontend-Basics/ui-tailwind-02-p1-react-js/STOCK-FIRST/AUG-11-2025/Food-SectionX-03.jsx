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

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-8 justify-items-center">
        {foods.map((food, index) => (
          <div
            key={index}
            className="w-full max-w-xs bg-blue-50 border border-gray-100 shadow-xl rounded-2xl p-6 flex flex-col items-center transition hover:shadow-2xl"
          >
            {/* Image (inside card) */}
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-400 bg-white shadow-md mb-4">
              <img
                src={food.image}
                alt={food.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {food.title}
            </h3>

            <div className="flex items-center justify-center text-yellow-500 text-sm mt-1">
              {"★".repeat(food.rating)}{" "}
              <span className="text-gray-500 ml-2">
                ({food.reviews} reviews)
              </span>
            </div>

            <p className="text-center text-gray-600 text-sm mt-3">
              This is a great dish that is very healthy. You can eat it with any meal.
            </p>

            <div className="mt-6 flex justify-between items-center w-full">
              <span className="text-gray-800 font-semibold text-base">
                {food.price}
              </span>
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-1 rounded-full transition">
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
