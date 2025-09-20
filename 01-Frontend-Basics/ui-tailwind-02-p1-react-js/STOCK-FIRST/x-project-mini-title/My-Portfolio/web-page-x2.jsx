"use client";
import React from "react";

const LuxuryITLabExpanded = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-16 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 text-yellow-400 drop-shadow-lg">
            Luxury IT Lab
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Elevating technology with innovation, precision, and elite craftsmanship. 
            Your gateway to cutting-edge IT solutions, designed to inspire and perform.
          </p>
        </section>

        {/* Info Cards */}
        <section className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-yellow-400 transition-shadow duration-500">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">State-of-the-Art Facilities</h3>
            <p className="text-gray-300">
              Our labs feature the latest hardware and software setups to empower development, testing, and innovation at the highest level.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-yellow-400 transition-shadow duration-500">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">Expert Team</h3>
            <p className="text-gray-300">
              Industry-leading engineers and designers dedicated to delivering flawless solutions tailored to your unique needs.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-yellow-400 transition-shadow duration-500">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">Innovative Solutions</h3>
            <p className="text-gray-300">
              Cutting-edge research and technology integration ensure your projects stay ahead of the curve with maximum efficiency.
            </p>
          </div>
        </section>

        {/* Payments Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 border-b border-yellow-400 w-max pb-2">
            Payments
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg max-w-4xl mx-auto text-gray-300">
            <p>
              We offer secure, fast, and flexible payment options including credit cards, PayPal, and cryptocurrency. Our systems comply with top security standards ensuring your transactions are safe and seamless.
            </p>
          </div>
        </section>

        {/* Offer Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 border-b border-yellow-400 w-max pb-2">
            Exclusive Offers
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-yellow-400 transition-shadow duration-500 text-gray-300 text-center">
              <h3 className="text-xl font-semibold mb-2">Startup Package</h3>
              <p>Special rates and resources for new businesses and entrepreneurs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-yellow-400 transition-shadow duration-500 text-gray-300 text-center">
              <h3 className="text-xl font-semibold mb-2">Enterprise Bundle</h3>
              <p>Comprehensive solutions tailored for large organizations with premium support.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-yellow-400 transition-shadow duration-500 text-gray-300 text-center">
              <h3 className="text-xl font-semibold mb-2">Seasonal Discounts</h3>
              <p>Limited-time offers on select services and packages, stay tuned!</p>
            </div>
          </div>
        </section>

        {/* Members Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 border-b border-yellow-400 w-max pb-2">
            Members
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Alice Johnson", role: "Lead Engineer", img: "https://randomuser.me/api/portraits/women/68.jpg" },
              { name: "Michael Lee", role: "UX Designer", img: "https://randomuser.me/api/portraits/men/45.jpg" },
              { name: "Sophia Patel", role: "DevOps Specialist", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "James Smith", role: "Product Manager", img: "https://randomuser.me/api/portraits/men/51.jpg" },
            ].map(({ name, role, img }, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-yellow-400 transition-shadow duration-500 cursor-default"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-yellow-400"
                />
                <h3 className="text-xl font-semibold text-yellow-400">{name}</h3>
                <p className="text-gray-300">{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Package Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 border-b border-yellow-400 w-max pb-2">
            Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-yellow-400 transition-shadow duration-500 text-gray-300">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Basic</h3>
              <p className="mb-6">
                Access to our standard IT lab resources and tools with community support.
              </p>
              <p className="text-yellow-400 font-bold text-xl">$49/month</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-yellow-400 transition-shadow duration-500 text-gray-300">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Professional</h3>
              <p className="mb-6">
                Extended resource access, priority support, and collaboration features.
              </p>
              <p className="text-yellow-400 font-bold text-xl">$129/month</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-yellow-400 transition-shadow duration-500 text-gray-300">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Enterprise</h3>
              <p className="mb-6">
                Full access, dedicated support, and tailored solutions for large teams.
              </p>
              <p className="text-yellow-400 font-bold text-xl">$499/month</p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-4xl font-bold mb-8 border-b border-yellow-400 w-max pb-2">
            Our Space
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-lg cursor-pointer group relative">
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-xl"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-14 py-4 rounded-full shadow-lg transition duration-300"
          >
            Discover More
          </a>
        </section>

      </div>
    </div>
  );
};

export default LuxuryITLabExpanded;
