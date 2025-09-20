import React from "react";

const ResearchSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Title and Description */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Driving innovation and resilience through our research
          </h2>
          <p className="text-lg text-gray-600">
            We’re partnering with cities, researchers, governments, and businesses on new technology to effect meaningful systemic change and improve the lives of billions of people.
          </p>
        </div>

        {/* Grid of Images and Text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-gray-100 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://iulianionescu.com/wp-content/uploads/best-apps-phone-apps-1024x717.jpg" // Example image URL
              alt="Enabling airlines to reduce contrails"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Enabling airlines to reduce contrails
              </h3>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gray-100 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://fluentsupport.com/wp-content/uploads/2022/10/Popular-communication-apps-for-customer-support-min.png" // Example image URL
              alt="Helping firefighters detect wildfires earlier"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Helping firefighters detect wildfires earlier
              </h3>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gray-100 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*0Ci3yW0tSeYmTqc-eSblmw.jpeg" // Example image URL
              alt="Applying AI for more efficient city streets"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Applying AI for more efficient city streets
              </h3>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
