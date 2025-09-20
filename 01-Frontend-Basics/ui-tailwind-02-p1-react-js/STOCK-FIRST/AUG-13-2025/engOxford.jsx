import React from "react";

const StraightAndNarrow = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Word Origin (toggle section placeholder) */}
      <div className="bg-red-100 border-l-4 border-red-400 p-2 mb-4">
        <button className="font-semibold text-red-700">+ Word Origin</button>
      </div>

      {/* Idioms section */}
      <div className="border border-blue-300 rounded-md p-4">
        <h2 className="text-lg font-semibold text-blue-700 mb-2">Idioms</h2>

        <div className="mb-4">
          <p className="font-bold italic">the straight and narrow</p>
          <p className="text-sm text-gray-700">
            <span className="italic text-blue-600">(informal)</span> the honest
            and morally acceptable way of living
          </p>
          <p className="mt-1 text-gray-600 italic">
            His friends try to keep him on the straight and narrow.
          </p>
        </div>

        {/* Dictionary links */}
        <div className="space-y-1 text-sm">
          <a
            href="#"
            className="text-blue-600 underline hover:text-blue-800 block"
          >
            See <span className="font-semibold">narrow</span> in the Oxford
            Advanced American Dictionary
          </a>
          <a
            href="#"
            className="text-blue-600 underline hover:text-blue-800 block"
          >
            See <span className="font-semibold">narrow</span> in the Oxford
            Learner's Dictionary of Academic English
          </a>
          <a
            href="#"
            className="text-blue-600 underline hover:text-blue-800 block"
          >
            Check pronunciation: <span className="font-semibold">narrow</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StraightAndNarrow;
