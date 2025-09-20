import React from "react";

// Constants
const millRate = 60;
const extraCharge = 100;

// People Data
const people = [
  { name: "Room 101", eatMills: 25, paid: 1300, situation: true },
  { name: "Room 102", eatMills: 30, paid: 1900, situation: false },
  { name: "Room 103", eatMills: 28, paid: 1600, situation: true },
  { name: "Room 104", eatMills: 20, paid: 1100, situation: false },
  { name: "Room 105", eatMills: 32, paid: 2100, situation: true },
  { name: "Room 106", eatMills: 35, paid: 2250, situation: false },
];

export default function RoomBillingTable() {
  const enrichedData = people.map((person) => {
    const bills = person.eatMills * millRate + extraCharge;
    const remaining = person.paid - bills;

    let status = "";
    if (person.paid < bills) {
      status = "Paid partially";
    } else if (remaining <= 500) {
      status = "Warning";
    }

    return {
      ...person,
      bills,
      remaining,
      status,
    };
  });

  const totalMembers = enrichedData.length;
  const totalPartial = enrichedData.filter(p => p.status === "Paid partially").length;
  const totalWarning = enrichedData.filter(p => p.status === "Warning").length;

  return (
    <div className="max-w-full md:max-w-5xl mx-auto px-2 py-4 text-xs">
      {/* ✅ Top Summary */}
      <div className="text-sm font-semibold mb-4 text-center md:text-left space-y-1">
        <div>Total Members: {totalMembers}</div>
        <div>Paid Partially: {totalPartial}</div>
        <div>Warning: {totalWarning}</div>
      </div>

      {/* ✅ Compact Billing Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center text-[11px]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-1 py-1 w-24">NAME (ROOM)</th>
              <th className="border px-1 py-1 w-14">EAT MILLS</th>
              <th className="border px-1 py-1 w-20">BILLS</th>
              <th className="border px-1 py-1 w-20">PAID</th>
              <th className="border px-1 py-1 w-24">অবশিষ্ট</th>
              <th className="border px-1 py-1 w-28">STATUS</th>
              <th className="border px-1 py-1 w-28">FAVOR</th>
            </tr>
          </thead>
          <tbody>
            {enrichedData.map((person, index) => (
              <tr
                key={index}
                className={`${
                  person.status === "Paid partially"
                    ? "bg-red-100 text-red-700 font-semibold"
                    : ""
                } hover:bg-gray-50`}
              >
                <td className="border px-1 py-1">{person.name}</td>
                <td className="border px-1 py-1">{person.eatMills}</td>
                <td className="border px-1 py-1">{person.bills} ৳</td>
                <td className="border px-1 py-1">{person.paid} ৳</td>
                <td className="border px-1 py-1">{person.remaining} ৳</td>
                <td className="border px-1 py-1">{person.status}</td>
                <td className="border px-1 py-1">
                  {person.situation ? "somoy dilam" : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
