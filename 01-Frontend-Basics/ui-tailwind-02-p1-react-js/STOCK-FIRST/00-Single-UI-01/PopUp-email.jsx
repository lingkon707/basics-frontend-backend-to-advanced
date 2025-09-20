import React, { useState } from 'react';

const SubscriptionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleSubscribe = () => {
    // Handle the subscription logic here (e.g., send email to backend)
    alert(`Subscribed with email: ${email}`);
    setIsOpen(false);
  };

  const closeModal = () => {
    if (dontShowAgain) {
      // Save the preference in localStorage (so it doesn't show the popup again)
      localStorage.setItem('dontShowPopup', 'true');
    }
    setIsOpen(false);
  };

  if (localStorage.getItem('dontShowPopup') === 'true') {
    return null; // Don't show the popup again if user opted out
  }

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
          <div className="flex justify-end">
            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-lg">
              &times;
            </button>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">Become a subscriber</h2>
          <p className="text-center mb-4">Subscribe to get the notification of latest posts</p>
          
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleSubscribe}
              className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={() => setDontShowAgain(!dontShowAgain)}
                id="dont-show-again"
                className="form-checkbox"
              />
              <label htmlFor="dont-show-again" className="text-sm text-gray-700">
                Don&apos;t show this popup again
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SubscriptionModal;
