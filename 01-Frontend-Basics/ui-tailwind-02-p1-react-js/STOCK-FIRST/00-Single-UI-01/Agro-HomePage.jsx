import React from "react";

const products = [
  {
    name: "Organic Vegetables",
    img: "https://www.janathaagro.com/cdn/shop/files/3194-Janatha-Agro-Home-Banner-03.jpg?v=1715621427&width=3840",
    price: "$20.00",
    rating: 4.8,
  },
  {
    name: "Natural Agro Pack",
    img: "https://www.arpitaagro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-02-at-4.45.21-PM.jpeg",
    price: "$25.00",
    rating: 4.9,
  },
  {
    name: "Premium Agro Basket",
    img: "https://www.milifestylemarketing.com/Assets/Images/MI-Lifestyle_Blog-Banner_1280x540_29-Jan_001.PNG",
    price: "$30.00",
    rating: 4.7,
  },
];

const categories = [
  {
    name: "Fresh Fruits",
    img: "https://4.imimg.com/data4/VB/JI/MY-22345174/natural-agro-products.png",
  },
  {
    name: "Organic Products",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/4/500041379/OV/PL/BD/139021501/agro-products.jpg",
  },
  {
    name: "Agro Seeds",
    img: "https://www.shyamgroup.org/images/slider/slider3.jpg",
  },
  {
    name: "Harvested Crops",
    img: "https://www.shyamgroup.org/images/agro/003.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-sm">
        <div className="text-2xl font-bold text-green-600">AGRO</div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-green-600 font-medium">Home</a>
          <a href="#">Products</a>
          <a href="#">Services</a>
          <a href="#">Offers</a>
        </nav>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Contact</button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Dive into Delights <br /> Of Fresh <span className="text-green-600">Agro Products</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Where Every Product Tells a Story of Natural Growth and Pure Harvest.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg">Shop Now</button>
            <button className="flex items-center gap-2 text-gray-800">
              ▶ Watch Video
            </button>
          </div>
        </div>
        <div className="relative mt-10 md:mt-0">
          <img
            src="https://www.janathaagro.com/cdn/shop/files/3194-Janatha-Agro-Home-Banner-03.jpg?v=1715621427&width=3840"
            alt="Hero"
            className="w-80 h-80 object-cover rounded-full border-8 border-green-200"
          />
        </div>
      </section>

      {/* Products */}
      <section className="px-8 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Standout Agro Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="text-green-600 font-bold">{p.price}</p>
              <p className="text-yellow-500">⭐ {p.rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((c, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
              <img src={c.img} alt={c.name} className="w-20 h-20 object-cover rounded-full" />
              <p className="mt-2 font-medium">{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
        <blockquote className="italic text-gray-700">
          "The freshest agro products I've ever bought! Excellent quality and fast delivery."
        </blockquote>
        <p className="mt-2 font-semibold text-green-600">⭐ 4.9 (18k+ Reviews)</p>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 bg-green-600 text-white">
        <p>© 2025 AGRO. All rights reserved.</p>
      </footer>
    </div>
  );
}
