import React from 'react';

const QuotePlannerLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* Horizontal Sidebar/Header */}
      <header className="bg-neutral-900 w-full flex items-center px-6 py-4 space-x-4 overflow-x-auto">
        <img
          src="https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_640.jpg"
          alt="Patrick Kyei"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-semibold">Patrick Kyei</p>
          <p className="text-gray-400 text-sm">@thepatrickkyei</p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-1 p-8 flex justify-center items-start">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-7 gap-6">
          
          {/* Each "day" block */}
          <div className="col-span-7 space-y-6 text-lg leading-relaxed">
            <p className="text-2xl font-bold">
              The internet is the most unfair advantage in history.
            </p>

            <div>
              <p className="font-semibold">You can:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Sell a $20 ebook globally</li>
                <li>Teach thousands from your bedroom</li>
                <li>Reach more people than old media giants</li>
              </ul>
            </div>

            <p className="text-white/80">Yet most people just scroll.</p>
            <p className="font-semibold text-white">
              Most people do what most people do.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuotePlannerLayout;
