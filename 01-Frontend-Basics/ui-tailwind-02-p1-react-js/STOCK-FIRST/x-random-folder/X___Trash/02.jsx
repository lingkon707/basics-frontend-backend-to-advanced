import React from "react";

const products = [
  {
    id: 1,
    name: "Bengal Pottery Bowl",
    image:
      "https://indianfolkart.org/wp-content/uploads/2022/04/masters-craft.blogspot-pottery-bengal.jpg",
    description: "Handmade pottery bowl crafted with traditional Bengal techniques.",
    price: "₹1,200",
  },
  {
    id: 2,
    name: "Handcrafted Jewelry Set",
    image: "https://twintrimsbd.com/public/assets/img/aa.jpg",
    description: "Elegant handmade jewelry combining modern & traditional design.",
    price: "₹950",
  },
  {
    id: 3,
    name: "Bengal Pottery Bowl",
    image:
      "https://www.southindiatempletours.com/images/handicraft-south-india.jpg",
    description: "Handmade pottery bowl crafted with traditional Bengal techniques.",
    price: "₹1,200",
  }
  
];

export default function WellUISalesSection() {
  return (
    <section
      aria-labelledby="sales-heading"
      className="py-16 bg-white"
    >
      <h2
        id="sales-heading"
        className="text-4xl font-semibold text-center text-gray-900 mb-12"
      >
        Featured Handicrafts for Sale
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {products.map(({ id, name, image, description, price }) => (
          <article
            key={id}
            className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            tabIndex={0}
            aria-label={`${name}, priced at ${price}`}
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={image}
                alt={name}
                className="w-full h-52 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-56">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold text-indigo-700">{price}</span>
                <button
                  className="px-5 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  aria-label={`Add ${name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

   
    </section>
  );
}
