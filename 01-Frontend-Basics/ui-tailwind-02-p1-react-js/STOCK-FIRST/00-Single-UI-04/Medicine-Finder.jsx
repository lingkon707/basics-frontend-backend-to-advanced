import React, { useState, useEffect } from "react";

export default function MedicineFinderBetterUI() {
  const data = [
    {
      sickness: "Headache",
      medicines: [
        {
          name: "Paracetamol 500mg",
          brands: [
            { brand: "Acme Paracetamol", price: 8, packSize: "10 tablets" },
            { brand: "Eskayef Paracetamol", price: 9, packSize: "12 tablets" },
            { brand: "Square Paracetamol", price: 7, packSize: "10 tablets" },
          ],
        },
        {
          name: "Ibuprofen 400mg",
          brands: [
            { brand: "Incepta Ibuprofen", price: 10, packSize: "10 tablets" },
            { brand: "Renata Ibuprofen", price: 11, packSize: "15 tablets" },
            { brand: "ACI Ibuprofen", price: 9, packSize: "10 tablets" },
          ],
        },
        {
          name: "Diclofenac Sodium 50mg",
          brands: [
            { brand: "Beximco Diclofenac", price: 12, packSize: "10 tablets" },
            { brand: "Astra Diclofenac", price: 13, packSize: "12 tablets" },
          ],
        },
      ],
    },
    {
      sickness: "Cold & Flu",
      medicines: [
        {
          name: "Cetirizine 10mg",
          brands: [
            { brand: "Eskayef Cetirizine", price: 7, packSize: "10 tablets" },
            { brand: "ACI Cetirizine", price: 8, packSize: "12 tablets" },
            { brand: "Renata Cetirizine", price: 7, packSize: "10 tablets" },
          ],
        },
        {
          name: "Paracetamol + Phenylephrine",
          brands: [
            { brand: "Square Cold Relief", price: 15, packSize: "10 tablets" },
            { brand: "Incepta Cold Max", price: 14, packSize: "12 tablets" },
          ],
        },
        {
          name: "Loratadine 10mg",
          brands: [
            { brand: "ACI Loratadine", price: 9, packSize: "10 tablets" },
            { brand: "Beximco Loratadine", price: 10, packSize: "12 tablets" },
          ],
        },
      ],
    },
    {
      sickness: "Diabetes",
      medicines: [
        {
          name: "Metformin 500mg",
          brands: [
            { brand: "Eskayef Metformin", price: 20, packSize: "30 tablets" },
            { brand: "Renata Metformin", price: 22, packSize: "30 tablets" },
            { brand: "Square Metformin", price: 21, packSize: "30 tablets" },
          ],
        },
        {
          name: "Glimepiride 2mg",
          brands: [
            { brand: "ACI Glimepiride", price: 25, packSize: "30 tablets" },
            { brand: "Incepta Glimepiride", price: 24, packSize: "30 tablets" },
          ],
        },
        {
          name: "Sitagliptin 50mg",
          brands: [
            { brand: "Beximco Sitagliptin", price: 30, packSize: "30 tablets" },
            { brand: "Eskayef Sitagliptin", price: 29, packSize: "30 tablets" },
          ],
        },
      ],
    },
  ];

  const [selectedSickness, setSelectedSickness] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const onSicknessChange = (e) => {
    const sickness = e.target.value;
    setSelectedSickness(sickness);
    setShowResults(false);

    setTimeout(() => {
      const found = data.find((item) => item.sickness === sickness);
      setMedicines(found ? found.medicines : []);
      setShowResults(true);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-6">
        <h1 className="text-2xl font-extrabold text-blue-900 mb-6 text-center tracking-wide">
          Bangladesh Medicine Finder
        </h1>

        <select
          value={selectedSickness}
          onChange={onSicknessChange}
          className="w-full p-3 text-sm rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-8"
        >
          <option value="" disabled>
            Select Sickness
          </option>
          {data.map((item) => (
            <option key={item.sickness} value={item.sickness}>
              {item.sickness}
            </option>
          ))}
        </select>

        <div
          className={`transition-opacity duration-500 ${
            showResults ? "opacity-100" : "opacity-0"
          }`}
        >
          {medicines.length > 0 ? (
            <div className="space-y-5">
              {medicines.map((med) => (
                <div
                  key={med.name}
                  className="p-4 border border-blue-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-blue-50"
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {med.name}
                  </h3>
                  <p className="mb-2 font-semibold text-blue-700">
                    Available Brands:
                  </p>
                  <ul className="list-disc list-inside text-blue-800 text-sm">
                    {med.brands.map((brand) => (
                      <li
                        key={brand.brand}
                        className="flex justify-between font-medium"
                      >
                        <span>{brand.brand} ({brand.packSize})</span>
                        <span className="text-blue-600 font-bold">
                          ৳{brand.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : selectedSickness ? (
            <p className="text-center text-blue-200 text-base mt-6">
              No medicines found.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
