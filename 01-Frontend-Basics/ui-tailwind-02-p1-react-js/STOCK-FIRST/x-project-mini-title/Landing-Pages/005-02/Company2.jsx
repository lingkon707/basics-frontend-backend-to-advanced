import React from "react";
import USA from "./components/USA";
import UK from "./components/UK";
import Spain from "./components/Spain";

const companyData = [
  {
    group: "USA",
    entries: [
      {
        blogName: "Tech Times",
        date: "2025-07-01",
        Capital: "Washington, D.C.",
        President: "Joe Biden",
      },
      {
        blogName: "Biz Insider",
        date: "2025-07-10",
        Capital: "Washington, D.C.",
        President: "Joe Biden",
      },
    ],
  },
  {
    group: "UK",
    entries: [
      {
        blogName: "Global News",
        date: "2025-07-02",
        Capital: "London",
        President: "Rishi Sunak",
      },
    ],
  },
  {
    group: "Spain",
    entries: [
      {
        blogName: "Health Daily",
        date: "2025-07-03",
        Capital: "Madrid",
        President: "Pedro Sánchez",
      },
    ],
  },
];

function Company() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Company Countries Info</h1>

      {companyData.map(({ group, entries }) =>
        entries.map((entry, idx) => {
          const data = { ...entry, country: group };

          switch (group.toLowerCase()) {
            case "usa":
              return <USA key={`${group}-${idx}`}>{data}</USA>;
            case "uk":
              return <UK key={`${group}-${idx}`}>{data}</UK>;
            case "spain":
              return <Spain key={`${group}-${idx}`}>{data}</Spain>;
            default:
              return null;
          }
        })
      )}
    </div>
  );
}

export default Company;
