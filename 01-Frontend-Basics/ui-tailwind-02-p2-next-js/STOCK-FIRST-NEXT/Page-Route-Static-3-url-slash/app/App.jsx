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
      

      <div className="flex gap-3">
        <button
          onClick={() => handleNavigation('police')}
          className="bg-blue-600 text-white text-sm px-4 py-1 rounded hover:bg-blue-700"
        >
          Police
        </button>

        
        
      </div>
    </div>
  );
};

export default LoginPage;
