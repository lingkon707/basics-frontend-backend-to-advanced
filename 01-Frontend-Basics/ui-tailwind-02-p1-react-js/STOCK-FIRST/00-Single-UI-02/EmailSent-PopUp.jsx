import React, { useState } from 'react';

const SpecialDealsSection = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setEmail('');
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-100 to-teal-200 py-16 min-h-screen">
      {/* Subscription Card */}
      <div className="bg-white p-8 rounded-xl shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Subscribe for Special Deals
        </h1>

        <form onSubmit={handleSubscribe} className="flex flex-col">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Your Email Address"
            className="border-2 border-gray-300 rounded-lg p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
            required
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 ease-in-out shadow-lg hover:scale-110"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-80 text-center animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Thank you for subscribing
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for subscribing with <b>{email}</b>
            </p>
            <button
              onClick={handleClosePopup}
              className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialDealsSection;
