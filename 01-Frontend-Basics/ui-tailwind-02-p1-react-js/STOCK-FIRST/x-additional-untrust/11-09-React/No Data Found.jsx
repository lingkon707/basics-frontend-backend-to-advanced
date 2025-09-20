import React from "react";

const NoDataFoundCircle = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center rounded-full border-8 border-dashed border-gray-300 w-64 h-64 bg-white shadow-lg hover:border-gray-400 transition cursor-default">
        {/* Optional SVG icon */}
        <svg
          className="w-20 h-20 mb-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="2" />
        </svg>
        <p className="text-gray-500 text-xl font-semibold">No Data Found</p>
      </div>
    </div>
  );
};

export default NoDataFoundCircle;
