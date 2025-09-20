import React from 'react';

const QuoteCard = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="bg-neutral-900 max-w-2xl w-full rounded-2xl p-8 shadow-lg space-y-8">
        
        {/* Quote Content */}
        <div className="space-y-6 text-xl leading-relaxed">
          <p className="text-2xl font-bold">The internet is the most unfair advantage in history.</p>

          <div>
            <p className="font-semibold text-white/90">You can:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Sell a $20 ebook globally</li>
              <li>Teach thousands from your bedroom</li>
              <li>Reach more people than old media giants</li>
            </ul>
          </div>

          <p className="text-white/80">Yet most people just scroll.</p>
          <p className="font-semibold text-white">Most people do what most people do.</p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20"></div>

        {/* Profile Footer */}
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_640.jpg"
            alt="Patrick Kyei"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-lg">Patrick Kyei</p>
            <p className="text-gray-400">@thepatrickkyei</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
