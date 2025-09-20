import React, { useState } from "react";

export default function MedicineFinderWithTotal() {
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
  const [checkedItems, setCheckedItems] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);

  const onSicknessChange = (e) => {
    const sickness = e.target.value;
    setSelectedSickness(sickness);
    setShowResults(false);
    setCheckedItems({});
    setTotalPrice(null);

    setTimeout(() => {
      const found = data.find((item) => item.sickness === sickness);
      setMedicines(found ? found.medicines : []);
      setShowResults(true);
    }, 150);
  };

  const toggleCheck = (medName, brandName, price) => {
    const key = `${medName}__${brandName}`;
    setCheckedItems((prev) => {
      const newChecked = { ...prev };
      if (newChecked[key]) {
        delete newChecked[key];
      } else {
        newChecked[key] = price;
      }
      return newChecked;
    });
  };

  const onSubmit = () => {
    const sum = Object.values(checkedItems).reduce((acc, val) => acc + val, 0);
    setTotalPrice(sum);
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
              className="space-y-5"
            >
              {medicines.map((med) => (
                <div
                  key={med.name}
                  className="p-4 border border-blue-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-blue-50"
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    {med.name}
                  </h3>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    {med.brands.map((brand) => {
                      const key = `${med.name}__${brand.brand}`;
                      return (
                        <li
                          key={brand.brand}
                          className="flex items-center justify-between"
                        >
                          <label
                            htmlFor={key}
                            className="flex items-center cursor-pointer select-none"
                          >
                            <input
                              id={key}
                              type="checkbox"
                              checked={!!checkedItems[key]}
                              onChange={() =>
                                toggleCheck(med.name, brand.brand, brand.price)
                              }
                              className="mr-3 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span>
                              {brand.brand} ({brand.packSize})
                            </span>
                          </label>
                          <span className="text-blue-700 font-semibold">
                            ৳{brand.price}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
              <button
                type="submit"
                className="mt-4 w-full bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
              >
                Calculate Total Price
              </button>
            </form>
          ) : selectedSickness ? (
            <p className="text-center text-blue-200 text-base mt-6">
              No medicines found.
            </p>
          ) : null}
        </div>

        {totalPrice !== null && (
          <div className="mt-6 bg-blue-100 border border-blue-300 rounded-lg p-4 text-center text-blue-900 font-bold text-lg shadow-inner">
            Total Price: ৳{totalPrice}
          </div>
        )}
      </div>
    </div>
  );
}
