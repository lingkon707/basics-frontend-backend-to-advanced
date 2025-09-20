import React, { useState } from "react";
import { FaHome, FaBriefcase, FaUserGraduate, FaTools, FaUsers, FaBuilding } from "react-icons/fa";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex">
      <div className="w-64 bg-white h-screen shadow-lg pt-8">
        {/* Sidebar Content */}
        <div className="flex flex-col items-start pl-6 space-y-4">
          <button
            onClick={() => handleLinkClick("home")}
            className={`flex items-center space-x-3 text-lg w-full py-2 px-4 rounded-l-xl ${
              activeLink === "home" ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaHome className="text-xl" />
            <span>Home</span>
          </button>
          <button
            onClick={() => handleLinkClick("jobs")}
            className={`flex items-center space-x-3 text-lg w-full py-2 px-4 rounded-l-xl ${
              activeLink === "jobs" ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaBriefcase className="text-xl" />
            <span>Jobs</span>
          </button>
          <button
            onClick={() => handleLinkClick("students")}
            className={`flex items-center space-x-3 text-lg w-full py-2 px-4 rounded-l-xl ${
              activeLink === "students" ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaUserGraduate className="text-xl" />
            <span>Students</span>
          </button>
          <button
            onClick={() => handleLinkClick("howWeWork")}
            className={`flex items-center space-x-3 text-lg w-full py-2 px-4 rounded-l-xl ${
              activeLink === "howWeWork" ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaTools className="text-xl" />
            <span>How we work</span>
          </button>
          <button
            onClick={() => handleLinkClick("howWeHire")}
            className={`flex items-center space-x-3 text-lg w-full py-2 px-4 rounded-l-xl ${
              activeLink === "howWeHire" ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaUsers className="text-xl" />
            <span>How we hire</span>
          </button>
          <button
            onClick={() => handleLinkClick("yourCareer")}
            className={`flex items-center space-x-3 text-lg w-full py-2 px-4 rounded-l-xl ${
              activeLink === "yourCareer" ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaBuilding className="text-xl" />
            <span>Your career</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
