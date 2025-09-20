import React, { useState } from "react";
import hostelData from "./hostel.json";

export default function Brief() {
  const [selectedDay, setSelectedDay] = useState("1");

  // Calculate total meals for all students for the selected day
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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Brief Summary</h2>

      {/* Day Selection */}
      <div className="mb-6">
        <label className="mr-3 font-medium">Select Day:</label>
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          {Object.keys(hostelData.students[0].dateOfMeals).map((day) => (
            <option key={day} value={day}>
              Day {day}
            </option>
          ))}
        </select>
      </div>

      {/* Total Meals Summary */}
      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h3 className="text-xl font-semibold mb-3">
          Total Meals for Day {selectedDay}
        </h3>
        <p>
          <span className="font-semibold">Morning Total:</span> {totals.morningTotal}
        </p>
        <p>
          <span className="font-semibold">Lunch Total:</span> {totals.lunchTotal}
        </p>
        <p>
          <span className="font-semibold">Night Total:</span> {totals.nightTotal}
        </p>
        <p className="mt-2 text-blue-600 font-bold">
          <span>Total Meals:</span> {totals.totalMeals}
        </p>
      </div>
    </div>
  );
}
