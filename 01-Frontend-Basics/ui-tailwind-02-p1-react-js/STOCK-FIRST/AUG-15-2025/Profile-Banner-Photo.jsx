import React from 'react';

const profileData = {
  profileImage: "https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_640.jpg",
  coverImage: "https://img.freepik.com/premium-psd/psd-professional-youtube-banner-cover-psd-template_1014248-13.jpg?w=740&q=80"
};

const ProfilePage = () => {
  return (
    <div className="max-w-full bg-gray-50 p-8">
      <div className="relative mb-8">
        {/* Cover Image */}
        <img 
          src={profileData.coverImage} 
          alt="Cover" 
          className="w-full h-48 object-cover rounded-lg shadow-lg"
        />
        {/* Profile Image */}
        <div className="absolute top-32 left-8">
          <img 
            src={profileData.profileImage} 
            alt="Profile" 
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* User Information */}
      <div className="mt-36">
        <div className="grid grid-cols-2 gap-8 mb-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">First Name</label>
            <input type="text" placeholder="Enter your first name" className="mt-1 p-3 rounded-lg bg-gray-100" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Last Name</label>
            <input type="text" placeholder="Enter your last name" className="mt-1 p-3 rounded-lg bg-gray-100" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Email</label>
            <input type="email" placeholder="Enter your email" className="mt-1 p-3 rounded-lg bg-gray-100" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Phone Number</label>
            <input type="text" placeholder="Enter your phone number" className="mt-1 p-3 rounded-lg bg-gray-100" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Address</label>
            <input type="text" placeholder="Enter your address" className="mt-1 p-3 rounded-lg bg-gray-100" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Gender</label>
            <input type="text" placeholder="Enter your gender" className="mt-1 p-3 rounded-lg bg-gray-100" />
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
