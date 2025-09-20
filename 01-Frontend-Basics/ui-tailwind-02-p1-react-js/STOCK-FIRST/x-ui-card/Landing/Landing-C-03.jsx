import React from "react";

const Zero = () => {
  return (
    <div class="min-h-screen bg-white font-sans text-gray-900">
      <nav class="flex justify-end p-6 bg-blue-900 text-white text-sm space-x-8">
        <a href="#" class="hover:underline">
          HOME
        </a>
        <a href="#" class="hover:underline">
          CONTACT
        </a>
        <a href="#" class="hover:underline">
          ABOUT
        </a>
      </nav>

      <section class="relative bg-blue-900 text-white pb-20 pt-24 px-6 md:px-20">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          <div class="md:w-1/2 space-y-6">
            <h1 class="text-3xl md:text-4xl font-bold leading-tight">
              MEET YOUR FUTURE <br /> GOALS WITH MUTUAL FUNDS
            </h1>
            <p class="text-sm md:text-base text-blue-200 max-w-md">
              Invest in best Equity Linked Savings Scheme to save taxes. Grow
              your money by investing in our best Mutual Funds.
            </p>
            <div class="space-x-4">
              <button class="bg-green-600 hover:bg-green-700 transition text-sm md:text-base px-6 py-2 rounded-full font-semibold">
                SAVE TAXES
              </button>
              <button class="bg-green-500 hover:bg-green-600 transition text-sm md:text-base px-6 py-2 rounded-full font-semibold">
                GROW MONEY
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Zero;
