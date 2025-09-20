import React from "react";
import hostelData from "./hostel.json"; // use JSON file
import PersonData from "./PersonData";

export default function Dashboard() {
  const num = (val) => (typeof val === "number" ? val : 0);

  const getTotalMeals = (dateOfMeals) => {
    let total = 0;
    Object.values(dateOfMeals).forEach((day) => {
      if (day && Object.keys(day).length > 0) {
        total += num(day.morning) + num(day.lunch) + num(day.night);
      }
    });
    return total;
  };

  const getTotalPaid = (paidArr) =>
    Array.isArray(paidArr) ? paidArr.reduce((a, b) => a + num(b), 0) : 0;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Person Data */}
      <PersonData />

      {/* Daily Bazar Data */}
      <h2 className="text-3xl font-bold mt-10 mb-6 text-gray-800">🧾 Daily Bazar Data</h2>

      <div className="overflow-x-auto shadow-md rounded-xl">
        <table className="min-w-full bg-white text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Day</th>
              <th className="px-4 py-3 text-left">Bazar Name</th>
              <th className="px-4 py-3 text-left">Room No</th>
              <th className="px-4 py-3 text-left">Given (₹)</th>
              <th className="px-4 py-3 text-left">Total Bills (₹)</th>
              <th className="px-4 py-3 text-left">Return (₹)</th>
              <th className="px-4 py-3 text-left">Extra Cost (₹)</th>
              <th className="px-4 py-3 text-left">Total Cost (₹)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(hostelData.dailyBazar).map(([day, info], idx) => {
              const given = num(info?.given);
              const bills = num(info?.totalBills);
              const returned = num(info?.return);
              const extra = num(info?.extraCost);
              const totalCost = bills + extra;

              return (
                <tr
                  key={idx}
                  className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2 font-medium text-blue-700">Day {day}</td>
                  <td className="px-4 py-2">{info?.bazarName || "-"}</td>
                  <td className="px-4 py-2">{info?.roomNumber || "-"}</td>
                  <td className="px-4 py-2">{given}</td>
                  <td className="px-4 py-2">{bills}</td>
                  <td className="px-4 py-2 text-green-700">{returned}</td>
                  <td className="px-4 py-2 text-red-600">{extra}</td>
                  <td className="px-4 py-2 font-semibold text-indigo-700">{totalCost}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
