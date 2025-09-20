import React from "react";
import hostelData from "./hostel.json";

export default function Dashboard() {
  // --- 1. Total Bazar Bills ---
  const totalBazarBills = Object.values(hostelData.dailyBazar).reduce(
    (sum, day) => {
      if (!day || Object.keys(day).length === 0) return sum;
      const totalBills = Number(day.totalBills) || 0;
      const extraCost = Number(day.extraCost) || 0;
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
    <div className=" bg-gray-100 ">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Dashboard Summary</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Total Bazar Bills */}
        <Card title="Total Bazar Bills" value={`${totalBazarBills} Taka`} />

        {/* Total Meals */}
        <Card title="Total Meals" value={totalMeals} />

        {/* Meal Rate */}
        <Card title="Meal Rate" value={`${mealRate.toFixed(2)} Taka`} />

        {/* Total Students */}
        <Card title="Total Students" value={totalStudent} />

        {/* Total Services Charge */}
        <Card title="Total Services Charge" value={`${totalServicesCharge} Taka`} />

        {/* Per Student Services Charge */}
        <Card
          title="Per Student Services Charge"
          value={`${perStudentCharge.toFixed(2)} Taka`}
        />
      </div>
    </div>
  );
}

// Reusable Card component for consistent styling
function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <p className="text-gray-500 font-semibold mb-3 uppercase tracking-wide">{title}</p>
      <p className="text-3xl font-extrabold text-blue-600">{value}</p>
    </div>
  );
}
