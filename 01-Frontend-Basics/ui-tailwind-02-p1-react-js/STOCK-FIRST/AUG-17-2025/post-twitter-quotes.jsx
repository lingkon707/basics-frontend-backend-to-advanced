import React from 'react';

const QuoteCard = () => {
  return (
    <div className="min-h-screen bg-blue-950 text-white flex items-center justify-center p-6">
      <div className="max-w-xl space-y-6 ">
        {/* Profile Header */}
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_640.jpg" // Replace with actual image path
            alt="Patrick Kyei"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">Patrick Kyei</p>
            <p className="text-gray-400">@thepatrickkyei</p>
          </div>
        </div>

        {/* Quote */}
        <div className="space-y-4 text-lg leading-relaxed">
          <p>The internet is the most unfair advantage in history.</p>
          
          <div>
            <p>You can:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Sell a $20 ebook globally</li>
              <li>Teach thousands from your bedroom</li>
              <li>Reach more people than old media giants</li>
            </ul>
          </div>

          <p>Yet most people just scroll.</p>
          <p className="font-semibold">Most people do what most people do.</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
