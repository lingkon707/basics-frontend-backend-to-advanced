import React from 'react';

const MetroOpinion = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-16 px-6 bg-gray-100">
      {/* Left Image */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img
          src="https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/11/IIMK-ASMP-1024x576.jpg.optimal.jpg" // replace with actual image URL
          alt="Happy person working on laptop"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 text-left lg:pl-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Earn money online – it is easy with MetroOpinion
        </h2>
        <p className="text-gray-700 mb-6">
          Earning money online is quite easy with surveys from MetroOpinion.
        </p>
        <p className="text-gray-700 mb-6">
          We have optimized our software to find the most relevant surveys. More relevant surveys means more money for you.
        </p>
        <p className="text-gray-700 mb-6">
          When we find a perfect survey for you, we will send you an invitation via email. It is important that you sign up with your primary email address. Registering with the email address you use regularly is the best way to earn money. If you do not participate when invited, the invitation will go to another member of MetroOpinion.
        </p>
        <p className="text-gray-700 mb-6">
          Payment is easy with MetroOpinion. You can choose between multiple payment options. We have thousands of happy members of MetroOpinion that have received money from us.
        </p>
        <p className="text-gray-700 mb-6">
          It is fun to earn money with MetroOpinion. Companies use your answers to create better products. This means your answers make a difference.
        </p>
      </div>
    </div>
  );
};

export default MetroOpinion;
