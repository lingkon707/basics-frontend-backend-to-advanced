import React, { useState } from "react";
import hostelData from "./hostel.json";

export default function Check() {
  const [selectedDay, setSelectedDay] = useState("1");
  const [selectedStudent, setSelectedStudent] = useState(
    hostelData.students[0]?.name || ""
  );

  // Get meals for selected student and day
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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Check Student Meals</h2>

      {/* Day Selection */}
      <div className="mb-4">
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

      {/* Student Selection */}
      <div className="mb-6">
        <label className="mr-3 font-medium">Select Student:</label>
        <select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          {hostelData.students.map((s) => (
            <option key={`${s.name}-${s.roomNumber}`} value={s.name}>
              {s.name} (Room {s.roomNumber})
            </option>
          ))}
        </select>
      </div>

      {/* Student Meal Details */}
      <div className="bg-white shadow rounded-xl p-4">
        <h3 className="text-xl font-semibold mb-3">
          Meals for {selectedStudent} on Day {selectedDay}
        </h3>
        <p>
          <span className="font-semibold">Morning:</span> {meals.morning}
        </p>
        <p>
          <span className="font-semibold">Lunch:</span> {meals.lunch}
        </p>
        <p>
          <span className="font-semibold">Night:</span> {meals.night}
        </p>
        <p className="mt-2 text-blue-600 font-bold">
          Total Meals: {meals.total}
        </p>
      </div>
    </div>
  );
}
