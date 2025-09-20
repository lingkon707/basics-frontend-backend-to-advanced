import React from "react";
import hostelData from "./hostel.json";

export default function Dashboard() {
  // --- 1. Total Bazar Bills ---
const totalBazarBills = Object.values(hostelData.dailyBazar).reduce(
  (sum, day) => {
    // ignore empty day objects
    if (!day || Object.keys(day).length === 0) return sum;

    const totalBills = Number(day.totalBills) || 0; // default 0 if missing
    const extraCost = Number(day.extraCost) || 0;   // default 0 if missing

    return sum + totalBills + extraCost;
  },
  0
);

  // --- 2. Total Meals ---
  const totalMeals = hostelData.students.reduce((sum, student) => {
    const meals = Object.values(student.dateOfMeals || {});
    const studentMeals = meals.reduce((mSum, day) => {
      if (!day || Object.keys(day).length === 0) return mSum;
      const morning = Number(day.morning) || 0;
      const lunch = Number(day.lunch) || 0;
      const night = Number(day.night) || 0;
      return mSum + morning + lunch + night;
    }, 0);
    return sum + studentMeals;
  }, 0);

  // --- 3. Services Charge ---
  const totalServicesCharge = 28500;
  const totalStudent = 30;
  const perStudentCharge = totalServicesCharge / totalStudent;

  // --- 4. Meal Rate ---
  const mealRate = totalMeals ? totalBazarBills / totalMeals : 0;

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Dashboard Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Bazar Bills */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500 font-medium mb-2">Total Bazar Bills</p>
          <p className="text-xl font-bold text-blue-600">{totalBazarBills} Taka</p>
        </div>

        {/* Total Meals */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500 font-medium mb-2">Total Meals</p>
          <p className="text-xl font-bold text-blue-600">{totalMeals}</p>
        </div>

         {/* Meal Rate */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500 font-medium mb-2">Meal Rate</p>
          <p className="text-xl font-bold text-blue-600">{mealRate.toFixed(2)} Taka</p>
        </div>

        {/* Total Students */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500 font-medium mb-2">Total Students</p>
          <p className="text-xl font-bold text-blue-600">{totalStudent}</p>
        </div>

        {/* Total Services Charge */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500 font-medium mb-2">Total Services Charge</p>
          <p className="text-xl font-bold text-blue-600">{totalServicesCharge} Taka</p>
        </div>

        {/* Per Student Services Charge */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500 font-medium mb-2">Per Student Services Charge</p>
          <p className="text-xl font-bold text-blue-600">{perStudentCharge.toFixed(2)} Taka</p>
        </div>

        

       
      </div>
    </div>
  );
}
