import React from "react";
import hostelData from "./hostel.json";

export default function PersonData() {
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

  const APPROX_MEAL_RATE = 60;
  const APPROX_SERVICES_CHARGE = 950;

  return (
    <div className="bg-gray-100 ">
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">👥 Person Data</h2>

        <div className="mb-6 space-y-1 flex gap-9">
          <p className="text-md text-black font-semibold uppercase">
            Meal Rate (approx): {APPROX_MEAL_RATE}
          </p>
          <p className="text-md text-black font-semibold uppercase">
            Service Charge (approx): {APPROX_SERVICES_CHARGE}
          </p>
        </div>

        <div className="overflow-x-auto shadow-md rounded-xl">
          <table className="min-w-full bg-white text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">Room No</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Total Meals</th>
                <th className="px-4 py-3 text-left">Bills (Taka)</th>
                <th className="px-4 py-3 text-left">Total Paid (Taka)</th>
                <th className="px-4 py-3 text-left">Remaining (Taka)</th>
                <th className="px-4 py-3 text-left">Remaining + Service (Taka)</th>
              </tr>
            </thead>
            <tbody>
              {hostelData.students.map((student, idx) => {
                const totalMeals = getTotalMeals(student.dateOfMeals);
                const totalPaid = getTotalPaid(student.paid);
                const eaten = totalMeals * APPROX_MEAL_RATE;
                const remaining = totalPaid - eaten;
                const remainingWithService = -(APPROX_SERVICES_CHARGE - remaining);

                return (
                  <tr
                    key={idx}
                    className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-2">{student.roomNumber || "-"}</td>
                    <td className="px-4 py-2 font-medium">{student.name || "-"}</td>
                    <td className="px-4 py-2">{totalMeals}</td>
                    <td className="px-4 py-2 text-blue-700 font-semibold">{eaten}</td>
                    <td className="px-4 py-2 text-green-700 font-semibold">{totalPaid}</td>
                    <td
                      className={`px-4 py-2 font-semibold ${
                        remaining < 0 ? "text-red-600" : "text-green-700"
                      }`}
                    >
                      {remaining}
                    </td>
                    <td
                      className={`px-4 py-2 font-semibold ${
                        remainingWithService < 0 ? "text-red-600" : "text-green-700"
                      }`}
                    >
                      {remainingWithService}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
