import React from "react";
import USA from "./components/USA";
import UK from "./components/UK";
import Spain from "./components/Spain";

const blogName = ["Tech Times", "Global News", "Health Daily"];
const date = ["2025-07-01", "2025-07-02", "2025-07-03"];

const country = {
  usa: { Capital: "Washington, D.C.", President: "Joe Biden" },
  uk: { Capital: "London", President: "Rishi Sunak" },
  spain: { Capital: "Madrid", President: "Pedro Sánchez" },
};

function Company() {
  return (
    <div className="p-6 space-y-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Company Countries Info</h1>

      {/* Pass country data as children */}
      <USA>{country.usa}</USA>
      <UK>{country.uk}</UK>
      <Spain>{country.spain}</Spain>
    </div>
  );
}

export default Company;
