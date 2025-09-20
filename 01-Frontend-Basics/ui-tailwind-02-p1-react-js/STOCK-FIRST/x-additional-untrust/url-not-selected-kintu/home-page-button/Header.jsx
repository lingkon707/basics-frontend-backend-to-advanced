// app/Header.tsx or components/Header.tsx
"use client";

import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold hover:underline">
          Home Link
        </Link>
        {/* You can add more nav links here later */}
      </div>
    </header>
  );
};

export default Header;
