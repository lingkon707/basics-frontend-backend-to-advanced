import React from "react";
import {
  ArrowTrendingUpIcon,
  TruckIcon,
  CreditCardIcon,
  ArrowPathIcon,
  UserIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const AdminMenu = () => {
  return (
    <header className="w-full bg-black bg-opacity-80 text-gray-300 font-sans fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <nav className="flex items-center space-x-6 h-16">
          {/* Title */}
          <h2 className="text-gray-400 font-semibold whitespace-nowrap">Admin Menu</h2>

          {/* Buttons */}
          <button className="flex items-center space-x-2 px-3 py-2 rounded-md bg-indigo-600 text-white font-medium">
            <ArrowTrendingUpIcon className="w-5 h-5" />
            <span>Getting start</span>
          </button>

          <button className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-800">
            <TruckIcon className="w-5 h-5" />
            <span>Shipping</span>
          </button>

          <button className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-800">
            <CreditCardIcon className="w-5 h-5" />
            <span>Payments</span>
          </button>

          <button className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-800">
            <ArrowPathIcon className="w-5 h-5" />
            <span>Returns</span>
          </button>

          <button className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-800">
            <UserIcon className="w-5 h-5" />
            <span>My Account</span>
          </button>

          <button className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-800">
            <DocumentTextIcon className="w-5 h-5" />
            <span>Copyright & Legal</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AdminMenu;
