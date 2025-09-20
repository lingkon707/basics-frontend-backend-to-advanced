import React, { useState } from "react";
import hostelData from "./hostel.json";

export default function Check() {
  const [selectedDay, setSelectedDay] = useState("1");
  const [selectedStudent, setSelectedStudent] = useState(
    hostelData.students[0]?.name || ""
  );

  const getStudentMeals = () => {
    const student = hostelData.students.find(
      (s) => s.name === selectedStudent
    );
    const meals = student?.dateOfMeals?.[selectedDay] || {};
    const morning = Number(meals.morning) || 0;
    const lunch = Number(meals.lunch) || 0;
    const night = Number(meals.night) || 0;
    const total = morning + lunch + night;

    return { morning, lunch, night, total };
  };

  const meals = getStudentMeals();

  return (
    <div className="mt-11">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">👤 Check Student Meals</h2>

      {/* Day Selection */}
      <div className="mb-4">
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

      {/* Student Selection */}
      <div className="mb-6">
        <label className="mr-3 font-medium text-gray-700 text-lg">Select Student:</label>
        <select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {hostelData.students.map((s) => (
            <option key={`${s.name}-${s.roomNumber}`} value={s.name}>
              {s.name} (Room {s.roomNumber})
            </option>
          ))}
        </select>
      </div>

      {/* Student Meal Details */}
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 space-y-4">
        <h3 className="text-2xl font-semibold text-gray-700">
          🍴 Meals for <span className="text-blue-600">{selectedStudent}</span> on Day {selectedDay}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex justify-between items-center bg-blue-50 px-4 py-3 rounded-md">
            <span className="text-blue-700 font-medium">🌅 Morning</span>
            <span className="text-lg font-semibold text-blue-900">{meals.morning}</span>
          </div>

          <div className="flex justify-between items-center bg-yellow-50 px-4 py-3 rounded-md">
            <span className="text-yellow-700 font-medium">🍱 Lunch</span>
            <span className="text-lg font-semibold text-yellow-900">{meals.lunch}</span>
          </div>

          <div className="flex justify-between items-center bg-purple-50 px-4 py-3 rounded-md">
            <span className="text-purple-700 font-medium">🌙 Night</span>
            <span className="text-lg font-semibold text-purple-900">{meals.night}</span>
          </div>

          <div className="flex justify-between items-center bg-green-100 px-4 py-3 rounded-md sm:col-span-2">
            <span className="font-bold text-green-800 text-lg">🔢 Total Meals</span>
            <span className="text-xl font-extrabold text-green-900">{meals.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
