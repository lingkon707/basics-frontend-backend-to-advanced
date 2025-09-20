import React from "react";

const Main = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-5">
      <div className="max-w-screen-lg w-full bg-white rounded-xl shadow-lg p-8">
        {/* Header/Spotlight Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Explore Our Roles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Software Engineering */}
            <div className="flex flex-col items-center bg-blue-100 p-6 rounded-xl shadow-md">
              <img
                src="https://www.fruitsmith.com/pub/media/mageplaza/blog/post/t/r/tropical-fruits-health-benefits.jpg"
                alt="Software Engineering"
                className="h-32 w-32 object-cover mb-4 rounded-full"
              />
              <h3 className="font-semibold text-xl text-gray-800">Software Engineering roles</h3>
              <p className="text-sm text-gray-600 mt-2">
                Develop the products and tools for billions of users.
              </p>
            </div>

            {/* AI and ML Roles */}
            <div className="flex flex-col items-center bg-blue-100 p-6 rounded-xl shadow-md">
              <img
                src="https://www.fruitsmith.com/pub/media/mageplaza/blog/post/t/o/top-health-benefits-of-papaya-fruits.jpg"
                alt="AI and ML"
                className="h-32 w-32 object-cover mb-4 rounded-full"
              />
              <h3 className="font-semibold text-xl text-gray-800">AI and ML roles</h3>
              <p className="text-sm text-gray-600 mt-2">
                Search some of our newest, priority roles in AI and machine learning.
              </p>
            </div>

            {/* Google Cloud Sales */}
            <div className="flex flex-col items-center bg-blue-100 p-6 rounded-xl shadow-md">
              <img
                src="https://www.fruitsmith.com/pub/media/mageplaza/blog/post/h/e/health-benefits-of-mango-for-skin-digestion-immunity.jpg"
                alt="Google Cloud Sales"
                className="h-32 w-32 object-cover mb-4 rounded-full"
              />
              <h3 className="font-semibold text-xl text-gray-800">Google Cloud Sales roles</h3>
              <p className="text-sm text-gray-600 mt-2">
                Transform businesses with Google’s software products, shaping the future of workplaces.
              </p>
            </div>

            {/* Account Management */}
            <div className="flex flex-col items-center bg-blue-100 p-6 rounded-xl shadow-md">
              <img
                src="https://www.fruitsmith.com/pub/media/mageplaza/blog/post/a/u/autumn_season_fruits_and_vegetables.jpg"
                alt="Account Management"
                className="h-32 w-32 object-cover mb-4 rounded-full"
              />
              <h3 className="font-semibold text-xl text-gray-800">Account Management roles</h3>
              <p className="text-sm text-gray-600 mt-2">
                Own account and campaign management, delivering exceptional performance and service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
