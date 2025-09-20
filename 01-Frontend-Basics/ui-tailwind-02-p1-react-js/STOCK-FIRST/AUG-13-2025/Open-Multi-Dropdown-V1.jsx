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
    <div className="flex space-x-4 bg-white p-4 border-b border-gray-300">
      {Object.entries(menuItems).map(([section, items]) => (
        <div key={section} className="relative inline-block text-left">
          <button
            onClick={() => toggleMenu(section)}
            className="text-sm font-medium text-gray-700 hover:text-black focus:outline-none px-3 py-1 border-b-2 border-transparent hover:border-black"
          >
            {section}
          </button>

          {openMenu === section && (
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                {items.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
  );
}
