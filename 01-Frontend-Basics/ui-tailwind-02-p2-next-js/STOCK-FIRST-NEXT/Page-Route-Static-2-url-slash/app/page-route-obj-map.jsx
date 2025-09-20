'use client';

import React from "react";
import { useRouter } from "next/navigation";

const users = [
  { username: "police" },
  { username: "court" },
  { username: "cia" },
];

const LoginPage = () => {
  const router = useRouter();

  const handleNavigation = (username) => {
    router.push(`/${username}`);
  };

  return (
    <div className="mx-10 my-10">
      <h1 className="text-xl font-semibold mb-4">Select User</h1>
      <div className="flex gap-3">
        {users.map((user) => (
          <button
            key={user.username}
            onClick={() => handleNavigation(user.username)}
            className="bg-blue-600 text-white text-sm px-4 py-1 rounded hover:bg-blue-700"
          >
            {user.username}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
