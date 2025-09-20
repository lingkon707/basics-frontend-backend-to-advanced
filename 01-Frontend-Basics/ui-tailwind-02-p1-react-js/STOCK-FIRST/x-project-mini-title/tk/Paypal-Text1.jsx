"use client";
import React from "react";

const PayPalLimitIncrease = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-2xl shadow-md rounded-md p-8 text-center">
        {/* PayPal Logo */}
        <div className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
            alt="PayPal"
            className="w-12 mx-auto"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Your amount of instantly <br /> available funds just increased
        </h1>

        {/* Message */}
        <p className="text-gray-700 mb-4">
          Good news! We noticed that you’ve maintained a consistent sales
          history and developed great relationships with your customers.
          That's why we’re giving you instant access to{" "}
          <strong>$11,600.00 USD</strong> in sales per month, up from{" "}
          <strong>$1,800.00 USD</strong>.
        </p>

        {/* Login Link */}
        <p className="text-gray-700 mb-4">
          You can{" "}
          <a href="#" className="text-blue-600 hover:underline">
            log in
          </a>{" "}
          at any time to see your PayPal account details.
        </p>

        {/* Footer */}
        <p className="text-gray-700">Thanks for selling with PayPal.</p>

        {/* PayPal Logo Bottom */}
        <div className="mt-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
            alt="PayPal"
            className="w-10 mx-auto"
          />
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-sm text-gray-500 flex justify-center gap-4">
          <a href="#" className="hover:underline">
            Help & Contact
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Security
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Apps
          </a>
        </div>
      </div>
    </div>
  );
};

export default PayPalLimitIncrease;
