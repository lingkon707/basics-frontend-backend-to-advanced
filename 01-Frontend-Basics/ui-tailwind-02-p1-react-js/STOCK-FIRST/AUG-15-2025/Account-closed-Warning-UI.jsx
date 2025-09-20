import React from 'react';

const PolicyStatusPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Policy status</h1>
        <a href="#" className="text-blue-500 text-sm hover:underline">Learn more</a>
      </div>

      {/* Summary Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          {/* Alert Icon */}
          <span className="text-red-600 text-3xl mr-4">⚠️</span>
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Account closed</h2>
            <p className="text-gray-500 text-sm">Closed on Oct 8, 2024, 6:32 PM</p>
          </div>
        </div>

        {/* Other Information */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="font-semibold text-gray-700">Warning sent</p>
            <p className="text-gray-500">Aug 1, 2024</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Warning deadline</p>
            <p className="text-gray-500">Sep 30, 2024</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Details</h3>
          <p className="text-gray-600">
            Your developer account has been closed because information about this policy were sent to the account holding admin permission.
          </p>
          <p className="text-gray-600 mt-2">
            The developer account registration fee is not refunded. If you'd like to continue using Google Play, create a new account.
          </p>
          <a href="#" className="text-blue-500 text-sm hover:underline mt-2 block">
            For more information, visit the Help Center.
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center text-sm text-gray-500 mt-6">
        <p>© 2024 Google</p>
        <div>
          <a href="#" className="hover:underline mr-4">Mobile app</a>
          <a href="#" className="hover:underline mr-4">Status Dashboard</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default PolicyStatusPage;
