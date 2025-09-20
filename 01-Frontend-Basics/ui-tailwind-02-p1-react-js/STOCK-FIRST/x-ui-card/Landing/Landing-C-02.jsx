import React from "react";

const MutualFundsPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-end p-6 bg-blue-900 text-white text-sm space-x-8">
        <a href="#" className="hover:underline">HOME</a>
        <a href="#" className="hover:underline">CONTACT</a>
        <a href="#" className="hover:underline">ABOUT</a>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white pb-20 pt-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          {/* Left text */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              MEET YOUR FUTURE <br /> GOALS WITH MUTUAL FUNDS
            </h1>
            <p className="text-sm md:text-base text-blue-200 max-w-md">
              Invest in best Equity Linked Savings Scheme to save taxes.
              Grow your money by investing in our best Mutual Funds.
            </p>
            <div className="space-x-4">
              <button className="bg-green-600 hover:bg-green-700 transition text-sm md:text-base px-6 py-2 rounded-full font-semibold">
                SAVE TAXES
              </button>
              <button className="bg-green-500 hover:bg-green-600 transition text-sm md:text-base px-6 py-2 rounded-full font-semibold">
                GROW MONEY
              </button>
            </div>
          </div>

          {/* Right illustration */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
            {/* Blue curved shape */}
            <svg
              className="absolute bottom-0 right-0 w-full h-48 md:h-64 text-blue-900"
              viewBox="0 0 1440 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M0,224L40,218.7C80,213,160,203,240,202.7C320,203,400,213,480,197.3C560,181,640,139,720,133.3C800,128,880,160,960,192C1040,224,1120,256,1200,245.3C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              />
            </svg>

            {/* Illustration: boy watering tree */}
            <div className="relative z-10 w-48 h-48 md:w-64 md:h-64">
              {/* Simplified illustration with SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="w-full h-full text-white"
              >
                {/* Tree */}
                <circle cx="32" cy="40" r="10" fill="#2C9C69" />
                <rect x="30" y="50" width="4" height="10" fill="#7B4B00" />
                {/* Person */}
                <circle cx="45" cy="35" r="5" fill="#FFC0A3" />
                <rect x="42" y="40" width="6" height="10" fill="#E65100" />
                {/* Watering can */}
                <rect x="36" y="45" width="7" height="4" fill="#3A96DD" />
                <line x1="39" y1="48" x2="32" y2="45" stroke="#3A96DD" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Saving Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-20">
        <h2 className="text-center font-semibold text-lg mb-12">
          KNOW <span className="border-b-2 border-green-600">ABOUT TAX SAVING</span>
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-12 space-y-10 md:space-y-0 justify-center items-center">
          {/* Left column */}
          <div className="md:w-1/3 text-sm space-y-8 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900">Invest in ELSS</h3>
              <p className="mt-1 text-xs">
                These are tax-saving mutual funds that you can use to save income tax of up to ₹1.5 lakh under Section 80C.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Lowest lock-in of 3 years</h3>
              <p className="mt-1 text-xs">
                ELSS offer the lowest lock-in period among other tax saving options.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Higher interest rate</h3>
              <p className="mt-1 text-xs">
                ELSS give 2x higher interest rates (14-16%) than FD/PPF (7-8%).
              </p>
            </div>
            <div>
              <p className="text-xs mt-6">
                Compare your returns in ELSS with other schemes
                <br />
                <span className="font-bold">Investment per month for 5 years</span>
              </p>
            </div>
          </div>

          {/* Middle icon column */}
          <div className="md:w-1/3 flex flex-col items-center space-y-6">
            {/* Cloud with rain */}
            <svg width="60" height="50" fill="none" stroke="#2C9C69" strokeWidth="2" viewBox="0 0 64 50">
              <ellipse cx="30" cy="20" rx="20" ry="12" fill="#C1E6DC" />
              <line x1="25" y1="40" x2="25" y2="50" />
              <line x1="35" y1="40" x2="35" y2="50" />
              <line x1="45" y1="40" x2="45" y2="50" />
            </svg>

            {/* Tree */}
            <svg width="60" height="60" fill="none" stroke="#2C9C69" strokeWidth="2" viewBox="0 0 64 64">
              <circle cx="32" cy="40" r="14" fill="#2C9C69" />
              <rect x="28" y="50" width="8" height="12" fill="#7B4B00" />
            </svg>
          </div>

          {/* Right column */}
          <div className="md:w-1/3 text-sm space-y-8 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900">When is tax applicable</h3>
              <p className="mt-1 text-xs">
                Returns are taxable @10% if gains are greater than ₹1 lakh in the ELSS mutual funds.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Begin from ₹1000</h3>
              <p className="mt-1 text-xs">
                Invest as low as Rs 1000 per month to no maximum investment limit.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Other benefits</h3>
              <p className="mt-1 text-xs">
                Will give inflation-beating returns. Best option for long-term wealth.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-14 bg-white shadow-lg rounded-lg max-w-md mx-auto p-6 text-sm text-gray-700">
          <div className="flex justify-between border-b border-gray-300 py-2 font-semibold">
            <span>Bank fixed deposit</span>
            <span className="text-green-600">₹ 8,00,000</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 py-2 font-semibold">
            <span>Public Provident Fund</span>
            <span className="text-green-600">₹ 8,50,000</span>
          </div>
          <div className="flex justify-between pt-2 font-semibold bg-green-600 text-white rounded-b-md px-4 py-3">
            <span>ELSS</span>
            <span>₹ 10,00,000</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MutualFundsPage;
