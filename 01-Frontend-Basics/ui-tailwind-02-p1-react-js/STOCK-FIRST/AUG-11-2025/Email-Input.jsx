// SubscribeModal.jsx
import React from 'react';

export default function SubscribeModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl">
          &times;
        </button>

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg" // Replace with actual image URL if available
            alt="Profile"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center mb-2">
          Be the first to hear about new stories <br />
          from The Success Insider
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 mb-4">
          Join Medium for free to get updates from The Success Insider sent right to your inbox.
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Create Account Button */}
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-900">
          Create account
        </button>

        {/* Other Options */}
        <div className="text-center mt-4 text-sm">
          <a href="#" className="text-black underline">
            Other sign up options
          </a>
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-2 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-black underline">
            Sign in
          </a>
        </div>

        {/* Legal */}
        <p className="text-xs text-gray-500 text-center mt-4">
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
