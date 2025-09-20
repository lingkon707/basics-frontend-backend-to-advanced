import React from "react";

// ✅ Variable for status message
const statusMessage = "Paid partially"; // You can change this dynamically

// ✅ Extra charge to add to all paid values
const extraCharge = 100; // Set this to your desired value

// ✅ Sample data
const people = [
  { name: "Room 101", eatMills: 25, bills: 1500, paid: 1300 },
  { name: "Room 102", eatMills: 30, bills: 1800, paid: 1900 },
  { name: "Room 103", eatMills: 28, bills: 1700, paid: 1600 },
  { name: "Room 104", eatMills: 20, bills: 1200, paid: 1100 },
  { name: "Room 105", eatMills: 32, bills: 2000, paid: 2100 }
];

export default function RoomBillingTable() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Room Billing Table</h1>

      <table className="w-full border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-3 py-2">NAME (ROOM NUMBER)</th>
            <th className="border border-gray-300 px-3 py-2">EAT MILLS</th>
            <th className="border border-gray-300 px-3 py-2">BILLS</th>
            <th className="border border-gray-300 px-3 py-2">PAID</th>
            <th className="border border-gray-300 px-3 py-2">STATUS</th>
            <th className="border border-gray-300 px-3 py-2">DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => {
            const totalPaid = person.paid + extraCharge;
            const isDue = person.bills > totalPaid;

            return (
              <tr
                key={index}
                className={`${
                  isDue ? "bg-red-200 text-red-800 font-semibold" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="border border-gray-300 px-3 py-2">{person.name}</td>
                <td className="border border-gray-300 px-3 py-2">{person.eatMills}</td>
                <td className="border border-gray-300 px-3 py-2">{person.bills} ৳</td>
                <td className="border border-gray-300 px-3 py-2">{totalPaid} ৳</td>
                <td className="border border-gray-300 px-3 py-2">{statusMessage}</td>
                <td className="border border-gray-300 px-3 py-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
