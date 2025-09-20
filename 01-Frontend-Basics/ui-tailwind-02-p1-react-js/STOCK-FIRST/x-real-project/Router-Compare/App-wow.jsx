import React, { useState } from "react";
import routerData from "./router.json";

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

  const isCompareDisabled =
    !firstRouter || !secondRouter || firstRouter === secondRouter;

  const FeatureRow = ({ label, keyName }) => {
    const valA = routerA?.[keyName] || "-";
    const valB = routerB?.[keyName] || "-";
    const isDifferent = valA !== valB;

    return (
      <div
        className={`flex justify-between items-center py-3 px-5 border-b ${
          isDifferent ? "bg-yellow-50" : "bg-white"
        }`}
      >
        <span className="font-semibold text-gray-700">{label}</span>
        <div className="flex gap-6 min-w-[240px] justify-end">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isDifferent
                ? "bg-yellow-200 text-yellow-900"
                : "bg-gray-100 text-gray-600"
            }`}
            title={valA}
          >
            {valA}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isDifferent
                ? "bg-yellow-200 text-yellow-900"
                : "bg-gray-100 text-gray-600"
            }`}
            title={valB}
          >
            {valB}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-14">
        Router Comparison
      </h1>

      <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
        {[firstRouter, secondRouter].map((selected, idx) => (
          <select
            key={idx}
            value={selected}
            onChange={(e) =>
              idx === 0 ? setFirstRouter(e.target.value) : setSecondRouter(e.target.value)
            }
            className="w-full md:w-72 p-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="">
              {idx === 0 ? "Select First Router" : "Select Second Router"}
            </option>
            {routers.map(({ brand, model }, i) => (
              <option key={i} value={model}>
                {brand} - {model}
              </option>
            ))}
          </select>
        ))}

        <button
          onClick={handleCompare}
          disabled={isCompareDisabled}
          className={`w-full md:w-auto px-6 py-3 rounded-lg font-semibold text-white shadow-md transition ${
            isCompareDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Compare
        </button>
      </div>

      {routerA && routerB && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[routerA, routerB].map((router, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-blue-900">{router.model}</h2>
                  <p className="text-gray-500 text-sm mt-1">{router.brand}</p>
                </div>
                <div
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    idx === 0
                      ? "bg-yellow-200 text-yellow-900"
                      : "bg-yellow-200 text-yellow-900"
                  }`}
                >
                  {idx === 0 ? "Router A" : "Router B"}
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                <FeatureRow label="Router Type" keyName="routerType" />
                <FeatureRow label="LAN Standard" keyName="lanStandard" />
                <FeatureRow label="WAN Standard" keyName="wanStandard" />
                <FeatureRow label="Antenna" keyName="antenna" />
                <FeatureRow label="Wi-Fi Generation" keyName="wifiGeneration" />
                <FeatureRow label="Band" keyName="band" />
                <FeatureRow label="Wi-Fi Coverage" keyName="wifiCoverage" />
                <FeatureRow label="Concurrent Users" keyName="concurrentUsers" />
                <FeatureRow label="Mesh Technology" keyName="meshTechnology" />
                <FeatureRow label="MIMO Technology" keyName="mimoTechnology" />
                <FeatureRow label="Color" keyName="color" />
                <FeatureRow label="Warranty" keyName="warranty" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RouterCompare;
