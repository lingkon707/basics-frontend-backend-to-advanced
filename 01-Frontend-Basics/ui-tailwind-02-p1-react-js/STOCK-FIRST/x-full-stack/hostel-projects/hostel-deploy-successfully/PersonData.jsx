import React from "react";
import hostelData from "./hostel.json"; // use JSON file

export default function PersonData() {
  // Safely get number (0 if undefined, null, blank)
  const num = (val) => (typeof val === "number" ? val : 0);

  // Helper: calculate total meals
  const getTotalMeals = (dateOfMeals) => {
    let total = 0;
    Object.values(dateOfMeals).forEach((day) => {
      if (day && Object.keys(day).length > 0) {
        total += num(day.morning) + num(day.lunch) + num(day.night);
      }
    });
    return total;
  };

  // Helper: calculate total paid
  const getTotalPaid = (paidArr) =>
    Array.isArray(paidArr) ? paidArr.reduce((a, b) => a + num(b), 0) : 0;

  // Approx constants
  const APPROX_MEAL_RATE = 60;
  const APPROX_SERVICES_CHARGE = 950;

  return (
    <div className=" bg-gray-100 ">
      
      {/* Person Data */}
      <h2 className="text-2xl font-bold mb-4">Person Data</h2>
      <h1 className="uppercase text-red-700 text-xl">meal rate real/approx : {APPROX_MEAL_RATE}</h1>
      <h1 className="uppercase text-red-700 text-xl">Service Charge real/approx : {APPROX_SERVICES_CHARGE}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Room No</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Total Meals</th>
              <th className="px-4 py-2 text-left">Bills</th>
              <th className="px-4 py-2 text-left">Total Paid</th>
              <th className="px-4 py-2 text-left">Remaining</th>
              <th className="px-4 py-2 text-left">Remaining with Service Charges</th>
            </tr>
          </thead>
          <tbody>
            {hostelData.students.map((student, idx) => {
              const totalMeals = getTotalMeals(student.dateOfMeals);
              const totalPaid = getTotalPaid(student.paid);
              const eaten = totalMeals * APPROX_MEAL_RATE;
              const remaining = totalPaid - eaten;
              const remainingWithService = - (APPROX_SERVICES_CHARGE - remaining);

              return (
                <tr key={idx} className="border-t hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2">{student.roomNumber || "-"}</td>
                  <td className="px-4 py-2">{student.name || "-"}</td>
                  <td className="px-4 py-2">{totalMeals}</td>
                   <td className="px-4 py-2">{eaten}</td>
                  <td className="px-4 py-2">{totalPaid}</td>                 
               <td className="px-4 py-2">{remaining}</td>
                  <td className="px-4 py-2">{remainingWithService}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Daily Bazar Data */}
      {/* You can keep your previous Daily Bazar table here */}
    </div>
  );
}
