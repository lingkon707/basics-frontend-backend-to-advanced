import React from "react";

const Experience = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-screen-xl flex items-center justify-between space-x-10 p-8">
        {/* Left Section: Image */}
        <div className="w-1/2">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src="https://inversweb.com/product/html/reeni/assets/images/experiences/expert-img-two.jpg"
            alt="Experience Image"
          />
        </div>

        {/* Right Section: Text */}
        <div className="w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Experiences</h2>

          <div>
            <h3 className="text-xl font-semibold text-red-500">Experience</h3>
            <p className="text-xl font-semibold">Fatima Asrafy</p>
            <p className="text-lg text-gray-600">UI/UX Designer</p>
            <p className="text-base text-gray-500 mt-2">
              Duis aute irure dolor in reprehenderitit in voluptate velit esse
              cillum desi dolore eu fugiat nulla pariatur Duis aute irure
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-500">Experience</h3>
            <p className="text-xl font-semibold">Fatima Asrafy</p>
            <p className="text-lg text-gray-600">UI/UX Designer</p>
            <p className="text-base text-gray-500 mt-2">
              Interested in working together? Let’s bring your ideas to life!
              Contact me, and let’s start building something.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
