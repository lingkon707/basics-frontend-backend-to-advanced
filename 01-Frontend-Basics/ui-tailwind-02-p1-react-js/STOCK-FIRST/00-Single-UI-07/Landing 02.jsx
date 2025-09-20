import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans bg-blue-50">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-blue-600 text-white shadow-lg">
        <div className="text-3xl font-bold">compareoffers</div>
        <nav className="space-x-8 text-lg">
          <a href="#home" className="hover:text-blue-200 transition duration-300">Home</a>
          <a href="#credit-cards" className="hover:text-blue-200 transition duration-300">Credit Cards</a>
          <a href="#savings" className="hover:text-blue-200 transition duration-300">Savings</a>
          <a href="#loans" className="hover:text-blue-200 transition duration-300">Loans</a>
          <a href="#compare" className="hover:text-blue-200 transition duration-300">Compare</a>
        </nav>
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">Get Started</button>
      </header>

      {/* Main Banner */}
      <section className="bg-blue-600 text-white p-12 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 leading-tight">Your credit scores should be free.</h1>
          <p className="text-lg mb-6">For more credit offers, compare the available options and get the best deals for your financial needs.</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <input
              type="email"
              placeholder="Enter email"
              className="p-3 rounded-lg w-3/4 md:w-1/3 mb-4 md:mb-0"
            />
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">Check Now</button>
              <button className="bg-transparent text-white py-2 px-6 rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition duration-300">Continue</button>
            </div>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/female-touching-cheeks-with-finger_23-2148418628.jpg?semt=ais_hybrid&w=740&q=80" 
          alt="Friendly Person"
          className="w-64 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        />
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-blue-600">Find the financial services you need</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            { title: "Personal Loan", imgSrc: "https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" },
            { title: "Life Insurance", imgSrc: "https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" },
            { title: "Credit Card", imgSrc: "https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" },
            { title: "Student Loans", imgSrc: "https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" },
            { title: "Mortgage", imgSrc: "https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" },
            { title: "Travel Insurance", imgSrc: "https://t3.ftcdn.net/jpg/08/12/27/00/360_F_812270097_lGzqxAKeJe2mCKOT3QI80KP0fbV3fdc6.jpg" }
          ].map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105 hover:shadow-xl">
              <img src={service.imgSrc} alt={`${service.title} Icon`} className="mx-auto mb-4 w-16 h-16 rounded-full" />
              <h3 className="font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
