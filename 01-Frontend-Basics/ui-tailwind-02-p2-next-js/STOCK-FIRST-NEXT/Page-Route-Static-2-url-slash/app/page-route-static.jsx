'use client';

import React from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(`/${path}`);
  };

  return (
    <div className="mx-10 my-10">
      <h1 className="text-xl font-semibold mb-4">Select User</h1>

      <div className="flex gap-3">
        <button
          onClick={() => handleNavigation('police')}
          className="bg-blue-600 text-white text-sm px-4 py-1 rounded hover:bg-blue-700"
        >
          Police
        </button>

        <button
          onClick={() => handleNavigation('court')}
          className="bg-green-600 text-white text-sm px-4 py-1 rounded hover:bg-green-700"
        >
          Court
        </button>

        <button
          onClick={() => handleNavigation('cia')}
          className="bg-red-600 text-white text-sm px-4 py-1 rounded hover:bg-red-700"
        >
          CIA
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
