import React from 'react';

const LoginCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gradient-to-b from-[#101010] to-[#121212] p-8 rounded-3xl w-[360px] shadow-xl border border-[#1f1f1f] relative">
        
        <h1 className="text-3xl font-bold text-center mb-2">Pikzels <sup className="text-sm text-green-400">3.1</sup></h1>
        <p className="text-center mb-6 text-gray-300">Log in to access the Web App & start creating.</p>
        
        {/* Login Buttons */}
        <div className="flex flex-col space-y-4">
          <button className="bg-green-400 text-black font-semibold py-2 rounded-full hover:bg-green-300 transition">
            <i className="fab fa-google mr-2"></i> Log In with Google
          </button>

          <button className="bg-green-400 text-black font-semibold py-2 rounded-full hover:bg-green-300 transition">
            <i className="fab fa-discord mr-2"></i> Log In with Discord
          </button>

          <button className="bg-green-400 text-black font-semibold py-2 rounded-full hover:bg-green-300 transition">
            <i className="fab fa-apple mr-2"></i> Log In with Apple
          </button>
        </div>

        {/* User Trust */}
        <div className="text-center mt-8">
          <div className="flex justify-center space-x-1 mb-2">
            {/* Sample avatars (use placeholder or real) */}
            <img src="https://placehold.co/30x30" alt="user1" className="rounded-full border-2 border-black" />
            <img src="https://placehold.co/30x30" alt="user2" className="rounded-full border-2 border-black" />
            <img src="https://placehold.co/30x30" alt="user3" className="rounded-full border-2 border-black" />
            <img src="https://placehold.co/30x30" alt="user4" className="rounded-full border-2 border-black" />
          </div>
          <p className="text-sm text-gray-400">
            Trusted by <span className="text-white font-semibold">446,168</span> Users
          </p>
        </div>

        {/* Trustpilot */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-300">Excellent <span className="text-green-400">★★★★★</span> <span className="text-xs">Trustpilot</span></p>
        </div>

        {/* Help Link */}
        <div className="text-center mt-2 text-sm text-gray-400">
          Having trouble logging in?{" "}
          <a href="#" className="text-green-400 hover:underline">Click here</a>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
