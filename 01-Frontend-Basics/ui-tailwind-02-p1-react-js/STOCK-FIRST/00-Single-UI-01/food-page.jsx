import React from 'react';

const foodItems = [
  {
    id: 1,
    title: "Chicken Masala",
    image: "https://m2ce.sindabad.com/pub/media/catalog/product/f/g/fgsb0100001g248.jpg",
    price: "$4.00",
    description: "This is a great chicken masala that is very tasty. You can eat it with any meal."
  },
  {
    id: 2,
    title: "Mutton Kheema",
    image: "https://img.drz.lazcdn.com/static/bd/p/8388d12973b1396017a5fc66dee9e734.jpg_720x720q80.jpg",
    price: "$4.60",
    description: "This is a great mutton kheema that is very healthy. You can eat it with any meal."
  },
  {
    id: 3,
    title: "Chicken Fry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUAwCR4qySrYGgB9zGzpbGBC8i3TUXTVuDw&s",
    price: "$4.00",
    description: "This is a great chicken masala that is very tasty. You can eat it with any meal."
  },
  {
    id: 4,
    title: "Special Dessert",
    image: "https://ruperhat.com/wp-content/uploads/2021/08/Pran-Special-Toast.webp",
    price: "$2.50",
    description: "This is a great mutton kheema that is very healthy. You can eat it with any meal."
  },
];

export default function RegularFood() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-blue-950 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-4 text-white tracking-wide">OUR REGULAR FOOD</h2>
      <p className="text-blue-300 mb-12 max-w-xl">
        This is our daily food list. Here you will find all kinds of food, choose your favorite food and order.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {foodItems.map(({ id, title, image, price, description }) => (
          <div key={id} className="bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700 rounded-xl shadow-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-green-400 shadow-md">
              <img src={image} alt={title} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
            <p className="text-blue-200 mb-4 text-sm">{description}</p>
            <div className="text-green-400 text-lg font-bold mb-4">{price}</div>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full font-medium tracking-wide shadow-md">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
