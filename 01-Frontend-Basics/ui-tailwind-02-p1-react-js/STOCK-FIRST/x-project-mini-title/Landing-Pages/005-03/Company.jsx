import React from "react";
import USA from "./components/USA";
import UK from "./components/UK";
import Spain from "./components/Spain";

const companyData = [
  {
    continent: "North America",
    countries: [
      {
        name: "USA",
        capital: "Washington, D.C.",
        president: "Joe Biden",
        organizations: [
          {
            orgName: "TechMedia Group",
            
            entries: [
              {
                blogName: "Tech Times",
                date: "2025-07-01",
                author: "Alice Johnson",
                topic: "AI & Robotics",
              },
              {
                blogName: "Biz Insider",
                date: "2025-07-10",
                author: "Michael Chen",
                topic: "Startups",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    continent: "Europe",
    countries: [
      {
        name: "UK",
        capital: "London",
        president: "Rishi Sunak",
        organizations: [
          {
            orgName: "Global Media Ltd.",
            entries: [
              {
                blogName: "Global News",
                date: "2025-07-02",
                author: "Emma Watson",
                topic: "Politics",
              },
            ],
          },
        ],
      },
      {
        name: "Spain",
        capital: "Madrid",
        president: "Pedro Sánchez",
        organizations: [
          {
            orgName: "Salud Digital",
            entries: [
              {
                blogName: "Health Daily",
                date: "2025-07-03",
                author: "Carlos Ruiz",
                topic: "Public Health",
              },
            ],
          },
        ],
      },
    ],
  },
];

function Company() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Company Countries Info</h1>

      {/* ✅ Correctly wrapped .map() inside JSX curly braces */}
      {companyData.map((region) =>
        region.countries.map((country) =>
          country.organizations.map((org) =>
            org.entries.map((entry, idx) => {
              const props = {
                country: country.name,
                capital: country.capital,
                president: country.president,
                org: org.orgName,
                ...entry,
              };

              switch (country.name.toLowerCase()) {
                case "usa":
                  return <USA key={`${country.name}-${idx}`}>{props}</USA>;
                case "uk":
                  return <UK key={`${country.name}-${idx}`}>{props}</UK>;
                case "spain":
                  return <Spain key={`${country.name}-${idx}`}>{props}</Spain>;
                default:
                  return null;
              }
            })
          )
        )
      )}
    </div>
  );
}

export default Company;
