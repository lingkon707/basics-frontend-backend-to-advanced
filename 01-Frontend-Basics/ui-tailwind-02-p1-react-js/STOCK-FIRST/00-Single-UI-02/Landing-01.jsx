import React from 'react';

const DestinationCard = ({ image, title, toursCount, description }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute bottom-0 p-4 text-white z-10">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
      <span className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full">{toursCount} tours</span>
    </div>
  </div>
);

const TourPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="text-xl font-bold">Software Tour</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700">Pages</a>
          <a href="#" className="text-gray-700">Tour List</a>
          <a href="#" className="text-gray-700">Room List</a>
          <a href="#" className="text-gray-700">Tour Search</a>
          <a href="#" className="text-gray-700">Blog</a>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">USD</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
        </div>
      </header>

      {/* Tour Grid */}
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <DestinationCard
          image="https://iulianionescu.com/wp-content/uploads/best-apps-phone-apps-1024x717.jpg"
          title="Best Apps"
          toursCount={3}
          description="Explore the top-rated mobile applications."
        />
        <DestinationCard
          image="https://fluentsupport.com/wp-content/uploads/2022/10/Popular-communication-apps-for-customer-support-min.png"
          title="Communication Apps"
          toursCount={2}
          description="Discover popular communication tools for customer support."
        />
        <DestinationCard
          image="https://miro.medium.com/v2/resize:fit:1200/1*0Ci3yW0tSeYmTqc-eSblmw.jpeg"
          title="Super Apps"
          toursCount={2}
          description="Learn about all-in-one super applications."
        />
        <DestinationCard
          image="https://madison-technologies.com/wp-content/uploads/2024/11/super-apps-2.png"
          title="Super Apps 2"
          toursCount={3}
          description="Dive deeper into the world of super applications."
        />
        <DestinationCard
          image="https://www.apple.com/lae/app-store/images/meta/og__c59t0pflacq6.png"
          title="App Store"
          toursCount={5}
          description="Explore the Apple App Store's offerings."
        />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Travel Tour. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TourPage;
