import React from 'react';

const SignupCard = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-gradient-to-b from-[#101010] to-[#181818] rounded-3xl shadow-2xl p-10 text-white border border-[#2a2a2a]">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-400 text-sm">Create your account to start using Pikzels.</p>
        </div>

        {/* Signup Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-full bg-[#1e1e1e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-full bg-[#1e1e1e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-full bg-[#1e1e1e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-300 transition w-full shadow-md"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-500 text-sm">or sign up with</div>

        {/* Social Signup Buttons */}
        <div className="flex flex-col space-y-4">
          <button className="bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-300 transition w-full shadow-md">
            <i className="fab fa-google mr-2"></i> Sign Up with Google
          </button>
          <button className="bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-300 transition w-full shadow-md">
            <i className="fab fa-discord mr-2"></i> Sign Up with Discord
          </button>
          <button className="bg-green-400 text-black font-semibold py-3 rounded-full hover:bg-green-300 transition w-full shadow-md">
            <i className="fab fa-apple mr-2"></i> Sign Up with Apple
          </button>
        </div>

        {/* Already have account */}
        <div className="text-center mt-6 text-sm text-gray-400">
          Already have an account?{" "}
          <a href="#" className="text-green-400 hover:underline">Log in here</a>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
