import { useState } from "react";

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

// Utility to get number of days in a month/year
function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

// Utility to get first day of month (0=Sun,...6=Sat)
function firstDayOfMonth(month, year) {
  return new Date(year, month, 1).getDay();
}

export default function Calendar() {
  const [year, setYear] = useState(2025);
  const today = new Date();

  // Generate calendar days for the whole year (all 12 months)
  const calendarMonths = MONTHS.map((month, i) => {
    const firstDay = firstDayOfMonth(i, year);
    const totalDays = daysInMonth(i, year);

    // Fill empty days for first week offset
    const blanks = Array(firstDay).fill(null);

    // Days array from 1 to totalDays
    const days = Array.from({ length: totalDays }, (_, idx) => idx + 1);

    // Combined for rendering
    return [...blanks, ...days];
  });

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md font-sans text-gray-900">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold">Calendar</h1>

        <select
          aria-label="Select year"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-sm hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value={2025}>2025</option>
          <option value={2026}>2026</option>
        </select>
      </header>

      <div className="grid grid-cols-3 gap-8">
        {calendarMonths.map((days, monthIdx) => (
          <div key={monthIdx} className="select-none">
            <h2 className="text-lg font-medium mb-3 text-gray-800">
              {MONTHS[monthIdx]}
            </h2>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 text-xs font-semibold text-gray-500 mb-1">
              {WEEKDAYS.map((wd) => (
                <div key={wd} className="text-center py-1">
                  {wd}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((day, i) => {
                if (!day) {
                  // Empty blank days
                  return <div key={i} className="py-2"></div>;
                }

                const isToday =
                  day === today.getDate() &&
                  monthIdx === today.getMonth() &&
                  year === today.getFullYear();

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
                    aria-label={`${MONTHS[monthIdx]} ${day}, ${year}`}
                    type="button"
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
