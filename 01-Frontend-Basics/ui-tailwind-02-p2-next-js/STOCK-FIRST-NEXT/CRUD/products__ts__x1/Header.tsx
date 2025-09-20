"use client";

import React from "react";

interface Props {
  onAdd: () => void;
}

const Header: React.FC<Props> = ({ onAdd }) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">MyShop</div>
        <nav className="flex gap-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={onAdd}
          >
            Add Product
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
