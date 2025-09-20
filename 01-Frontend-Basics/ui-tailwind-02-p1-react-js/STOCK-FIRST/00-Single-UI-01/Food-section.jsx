import React from 'react';

const foodItems = [
  {
    id: 1,
    title: "Chicken Masala",
    image: "https://m2ce.sindabad.com/pub/media/catalog/product/f/g/fgsb0100001g248.jpg",
    price: "$4.00",
    rating: 4.5,
    reviewCount: 20,
    description: "This is a great chicken masala that is very tasty. You can eat it with any meal."
  },
  {
    id: 2,
    title: "Mutton Kheema",
    image: "https://img.drz.lazcdn.com/static/bd/p/8388d12973b1396017a5fc66dee9e734.jpg_720x720q80.jpg",
    price: "$4.60",
    rating: 4.5,
    reviewCount: 20,
    description: "This is a great mutton kheema that is very healthy. You can eat it with any meal."
  },
  {
    id: 3,
    title: "Chicken Fry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUAwCR4qySrYGgB9zGzpbGBC8i3TUXTVuDw&s",
    price: "$4.00",
    rating: 4.5,
    reviewCount: 20,
    description: "This is a great chicken masala that is very tasty. You can eat it with any meal."
  },
  {
    id: 4,
    title: "Special Dessert",
    image: "https://ruperhat.com/wp-content/uploads/2021/08/Pran-Special-Toast.webp",
    price: "$2.50",
    rating: 4.5,
    reviewCount: 20,
    description: "This is a great mutton kheema that is very healthy. You can eat it with any meal."
  },
];


function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.64 11.545 1 7.455l6.061-.545L10 2l2.939 4.91 6.061.545-4.64 4.09 1.518 6.545z"/></svg>);
  }
  if (halfStar) {
    stars.push(<svg key="half" className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><defs><linearGradient id="halfGrad"><stop offset="50%" stopColor="currentColor" /><stop offset="50%" stopColor="transparent" /></linearGradient></defs><path fill="url(#halfGrad)" d="M10 15l-5.878 3.09L5.64 11.545 1 7.455l6.061-.545L10 2l2.939 4.91 6.061.545-4.64 4.09 1.518 6.545z"/></svg>);
  }
  return <div className="flex space-x-1">{stars}</div>;
}

export default function RegularFood() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-blue-950">
      <h2 className="text-3xl font-bold mb-2 text-white">OUR REGULAR FOOD</h2>
      <p className="text-gray-500 mb-8 text-white">
        This is our daily food list. Here you will find all kinds of food, choose your favorite food and order
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {foodItems.map(({ id, title, image, price, rating, reviewCount, description }) => (
          <div key={id} className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-300 mb-4">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <div className="flex items-center space-x-2 mb-2">
              <StarRating rating={rating} />
              <span className="text-yellow-500 font-medium">({reviewCount})</span>
            </div>
            <p className="text-gray-500 text-center text-sm mb-4">{description}</p>
            <div className="flex items-center justify-between w-full px-3">
              <span className="text-lg font-semibold">{price}</span>
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-1.5 px-4 rounded-full">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
