"use client";
import React from "react";

const PayPalUpdateModern = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl p-8 rounded-2xl backdrop-blur-sm bg-white/80 shadow-xl border border-blue-100">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal"
            className="w-16 h-16"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-6 leading-snug">
          Instantly Available Funds Increased!
        </h1>

        {/* Message */}
        <p className="text-gray-700 text-lg text-center mb-4">
          You’ve maintained excellent sales and customer relationships.
        </p>
        <p className="text-gray-800 text-center text-base">
          Your monthly instant access has been raised to{" "}
          <span className="font-semibold text-blue-700">$11,600.00 USD</span>, up from{" "}
          <span className="font-semibold text-gray-900">$1,800.00 USD</span>.
        </p>

        {/* CTA */}
        <div className="text-center mt-6">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Log In to View Account
          </a>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t pt-4 text-sm text-gray-500 text-center">
          <p>Thanks for selling with PayPal.</p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#" className="hover:underline">Help & Contact</a>
            <span>|</span>
            <a href="#" className="hover:underline">Security</a>
            <span>|</span>
            <a href="#" className="hover:underline">Apps</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayPalUpdateModern;
