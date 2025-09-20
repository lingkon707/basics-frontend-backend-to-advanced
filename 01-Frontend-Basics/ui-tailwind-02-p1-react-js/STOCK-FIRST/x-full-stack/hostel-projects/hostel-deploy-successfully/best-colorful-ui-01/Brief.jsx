import React, { useState } from "react";
import hostelData from "./hostel.json";

export default function Brief() {
  const [selectedDay, setSelectedDay] = useState("1");

  const calculateTotals = (day) => {
    let morningTotal = 0,
      lunchTotal = 0,
      nightTotal = 0;

    hostelData.students.forEach((student) => {
      const meals = student.dateOfMeals?.[day] || {};
      morningTotal += Number(meals.morning) || 0;
      lunchTotal += Number(meals.lunch) || 0;
      nightTotal += Number(meals.night) || 0;
    });

    return {
      morningTotal,
      lunchTotal,
      nightTotal,
      totalMeals: morningTotal + lunchTotal + nightTotal,
    };
  };

  const totals = calculateTotals(selectedDay);

  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">📊 Brief Summary</h2>

      {/* Day Selection */}
      <div className="mb-6">
        <label className="mr-3 font-medium text-gray-700 text-lg">Select Day:</label>
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.keys(hostelData.students[0].dateOfMeals).map((day) => (
            <option key={day} value={day}>
              Day {day}
            </option>
          ))}
        </select>
      </div>

      {/* Total Meals Summary */}
      <div className="bg-white shadow-lg rounded-xl p-6 space-y-4 border border-gray-100">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          🍽️ Total Meals for Day {selectedDay}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-between bg-blue-50 px-4 py-3 rounded-md">
            <span className="font-medium text-blue-700">🌅 Morning</span>
            <span className="text-lg font-semibold text-blue-900">{totals.morningTotal}</span>
          </div>

          <div className="flex items-center justify-between bg-yellow-50 px-4 py-3 rounded-md">
            <span className="font-medium text-yellow-700">🍱 Lunch</span>
            <span className="text-lg font-semibold text-yellow-900">{totals.lunchTotal}</span>
          </div>

          <div className="flex items-center justify-between bg-purple-50 px-4 py-3 rounded-md">
            <span className="font-medium text-purple-700">🌙 Night</span>
            <span className="text-lg font-semibold text-purple-900">{totals.nightTotal}</span>
          </div>

          <div className="flex items-center justify-between bg-green-100 px-4 py-3 rounded-md sm:col-span-2">
            <span className="font-bold text-green-800 text-lg">🔢 Total Meals</span>
            <span className="text-xl font-extrabold text-green-900">{totals.totalMeals}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
