import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans bg-blue-50">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <div className="text-2xl font-bold">compareoffers</div>
        <nav className="space-x-6 text-lg">
          <a href="#home" className="hover:text-blue-200">Home</a>
          <a href="#credit-cards" className="hover:text-blue-200">Credit Cards</a>
          <a href="#savings" className="hover:text-blue-200">Savings</a>
          <a href="#loans" className="hover:text-blue-200">Loans</a>
          <a href="#compare" className="hover:text-blue-200">Compare</a>
        </nav>
        <button className="bg-white text-blue-600 py-2 px-6 rounded-lg hover:bg-blue-100">Get Started</button>
      </header>

      {/* Main Banner */}
      <section className="bg-blue-600 text-white p-12 flex justify-between items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Your credit scores should be free.</h1>
          <p className="text-lg mb-6">For more credit offers, compare the available options and get the best deals for your financial needs.</p>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Enter email"
              className="p-3 rounded-lg w-1/3"
            />
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg">Check Now</button>
            <button className="bg-transparent text-white py-2 px-4 rounded-lg border border-white">Continue</button>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/female-touching-cheeks-with-finger_23-2148418628.jpg?semt=ais_hybrid&w=740&q=80" // Replace with actual image URL
          alt="Friendly Person"
          className="w-64 rounded-lg shadow-lg"
        />
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">Find the financial services you need</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 px-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <img src="https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" alt="Personal Loan Icon" className="mx-auto" />
            </div>
            <h3 className="font-semibold">Personal Loan</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <img src="https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" alt="Life Insurance Icon" className="mx-auto" />
            </div>
            <h3 className="font-semibold">Life Insurance</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <img src="https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" alt="Credit Card Icon" className="mx-auto" />
            </div>
            <h3 className="font-semibold">Credit Card</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <img src="https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" alt="Student Loan Icon" className="mx-auto" />
            </div>
            <h3 className="font-semibold">Student Loans</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <img src="https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" alt="Mortgage Icon" className="mx-auto" />
            </div>
            <h3 className="font-semibold">Mortgage</h3>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <img src="https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" alt="Travel Insurance Icon" className="mx-auto" />
            </div>
            <h3 className="font-semibold">Travel Insurance</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
