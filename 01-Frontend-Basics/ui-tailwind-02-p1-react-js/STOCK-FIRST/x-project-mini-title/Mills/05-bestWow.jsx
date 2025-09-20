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
    <div className="max-w-full md:max-w-6xl mx-auto px-4 py-8 bg-white rounded-xl shadow-lg text-gray-800">
      {/* ✅ Summary Section with Background */}
      <div className="mb-6 bg-gray-100 p-4 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left font-bold text-lg">
        <div>মোট সদস্য: {totalMembers}</div>
        <div className="text-red-700">মিল অফ: {totalMillOff}</div>
        <div>Warning: {totalWarning}</div>
      </div>

      {/* ✅ Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <table className="min-w-[700px] w-full text-sm md:text-base text-center border-collapse">
          <thead className="bg-blue-200 text-blue-900 font-semibold">
            <tr>
              <th className="px-4 py-3 border border-gray-300 text-left">নাম (রুম)</th>
              <th className="px-4 py-3 border border-gray-300">মিল</th>
              <th className="px-4 py-3 border border-gray-300">বিল</th>
              <th className="px-4 py-3 border border-gray-300">পরিশোধ</th>
              <th className="px-4 py-3 border border-gray-300">অবশিষ্ট</th>
              <th className="px-4 py-3 border border-gray-300">স্ট্যাটাস</th>
              <th className="px-4 py-3 border border-gray-300">সহানুভূতি</th>
            </tr>
          </thead>
          <tbody>
            {enrichedData.map((person, index) => {
              const isMillOff = person.status === "Mill Off";

              return (
                <tr
                  key={index}
                  className={`${
                    isMillOff
                      ? "bg-red-700 text-white font-bold"
                      : "hover:bg-gray-50"
                  } transition-all`}
                >
                  <td className="px-4 py-3 border border-gray-300 text-left">
                    {person.name} - {person.room}
                  </td>
                  <td className="px-4 py-3 border border-gray-300">{person.eatMills}</td>
                  <td className="px-4 py-3 border border-gray-300">{person.bills} ৳</td>
                  <td className="px-4 py-3 border border-gray-300">{person.paid} ৳</td>
                  <td className="px-4 py-3 border border-gray-300">{person.remaining} ৳</td>
                  <td className="px-4 py-3 border border-gray-300">{person.status || "-"}</td>
                  <td className="px-4 py-3 border border-gray-300">
                    {person.situation ? "সময় দিলাম" : "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
