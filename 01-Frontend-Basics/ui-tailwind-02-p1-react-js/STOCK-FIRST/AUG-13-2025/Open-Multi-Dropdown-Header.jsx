import React, { useState } from "react";

const menuItems = {
  Dictionaries: [
    "Dictionaries home",
    "English",
    "American English",
    "Academic",
    "Collocations",
    "German-English",
  ],
  Grammar: [
    "Grammar home",
    "Tenses",
    "Modal Verbs",
    "Clauses",
    "Punctuation",
  ],
  "Word Lists": [
    "Word Lists home",
    "Common Words",
    "Academic Words",
    "Idioms",
    "Phrasal Verbs",
  ],
};

export default function MultiDropdown() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="bg-white shadow-md border-b border-gray-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="https://img.freepik.com/premium-vector/company-logo-design-brand_751847-11.jpg"
            alt="Brand Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            DreamEng
          </span>
        </div>

        {/* Center: Dropdowns */}
        <div className="flex space-x-8">
          {Object.entries(menuItems).map(([section, items]) => (
            <div key={section} className="relative">
              <button
                onClick={() => toggleMenu(section)}
                className={`text-base font-semibold px-4 py-2 rounded-md transition-all duration-200 ${
                  openMenu === section
                    ? "bg-gray-100 text-blue-600 ring-2 ring-blue-500"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-500"
                }`}
              >
                {section}
              </button>

              {openMenu === section && (
                <div className="absolute left-0 mt-3 w-64 rounded-xl shadow-xl bg-white border border-gray-200 z-20 transition-all duration-300">
                  <div className="py-3 px-1">
                    {items.map((label) => (
                      <a
                        key={label}
                        href="#"
                        className="block px-5 py-2 text-sm text-gray-800 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: User */}
        <div className="flex items-center space-x-3">
          <span className="text-gray-700 font-medium">LINGKON</span>
          <img
            src="https://avatars.githubusercontent.com/u/111384782?v=4"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
