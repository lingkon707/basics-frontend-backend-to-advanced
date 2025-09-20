import React, { useState } from "react";
import routerData from "./router.json";

const RouterCompare = () => {
  const [routers] = useState(routerData);
  const [firstRouter, setFirstRouter] = useState("");
  const [secondRouter, setSecondRouter] = useState("");
  const [routerA, setRouterA] = useState(null);
  const [routerB, setRouterB] = useState(null);

  const handleCompare = () => {
    if (firstRouter && secondRouter && firstRouter !== secondRouter) {
      const a = routers.find((r) => r.model === firstRouter);
      const b = routers.find((r) => r.model === secondRouter);
      setRouterA(a);
      setRouterB(b);
    } else {
      alert("Please select two different routers to compare.");
    }
  };

  const renderRow = (label, key) => (
    <tr className="even:bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
      <td className="px-4 py-3 font-medium text-gray-700">{label}</td>
      <td className="px-4 py-3 text-center text-gray-800">{routerA?.[key] || "-"}</td>
      <td className="px-4 py-3 text-center text-gray-800">{routerB?.[key] || "-"}</td>
    </tr>
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-extrabold text-center mb-6 text-indigo-700">
        Compare Routers
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 text-base">
        <select
          value={firstRouter}
          onChange={(e) => setFirstRouter(e.target.value)}
          className="border border-indigo-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          <option value="">Select First Router</option>
          {routers.map((router, idx) => (
            <option key={idx} value={router.model}>
              {router.brand} - {router.model}
            </option>
          ))}
        </select>

        <select
          value={secondRouter}
          onChange={(e) => setSecondRouter(e.target.value)}
          className="border border-indigo-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          <option value="">Select Second Router</option>
          {routers.map((router, idx) => (
            <option key={idx} value={router.model}>
              {router.brand} - {router.model}
            </option>
          ))}
        </select>

        <button
          onClick={handleCompare}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          Compare
        </button>
      </div>

      {routerA && routerB && (
        <div className="overflow-x-auto rounded-md border border-indigo-200 shadow-sm">
          <table className="w-full border-collapse text-base">
            <thead className="bg-indigo-100 text-indigo-900">
              <tr>
                <th className="px-4 py-3 text-left w-1/3">Feature</th>
                <th className="px-4 py-3 text-center">{routerA.model}</th>
                <th className="px-4 py-3 text-center">{routerB.model}</th>
              </tr>
            </thead>
            <tbody>
              {renderRow("Brand", "brand")}
              {renderRow("Model", "model")}
              {renderRow("Router Type", "routerType")}
              {renderRow("LAN Standard", "lanStandard")}
              {renderRow("WAN Standard", "wanStandard")}
              {renderRow("Antenna", "antenna")}
              {renderRow("Wi-Fi Generation", "wifiGeneration")}
              {renderRow("Band", "band")}
              {renderRow("Wi-Fi Coverage", "wifiCoverage")}
              {renderRow("Concurrent Users", "concurrentUsers")}
              {renderRow("Mesh Technology", "meshTechnology")}
              {renderRow("MIMO Technology", "mimoTechnology")}
              {renderRow("Color", "color")}
              {renderRow("Warranty", "warranty")}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RouterCompare;
