import React from 'react';

const VideoCallUI = () => {
  return (
    <div className="min-h-screen bg-purple-700 flex justify-center items-center p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg relative">
        {/* Video Call Screen */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1612541122840-bf7071c968a2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" 
            alt="Video Call" 
            className="w-full h-auto object-cover rounded-t-lg"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-t-lg"></div>

          {/* User's Name */}
          <div className="absolute bottom-8 inset-x-0 text-center text-white">
            <h2 className="text-xl font-semibold">John Doe</h2>
          </div>
        </div>

        {/* Call Controls */}
        <div className="flex justify-center items-center p-4 space-x-4">
          {/* Mute Button */}
          <button className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition">
            <i className="fas fa-microphone-slash"></i>
          </button>

          {/* End Call Button */}
          <button className="p-3 bg-red-600 rounded-full text-white hover:bg-red-700 transition">
            <i className="fas fa-phone-alt"></i>
          </button>

          {/* Video Button */}
          <button className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition">
            <i className="fas fa-video-slash"></i>
          </button>

          {/* Screen Share Button */}
          <button className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition">
            <i className="fas fa-desktop"></i>
          </button>

          {/* Camera Toggle Button */}
          <button className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition">
            <i className="fas fa-camera"></i>
          </button>
        </div>

        {/* Chat Button */}
        <div className="flex justify-center p-4">
          <button className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition">
            <i className="fas fa-comment-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCallUI;
