import React from "react";

const SecurityDoorAccessories = () => {
  return (
    <section className="bg-blue-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
        {/* Left Image */}
        <div className="w-full md:w-1/3">
          <img
            src="https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20257/ffa91215eddb0386c037ce126e597a99.jpg"
            alt="Security Door Accessory 1"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
            loading="lazy"
          />
        </div>

        {/* Middle Content */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-3xl font-semibold text-gray-900 mb-5">
            Security Doors Accessories
          </h3>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Our line of security door accessories includes a wide range of both
            standard and customised products tailored to your specific
            requirements. Quality and security combined in every piece.
          </p>
          <button
            type="button"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 font-medium"
          >
            More Info
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3">
          <img
            src="https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/8a139e159b4f23e620bf3e86da2718a2.jpg"
            alt="Security Door Accessory 2"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default SecurityDoorAccessories;
