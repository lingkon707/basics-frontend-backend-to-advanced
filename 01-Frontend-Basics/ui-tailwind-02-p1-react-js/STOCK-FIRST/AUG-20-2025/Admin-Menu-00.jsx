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
    <div className="w-full max-w-xs p-4 bg-black bg-opacity-80 rounded-lg text-gray-300 font-sans">
      <h2 className="mb-4 font-semibold text-gray-400">Admin Menu</h2>
      <nav className="flex flex-col space-y-3">
        <button className="flex items-center space-x-3 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium">
          <ArrowTrendingUpIcon className="w-5 h-5" />
          <span>Getting start</span>
        </button>

        <button className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-800">
          <TruckIcon className="w-5 h-5" />
          <span>Shipping</span>
        </button>

        <button className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-800">
          <CreditCardIcon className="w-5 h-5" />
          <span>Payments</span>
        </button>

        <button className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-800">
          <ArrowPathIcon className="w-5 h-5" />
          <span>Returns</span>
        </button>

        <button className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-800">
          <UserIcon className="w-5 h-5" />
          <span>My Account</span>
        </button>

        <button className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-800">
          <DocumentTextIcon className="w-5 h-5" />
          <span>Copyright & Legal</span>
        </button>
      </nav>
    </div>
  );
};

export default AdminMenu;
