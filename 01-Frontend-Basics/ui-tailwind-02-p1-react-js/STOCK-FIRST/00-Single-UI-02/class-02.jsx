import React from 'react';

const RoomCard = ({ image, title, rating, bedType, price, discount }) => (
  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
    {/* Image */}
    <div className="relative">
      <img src={image} alt={title} className="w-full h-72 object-cover" />
      {discount > 0 && (
        <div className="absolute top-4 right-4 bg-red-600 text-white text-xs py-1 px-3 rounded-full">
          {discount}% OFF
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>

      {/* Rating */}
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-400 text-lg">
          {"★".repeat(rating) + "☆".repeat(5 - rating)}
        </span>
        <span className="text-sm text-gray-600">({rating} Review)</span>
      </div>

      {/* Bed Type */}
      <p className="mt-3 text-sm text-gray-600">
        <span className="font-semibold">{bedType}</span>
      </p>

      {/* Price */}
      <div className="mt-4 flex items-baseline justify-between">
        <span className="text-2xl font-bold text-blue-600">${price}</span>
        <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-full hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

const HotelRooms = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-14">
          Luxury Class Rooms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <RoomCard
            image="https://www.avanse.com/blogs/images/smiling-woman-with-american-flag.webp"
            title="The Penthouse"
            rating={5}
            bedType="King Bed"
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
            bedType="Double Bed"
            price={90}
            discount={0}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelRooms;
