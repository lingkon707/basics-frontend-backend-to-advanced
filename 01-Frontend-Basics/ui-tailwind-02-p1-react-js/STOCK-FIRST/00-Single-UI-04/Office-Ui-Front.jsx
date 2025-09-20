import React from "react";

const HeroBanner = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <img
        src="https://cdn2.hubspot.net/hubfs/1583367/worker-executive-suites.jpg"
        alt="Office Hero"
        className="w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-16 text-white max-w-4xl">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Empower Your Business Office
        </h1>
        <p className="text-lg mb-6 drop-shadow-md">
          Modern workspace solutions to boost productivity & collaboration.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
