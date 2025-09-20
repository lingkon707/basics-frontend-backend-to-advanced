import React from "react";

const millRate = 60;
const extraCharge = 800;

const people = [
  { name: "Abu Taher", room: "রুম 601", eatMills: 23, paid: 2500, situation: false },
  { name: "Baizid", room: "রুম 601", eatMills: 30, paid: 1900, situation: false },
  { name: "Sharif", room: "রুম 602", eatMills: 28, paid: 1600, situation: true },
  { name: "Musfiq", room: "রুম 602", eatMills: 20, paid: 4100, situation: false },
  { name: "Lingkon", room: "রুম 603", eatMills: 32, paid: 5100, situation: false },
  { name: "Noman", room: "রুম 604", eatMills: 10, paid: 1600, situation: false },
];

export default function RoomBillingTable() {
  const enrichedData = people.map((person) => {
    const bills = person.eatMills * millRate + extraCharge;
    const remaining = person.paid - bills;

    let status = "";
    if (person.paid < bills) {
      status = "Mill Off";
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
  const totalMillOff = enrichedData.filter((p) => p.status === "Mill Off").length;
  const totalWarning = enrichedData.filter((p) => p.status === "Warning").length;

  return (
    <div className="max-w-full md:max-w-5xl mx-auto px-4 py-6 text-sm md:text-base bg-white rounded-lg shadow-lg">
      {/* Summary */}
      <div className="mb-6 text-center md:text-left space-y-2 font-semibold text-gray-800">
        <div>মোট সদস্য: {totalMembers}</div>
        <div className="text-red-600">মিল অফ: {totalMillOff}</div>
        <div>Warning: {totalWarning}</div>
      </div>

      {/* Billing Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-300">
        <table className="min-w-[600px] w-full border-collapse border border-gray-300 text-center">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="border border-gray-300 px-4 py-3 min-w-[120px] text-left">নাম (রুম)</th>
              <th className="border border-gray-300 px-4 py-3 min-w-[90px]">খাওয়া মিল</th>
              <th className="border border-gray-300 px-4 py-3 min-w-[90px]">বিল</th>
              <th className="border border-gray-300 px-4 py-3 min-w-[90px]"> PAID </th>
              <th className="border border-gray-300 px-4 py-3 min-w-[90px]">অবশিষ্ট</th>
              <th className="border border-gray-300 px-4 py-3 min-w-[110px]">স্ট্যাটাস</th>
              <th className="border border-gray-300 px-4 py-3 min-w-[110px]">Favor</th>
            </tr>
          </thead>
          <tbody>
            {enrichedData.map((person, index) => (
              <tr
                key={index}
                className={`${
                  person.status === "Mill Off" ? "bg-red-100 text-red-700 font-semibold" : ""
                } hover:bg-gray-50`}
              >
                <td className="border border-gray-300 px-4 py-3 text-left">
                  {person.name} - {person.room}
                </td>
                <td className="border border-gray-300 px-4 py-3">{person.eatMills}</td>
                <td className="border border-gray-300 px-4 py-3">{person.bills} ৳</td>
                <td className="border border-gray-300 px-4 py-3">{person.paid} ৳</td>
                <td className="border border-gray-300 px-4 py-3">{person.remaining} ৳</td>
                <td className="border border-gray-300 px-4 py-3">{person.status || "-"}</td>
                <td className="border border-gray-300 px-4 py-3">{person.situation ? "সময় দিলাম" : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
