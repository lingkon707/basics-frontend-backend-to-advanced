import React from "react";

export default function LogoDesignToolPromo() {
  return (
    <section className="max-w-7xl mx-auto p-12 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="md:w-1/2 text-gray-900 space-y-8">
        <h2 className="text-4xl font-extrabold leading-tight">
          Head over to our <span className="text-pink-600">logo design tool</span> and start browsing thousands of professionally crafted templates.
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Explore by industry, style, or even by visual elements to find a design that perfectly matches your brand’s vibe.
        </p>
        <a
          href="#"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          role="button"
          tabIndex={0}
        >
          Start Designing
        </a>
      </div>

      {/* Images */}
      <div className="md:w-1/2 flex flex-col gap-8">
        <img
          src="https://graphicsfamily.com/wp-content/uploads/2020/08/Company-Logo-Design-on-3d-glass-window-1180x664.jpg"
          alt="3D Glass Logo Design"
          className="rounded-3xl shadow-2xl object-cover w-full h-56 md:h-72 hover:scale-105 transition-transform duration-300 cursor-pointer"
          loading="lazy"
          draggable={false}
        />
        <img
          src="https://t4.ftcdn.net/jpg/00/24/48/79/360_F_24487944_nxBNrSS0tJjzuCOF4gaULZ3xdR0ef5tJ.jpg"
          alt="Logo Design Tools"
          className="rounded-3xl shadow-2xl object-cover w-full h-56 md:h-72 hover:scale-105 transition-transform duration-300 cursor-pointer"
          loading="lazy"
          draggable={false}
        />
      </div>
    </section>
  );
}
