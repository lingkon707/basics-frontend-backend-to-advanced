import React from "react";
import hostelData from "./hostel.json"; // use JSON file

export default function Dashboard() {
  const getTotalMeals = (dateOfMeals) => {
    let total = 0;
    Object.values(dateOfMeals).forEach((day) => {
      if (day && Object.keys(day).length > 0) {
        total += (day.morning || 0) + (day.lunch || 0) + (day.night || 0);
      }
    });
    return total;
  };

  const getTotalPaid = (paidArr) => paidArr.reduce((a, b) => a + b, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Person Data */}
      <h2 className="text-2xl font-bold mb-4">Person Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Room No</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Total Meals</th>
              <th className="px-4 py-2 text-left">Total Paid</th>
            </tr>
          </thead>
          <tbody>
            {hostelData.students.map((student, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2">{student.roomNumber}</td>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{getTotalMeals(student.dateOfMeals)}</td>
                <td className="px-4 py-2">{getTotalPaid(student.paid)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Daily Bazar Data */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Daily Bazar Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Day</th>
              <th className="px-4 py-2 text-left">Bazar Name</th>
              <th className="px-4 py-2 text-left">Room No</th>
              <th className="px-4 py-2 text-left">Given</th>
              <th className="px-4 py-2 text-left">Total Bills</th>
              <th className="px-4 py-2 text-left">Return</th>
              <th className="px-4 py-2 text-left">Extra Cost</th>
              <th className="px-4 py-2 text-left">Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(hostelData.dailyBazar).map(([day, info], idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2">{day}</td>
                <td className="px-4 py-2">{info.bazarName || "-"}</td>
                <td className="px-4 py-2">{info.roomNumber || "-"}</td>
                <td className="px-4 py-2">{info.given || "-"}</td>
                <td className="px-4 py-2">{info.totalBills || "-"}</td>
                <td className="px-4 py-2">{info.return || "-"}</td>
                <td className="px-4 py-2">{info.extraCost || "-"}</td>
                <td className="px-4 py-2">
                  {info.totalBills && info.extraCost
                    ? info.totalBills + info.extraCost
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
