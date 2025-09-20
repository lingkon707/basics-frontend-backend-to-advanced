import React from 'react';

const LoginCard = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-gradient-to-b from-[#101010] to-[#181818] rounded-3xl shadow-2xl p-10 text-white border border-[#2a2a2a]">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Pikzels <sup className="text-green-400 text-sm">3.1</sup></h1>
          <p className="text-gray-400 text-sm">Log in to access the Web App & start creating.</p>
        </div>

        {/* Login Buttons */}
        <div className="flex flex-col space-y-5">
          <button className="bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-300 transition w-full shadow-md">
            <i className="fab fa-google mr-2"></i> Log In with Google
          </button>

          <button className="bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-300 transition w-full shadow-md">
            <i className="fab fa-discord mr-2"></i> Log In with Discord
          </button>

          <button className="bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-300 transition w-full shadow-md">
            <i className="fab fa-apple mr-2"></i> Log In with Apple
          </button>
        </div>

        {/* User Trust */}
        <div className="text-center mt-10">
          <div className="flex justify-center space-x-2 mb-3">
            {/* Placeholder avatars */}
            {[1, 2, 3, 4].map((_, i) => (
              <img key={i} src={`https://placehold.co/40x40?text=U${i + 1}`} alt="user" className="rounded-full border-2 border-black w-10 h-10" />
            ))}
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
        <div className="text-center mt-3 text-sm text-gray-400">
          Having trouble logging in?{" "}
          <a href="#" className="text-green-400 hover:underline">Click here</a>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
