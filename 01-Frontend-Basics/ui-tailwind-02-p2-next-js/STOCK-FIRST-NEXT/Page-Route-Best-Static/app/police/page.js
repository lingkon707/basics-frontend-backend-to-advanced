'use client';

import React from "react";
import { useRouter } from "next/navigation";

const PolicePage = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(`/police/${path}`);
  };

  return (
    <div className="mx-10 my-10">
      <h1 className="text-xl font-semibold mb-4">Police Dashboard</h1>

      <button
        onClick={() => handleNavigation('august')}
        className="bg-purple-600 text-white text-sm px-4 py-1 rounded hover:bg-purple-700"
      >
        August
      </button>
    </div>
  );
};

export default PolicePage;
