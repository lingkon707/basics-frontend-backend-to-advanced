import { useEffect, useState } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function firstDayOfMonth(month, year) {
  return new Date(year, month, 1).getDay();
}

export default function Calendar() {
  const now = new Date();
  const [option, setOption] = useState("today");

  // ✅ Live Dhaka time (AM/PM)
  const [dhakaTime, setDhakaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // ✅ AM/PM
        timeZone: "Asia/Dhaka",
      });

      setDhakaTime(formatter.format(new Date()));
    };

    updateTime(); // initial render
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 🔁 Helper to render a month
  function renderMonth(month, year) {
    const firstDay = firstDayOfMonth(month, year);
    const totalDays = daysInMonth(month, year);
    const blanks = Array(firstDay).fill(null);
    const days = Array.from({ length: totalDays }, (_, idx) => idx + 1);
    const daysArr = [...blanks, ...days];

    return (
      <div key={`${year}-${month}`} className="select-none">
        <h2 className="text-lg font-medium mb-3 text-gray-800 text-center">
          {MONTHS[month]} {year}
        </h2>

        <div className="grid grid-cols-7 text-xs font-semibold text-gray-500 mb-1">
          {WEEKDAYS.map((wd) => (
            <div key={wd} className="text-center py-1">
              {wd}
            </div>
          ))}
        </div>

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

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md font-sans text-gray-900">

      {/* 🕒 Dhaka Time (AM/PM) */}
      <div className="mb-6 text-sm text-gray-700">
        <div className="flex justify-between items-center">
          <span className="font-medium">Current Dhaka Time:</span>
          <span className="font-mono text-indigo-600">{dhakaTime}</span>
        </div>
      </div>

      {/* 🔽 Dropdown */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold">Calendar</h1>

        <select
          aria-label="Select calendar view"
          value={option}
          onChange={(e) => setOption(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 text-sm hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="today">Today</option>
          <option value="2024">All months of 2024</option>
          <option value="2025">All months of 2025</option>
          <option value="2026">All months of 2026</option>
        </select>
      </header>

      {/* 📅 Calendar View */}
      {option === "today" ? (
        renderMonth(now.getMonth(), now.getFullYear())
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {MONTHS.map((_, monthIdx) =>
            renderMonth(monthIdx, parseInt(option))
          )}
        </div>
      )}
    </div>
  );
}
