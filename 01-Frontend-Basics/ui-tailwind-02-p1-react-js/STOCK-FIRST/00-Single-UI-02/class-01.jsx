import React from 'react';

const RoomCard = ({ image, title, rating, bedType, price, discount }) => (
  <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    {discount && (
      <div className="absolute top-4 right-4 bg-red-600 text-white text-xs py-1 px-3 rounded-full">
        {discount}% OFF
      </div>
    )}
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
        <span className="text-sm text-gray-600">({rating} Review)</span>
      </div>
      <div className="mt-3 text-sm text-gray-600">
        <span className="font-semibold">{bedType}</span>
      </div>
      <div className="mt-4">
        <span className="text-lg font-semibold text-gray-800">From ${price}</span>
      </div>
    </div>
  </div>
);

const HotelRooms = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">Class Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <RoomCard
            image="https://www.avanse.com/blogs/images/smiling-woman-with-american-flag.webp"
            title="The Penthouse"
            rating={5}
            bedType="King Beds"
            price={200}
            discount={0}
          />
          <RoomCard
            image="https://www.avanse.com/blogs/images/smiling-woman-with-american-flag.webp"
            title="Grand Suite Room"
            rating={4}
            bedType="Double Beds"
            price={150}
            discount={20}
          />
          <RoomCard
            image="https://www.avanse.com/blogs/images/smiling-woman-with-american-flag.webp"
            title="Junior Suite Room"
            rating={4}
            bedType="Double Beds"
            price={79}
            discount={0}
          />
          <RoomCard
            image="https://www.avanse.com/blogs/images/smiling-woman-with-american-flag.webp"
            title="Standard Room"
            rating={3}
            bedType="Double Beds"
            price={90}
            discount={0}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelRooms;
