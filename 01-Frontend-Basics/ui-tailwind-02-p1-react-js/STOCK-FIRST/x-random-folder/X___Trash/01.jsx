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
];

export default function SalesSection() {
  return (
    <section
      aria-labelledby="sales-heading"
      className="py-16 bg-white"
    >
      <h2
        id="sales-heading"
        className="text-4xl font-bold text-center mb-12 text-amber-700"
      >
        Featured Handicrafts for Sale
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-6">
        {products.map((product) => (
          <article
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transform hover:scale-105 transition-transform"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-amber-800 mb-1">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-amber-700">{product.price}</span>
                <button
                  className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/shop"
          className="inline-block bg-amber-700 text-white font-semibold px-8 py-3 rounded shadow hover:bg-amber-800 transition"
        >
          Explore More Handicrafts
        </a>
      </div>
    </section>
  );
}
