import React from "react";

// Constants
const millRate = 60;         // Meal rate per unit
const extraCharge =800;    // Extra service charge

// People data
const people = [
  { name: "Abu Taher 601", eatMills: 10, paid: 2000 },
  { name: "Bayjid 601", eatMills: 20, paid: 2000 },
  { name: "Sharif 602", eatMills: 30, paid: 1500 },
  { name: "Musfiq 602", eatMills: 20, paid: 1100 },
  { name: "Lingkon 603", eatMills: 10, paid: 1600 }

];
export default function RoomBillingTable() {
  const totalMembers = people.length;

  return (
    <div className="max-w-full md:max-w-5xl mx-auto px-2 py-4 text-xs">
      <h1 className="text-center text-lg font-bold mb-4">
        Total Members: {totalMembers}
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center text-[11px]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">NAME (ROOM NUMBER)</th>
              <th className="border px-2 py-1 w-16">EAT MILLS</th>
              <th className="border px-2 py-1">BILLS</th>
              <th className="border px-2 py-1">PAID</th>
              <th className="border px-2 py-1">অবশিষ্ট</th>
              <th className="border px-2 py-1">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => {
              const bills = person.eatMills * millRate + extraCharge;
              const paid = person.paid;
              const remaining = paid - bills;

              // Status Logic
              let status = "";
              if (paid < bills) {
                status = "মিল বন্ধ করবো?";
              } else if (remaining <= 500) {
                status = "Warning";
              }

              const isDue = paid < bills;

              return (
                <tr
                  key={index}
                  className={`${
                    isDue ? "bg-red-100 text-red-700 font-semibold" : ""
                  } hover:bg-gray-50`}
                >
                  <td className="border px-2 py-1">{person.name}</td>
                  <td className="border px-2 py-1">{person.eatMills}</td>
                  <td className="border px-2 py-1">{bills} ৳</td>
                  <td className="border px-2 py-1">{paid} ৳</td>
                  <td className="border px-2 py-1">{remaining} ৳</td>
                  <td className="border px-2 py-1">{status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}