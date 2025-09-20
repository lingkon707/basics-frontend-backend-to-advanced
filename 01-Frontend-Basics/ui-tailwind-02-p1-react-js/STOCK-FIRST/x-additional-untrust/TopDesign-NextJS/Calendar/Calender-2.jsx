import { useState, useEffect } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function firstDayOfMonth(month, year) {
  return new Date(year, month, 1).getDay();
}

export default function Calendar() {
  const now = new Date();

  // Set initial year and month to current
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  // Handle year change: reset month to current month of that year
  const handleYearChange = (e) => {
    const selectedYear = parseInt(e.target.value);
    setYear(selectedYear);

    // If selecting 2025 or 2026, reset month to current month
    // If you want to reset month to Jan instead, change here
    setMonth(now.getMonth());
  };

  // Calculate calendar data for the displayed month/year
  const firstDay = firstDayOfMonth(month, year);
  const totalDays = daysInMonth(month, year);
  const blanks = Array(firstDay).fill(null);
  const days = Array.from({ length: totalDays }, (_, idx) => idx + 1);
  const daysArr = [...blanks, ...days];

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md font-sans text-gray-900">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">{MONTHS[month]} {year}</h1>

        <select
          aria-label="Select year"
          value={year}
          onChange={handleYearChange}
        //   className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-sm hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {/* <option value={now.getFullYear()}>{now.getFullYear()}</option> */}
         
        </select>
      </header>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 text-xs font-semibold text-gray-500 mb-2">
        {WEEKDAYS.map((wd) => (
          <div key={wd} className="text-center py-1">
            {wd}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-1">
        {daysArr.map((day, i) => {
          if (!day) return <div key={i} className="py-2"></div>;

          const isToday =
            day === now.getDate() &&
            month === now.getMonth() &&
            year === now.getFullYear();

          return (
            <button
              key={i}
              className={`
                py-2 rounded-lg transition
                text-center text-sm
                ${
                  isToday
                    ? "bg-indigo-600 text-white font-semibold shadow-md"
                    : "hover:bg-indigo-100"
                }
                focus:outline-none focus:ring-2 focus:ring-indigo-400
              `}
              aria-label={`${MONTHS[month]} ${day}, ${year}`}
              type="button"
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
