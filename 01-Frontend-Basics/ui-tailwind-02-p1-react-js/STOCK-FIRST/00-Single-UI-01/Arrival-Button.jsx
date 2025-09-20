import React from "react";

const products = [
  {
    id: 1,
    name: "Bengal Pottery Bowl",
    image:
      "https://indianfolkart.org/wp-content/uploads/2022/04/masters-craft.blogspot-pottery-bengal.jpg",
    description: "Handmade pottery bowl crafted with traditional Bengal techniques.",
    price: "₹1,200",
    isNew: true,
  },
  {
    id: 2,
    name: "Handcrafted Jewelry Set",
    image: "https://twintrimsbd.com/public/assets/img/aa.jpg",
    description: "Elegant handmade jewelry combining modern & traditional design.",
    price: "₹950",
    isNew: false,
  },
  {
    id: 3,
    name: "Bengal Pottery Bowl",
    image:
      "https://www.southindiatempletours.com/images/handicraft-south-india.jpg",
    description: "Handmade pottery bowl crafted with traditional Bengal techniques.",
    price: "₹1,200",
    isNew: true,
  }
];

export default function SalesSectionAlt() {
  return (
    <section
      aria-labelledby="sales-heading"
      className="py-16 bg-gray-100"
    >
      <h2
        id="sales-heading"
        className="text-4xl font-bold text-center text-gray-900 mb-14"
      >
        Arrival-Button
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid gap-12 sm:grid-cols-2 md:grid-cols-3">
        {products.map(({ id, name, image, description, price, isNew }) => (
          <article
            key={id}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            tabIndex={0}
            aria-label={`${name}, priced at ${price}`}
          >
            {/* Image */}
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end text-white">
              {isNew && (
                <span className="absolute top-4 left-4 bg-pink-600 uppercase text-xs font-bold tracking-wide px-3 py-1 rounded-full shadow-lg">
                  New Arrival
                </span>
              )}
              <h3 className="text-2xl font-semibold drop-shadow-lg">{name}</h3>
              <p className="text-sm mt-1 drop-shadow-lg">{description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-extrabold drop-shadow-lg">{price}</span>
                <button
                  className="bg-pink-600 px-4 py-2 rounded-md text-white font-semibold hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
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
