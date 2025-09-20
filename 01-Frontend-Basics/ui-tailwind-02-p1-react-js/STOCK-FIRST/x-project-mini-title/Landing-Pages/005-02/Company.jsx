import React from "react";
import USA from "./components/USA";
import UK from "./components/UK";
import Spain from "./components/Spain";

const companyData = [
  {
    blogName: "Tech Times",
    date: "2025-07-01",
    country: "USA",
    Capital: "Washington, D.C.",
    President: "Joe Biden",
  },
  {
    blogName: "Global News",
    date: "2025-07-02",
    country: "UK",
    Capital: "London",
    President: "Rishi Sunak",
  },
  {
    blogName: "Health Daily",
    date: "2025-07-03",
    country: "Spain",
    Capital: "Madrid",
    President: "Pedro Sánchez",
  },
];

function Company() {
  return (
    <div className="p-6 space-y-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Company Countries Info</h1>

      {/* Render based on country */}
      {companyData.map((item) => {
        switch (item.country.toLowerCase()) {
          case "usa":
            return <USA key={item.country}>{item}</USA>;
          case "uk":
            return <UK key={item.country}>{item}</UK>;
          case "spain":
            return <Spain key={item.country}>{item}</Spain>;
          default:
            return null;
        }
      })}
    </div>
  );
}

export default Company;
