import React, { useState } from "react";
import hostelData from "./hostel.json";

export default function Brief() {
  const [selectedDay, setSelectedDay] = useState("1");

  // Convert dailyBazar object to an array
  const dailyBazarArray = Object.values(hostelData.dailyBazar);

  // Calculate totalCost safely (ignore empty objects)
  const totalCost = dailyBazarArray.reduce((sum, bazar) => {
    if (!bazar || !bazar.totalBills) return sum;
    return sum + (bazar.totalBills || 0) + (bazar.extraCost || 0);
  }, 0);

  // Meals summary for selected day
  const mealsSummary = hostelData.students.map((student) => {
    const dayMeals = student.dateOfMeals[selectedDay] || {};
    const morning = dayMeals.morning || 0;
    const lunch = dayMeals.lunch || 0;
    const night = dayMeals.night || 0;
    const total = morning + lunch + night;

    return {
      name: student.name,
      roomNumber: student.roomNumber,
      morning,
      lunch,
      night,
      total,
    };
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Brief Summary</h2>

      {/* Select Day */}
      <div className="mb-4">
        <label className="mr-2">Select Day:</label>
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="border p-1 rounded"
        >
          {Object.keys(hostelData.dailyBazar).map((day) => (
            <option key={day} value={day}>
              Day {day}
            </option>
          ))}
        </select>
      </div>

      {/* Meals Summary */}
      <h3 className="text-lg font-semibold mb-2">Meals Summary (Day {selectedDay})</h3>
      <ul>
        {mealsSummary.map((s, index) => (
          <li key={index} className="mb-2 border p-2 rounded">
            <strong>{s.name}</strong> (Room {s.roomNumber}) <br />
            Morning: {s.morning}, Lunch: {s.lunch}, Night: {s.night} <br />
            <span className="font-semibold">Total: {s.total}</span>
          </li>
        ))}
      </ul>

      {/* Daily Bazar Summary */}
      <h3 className="text-lg font-semibold mt-4">Total Cost</h3>
      <p>{totalCost} Taka</p>
    </div>
  );
}
