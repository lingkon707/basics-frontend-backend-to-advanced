"use client";
import React from "react";

const PayPalLimitIncrease = () => {
  return (
    <div className="min-h-screen bg-[#f7f9fa] flex items-center justify-center px-4">
      <div className="bg-white max-w-xl w-full rounded-xl shadow-lg p-8 md:p-10 text-center space-y-6">

        {/* Logo */}
        <div>
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal Logo"
            className="w-14 h-14 mx-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
          Your amount of instantly <br /> available funds just increased
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg">
          Good news! You’ve maintained a strong sales history and built excellent relationships with your customers.
          <br className="hidden sm:block" />
          That’s why we're increasing your monthly instant access limit to{" "}
          <span className="font-semibold text-gray-900">$11,600.00 USD</span>, up from{" "}
          <span className="font-semibold text-gray-900">$1,800.00 USD</span>.
        </p>

        {/* Link */}
        <p className="text-gray-700">
          You can{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            log in
          </a>{" "}
          anytime to check your PayPal account.
        </p>

        {/* Thank You */}
        <p className="text-gray-700 font-medium">Thanks for selling with PayPal.</p>

        {/* Bottom Logo */}
        <div>
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal Mini"
            className="w-8 mx-auto opacity-70"
          />
        </div>

        {/* Footer Links */}
        <div className="text-sm text-gray-500 flex justify-center gap-4 border-t pt-4 mt-4">
          <a href="#" className="hover:underline">Help & Contact</a>
          <span>|</span>
          <a href="#" className="hover:underline">Security</a>
          <span>|</span>
          <a href="#" className="hover:underline">Apps</a>
        </div>
      </div>
    </div>
  );
};

export default PayPalLimitIncrease;
