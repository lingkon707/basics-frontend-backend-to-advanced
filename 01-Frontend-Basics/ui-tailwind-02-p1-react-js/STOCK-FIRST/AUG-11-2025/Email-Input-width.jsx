import React from 'react';

export default function SubscribeModal() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold">
        &times;
      </button>

      {/* Modal Content */}
      <div className="w-full max-w-xl px-6 sm:px-12 py-10">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            className="w-12 h-12 rounded-full"
            src="https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg" // Replace with real image URL
            alt="Avatar"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-serif font-semibold text-center mb-4">
          Be the first to hear about new stories <br />
          from The Success Insider
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6">
          Join Medium for free to get updates from The Success Insider sent right to your inbox.
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Create Account Button */}
        <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition">
          Create account
        </button>

        {/* Other Options */}
        <div className="text-center mt-4 text-sm">
          <a href="#" className="text-black underline">
            Other sign up options
          </a>
        </div>

        {/* Sign In */}
        <div className="text-center mt-2 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-black underline">
            Sign in
          </a>
        </div>

        {/* reCAPTCHA Text */}
        <p className="text-xs text-gray-500 text-center mt-6">
          This site is protected by reCAPTCHA Enterprise and the{' '}
          <a href="#" className="underline">
            Google Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="underline">
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </div>
    </div>
  );
}
