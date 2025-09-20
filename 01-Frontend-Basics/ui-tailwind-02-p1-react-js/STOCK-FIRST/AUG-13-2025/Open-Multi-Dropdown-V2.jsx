import React, { useState } from "react";

const menus = {
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
    "Parts of Speech",
    "Sentence Structure",
    "Punctuation",
  ],
  "Word Lists": [
    "Word Lists home",
    "Common Words",
    "Academic Words",
    "Phrasal Verbs",
    "Idioms",
  ],
};

export default function MultiDropdown() {
  // track open dropdown by key or null for none
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div className="flex space-x-6 bg-white p-4 border-b border-gray-200">
      {Object.entries(menus).map(([section, items]) => (
        <div key={section} className="relative inline-block text-left">
          <button
            onClick={() => toggleDropdown(section)}
            className={`inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium ${
              openDropdown === section
                ? "border-b-2 border-black font-semibold"
                : "text-gray-700 hover:text-black"
            }`}
            aria-haspopup="true"
            aria-expanded={openDropdown === section}
          >
            {section}
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openDropdown === section && (
            <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                {items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item}
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
