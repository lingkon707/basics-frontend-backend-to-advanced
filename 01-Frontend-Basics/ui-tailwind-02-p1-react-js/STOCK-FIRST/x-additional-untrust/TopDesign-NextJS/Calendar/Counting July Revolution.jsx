import { useMemo } from "react";

export default function DateRangeList() {
  // Generate date list from 1 July 2024 to 20 Feb 2026
  const dates = useMemo(() => {
    const start = new Date("2024-07-01");
    const end = new Date("2026-02-20");
    const result = [];

    let current = new Date(start);
    let count = 1;

    while (current <= end) {
      result.push({
        number: count,
        date: new Date(current),
      });

      current.setDate(current.getDate() + 1);
      count++;
    }

    return result;
  }, []);

  // Format date like: 01 July 2024
  function formatDate(date) {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md text-gray-900 font-sans">
      <h1 className="text-2xl font-semibold mb-6">
      Counting July Revolution (Bangladesh)

      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[80vh] overflow-y-auto pr-2">
        {dates.map(({ number, date }) => (
          <div
            key={number}
            className="py-2 px-3 border border-gray-200 rounded-md hover:bg-indigo-50 transition text-sm"
          >
            <span className="font-semibold text-indigo-600 mr-2">{number}.</span>
            {formatDate(date)}
          </div>
        ))}
      </div>
    </div>
  );
}
