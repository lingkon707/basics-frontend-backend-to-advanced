import React, { useState } from "react";
import routerData from "./router.json"; // ✅ Adjust path if needed

const RouterCompare = () => {
  const [routers] = useState(routerData);
  const [firstRouter, setFirstRouter] = useState("");
  const [secondRouter, setSecondRouter] = useState("");
  const [routerA, setRouterA] = useState(null);
  const [routerB, setRouterB] = useState(null);

  const handleCompare = () => {
    const a = routers.find((r) => r.model === firstRouter);
    const b = routers.find((r) => r.model === secondRouter);
    setRouterA(a);
    setRouterB(b);
  };

  const renderRow = (label, key) => (
    <tr className="border-b">
      <td className="p-2 font-medium text-gray-700">{label}</td>
      <td className="p-2 text-center">{routerA?.[key] || "-"}</td>
      <td className="p-2 text-center">{routerB?.[key] || "-"}</td>
    </tr>
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Compare Routers</h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        <select
          value={firstRouter}
          onChange={(e) => setFirstRouter(e.target.value)}
          className="border p-2 rounded"
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
          className="border p-2 rounded"
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
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Compare
        </button>
      </div>

      {routerA && routerB && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border text-gray-800 bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 w-1/3">Feature</th>
                <th className="p-2 text-center">{routerA.model}</th>
                <th className="p-2 text-center">{routerB.model}</th>
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
