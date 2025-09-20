"use client";

import React from "react";

interface Props {
  onAdd: () => void;
}

const Header: React.FC<Props> = ({ onAdd }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition cursor-pointer">
          MyShop
        </div>
        <div className="flex gap-4">
          <button
            onClick={onAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Add Product
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
