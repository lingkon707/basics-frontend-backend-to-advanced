import React, { useState } from "react";
import devicesData from "./vivo-x-fold5.json"; // Adjust path if needed

const Devices = () => {
  const [compare1, setCompare1] = useState("");
  const [compare2, setCompare2] = useState("");
  const [showComparison, setShowComparison] = useState(false);

  // Find device by name helper
  const findDeviceByName = (name) => devicesData.find((d) => d.name === name);

  // Device data for comparison
  const deviceA = findDeviceByName(compare1);
  const deviceB = findDeviceByName(compare2);

  const handleCompareSubmit = (e) => {
    e.preventDefault();
    if (compare1 && compare2 && compare1 !== compare2) {
      setShowComparison(true);
    } else {
      alert("Please select two different devices to compare.");
      setShowComparison(false);
    }
  };

  // Render function for each device card
  const renderDeviceCard = (device, index) => (
    <div
      key={index}
      className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
    >
      <h2 className="text-xl font-semibold mb-2">{device.name}</h2>
      <p><strong>Model:</strong> {device.model}</p>
      <p><strong>Release Date:</strong> {device.releaseDate}</p>
      <button
        onClick={() => {
          setCompare1(device.name);
          setCompare2(""); // reset second select
          setShowComparison(false);
        }}
        className="mt-3 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Select to Compare
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Devices Catalog</h1>

      {/* Devices Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-10">
        {devicesData.map(renderDeviceCard)}
      </div>

      {/* Compare Form */}
      <div className="max-w-3xl mx-auto mb-10 p-6 border rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Compare Two Devices</h2>
        <form
          onSubmit={handleCompareSubmit}
          className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center"
        >
          <select
            required
            value={compare1}
            onChange={(e) => {
              setCompare1(e.target.value);
              setShowComparison(false);
            }}
            className="border rounded px-3 py-2 w-full sm:w-1/2"
          >
            <option value="" disabled>
              Select first device
            </option>
            {devicesData.map((device) => (
              <option key={device.name} value={device.name}>
                {device.name}
              </option>
            ))}
          </select>

          <select
            required
            value={compare2}
            onChange={(e) => {
              setCompare2(e.target.value);
              setShowComparison(false);
            }}
            className="border rounded px-3 py-2 w-full sm:w-1/2"
          >
            <option value="" disabled>
              Select second device
            </option>
            {devicesData.map((device) => (
              <option key={device.name} value={device.name}>
                {device.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Compare
          </button>
        </form>
      </div>

      {/* Comparison Result */}
      {showComparison && deviceA && deviceB && (
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Comparison Result
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border rounded-lg p-6">
            {/* Device A */}
            <div className="border rounded p-4 bg-gray-50">
              <h3 className="text-xl font-bold mb-4">{deviceA.name}</h3>
             <ul className="space-y-2 text-sm">
  <li><strong>Mobile Name:</strong> {deviceA.name}</li>
  <li><strong>Model:</strong> {deviceA.model}</li>
  <li><strong>Release Date:</strong> {deviceA.releaseDate}</li>
  
  <li><strong>CPU:</strong> {deviceA.hardwareSoftware?.cpu || "N/A"}</li>
  <li><strong>Display Type:</strong> {deviceA.display?.displayType || "N/A"}</li>
  
  <li><strong>Primary Camera:</strong> 
    {deviceA.cameras?.primaryCamera?.resolution?.join(", ") || "N/A"}
  </li>
  
  <li><strong>Video Recording & FPS:</strong> 
    {deviceA.cameras?.primaryCamera?.videoRecording?.join(", ") || "N/A"} @ 
    {deviceA.cameras?.primaryCamera?.videoFPS?.join(", ") || "N/A"}
  </li>
  
  <li><strong>Selfie Camera & Resolution:</strong> 
    {deviceA.cameras?.selfieCamera?.resolution || "N/A"}
  </li>
  
  <li><strong>Colors:</strong> 
    {Array.isArray(deviceA.design?.colors) ? deviceA.design.colors.join(", ") : deviceA.design?.colors || "N/A"}
  </li>
  
  <li><strong>Battery Capacity:</strong> {deviceA.battery?.capacity || "N/A"}</li>
  <li><strong>Quick Charging:</strong> {deviceA.battery?.quickCharging || "N/A"}</li>
  <li><strong>USB Type-C:</strong> {deviceA.battery?.usbTypeC || "N/A"}</li>
  
  <li><strong>Internal Storage:</strong> {deviceA.memory?.internalStorage || "N/A"}</li>
  <li><strong>RAM:</strong> {deviceA.memory?.ram || "N/A"}</li>
  <li><strong>SIM Slot:</strong> {deviceA.networkConnectivity?.simSlot || "N/A"}</li>
  
  <li><strong>Made By:</strong> {deviceA.more?.madeBy || "N/A"}</li>
</ul>

            </div>

            {/* Device B */}
            <div className="border rounded p-4 bg-gray-50">
              <h3 className="text-xl font-bold mb-4">{deviceB.name}</h3>


           <ul className="space-y-2 text-sm">
  <li><strong>Mobile Name:</strong> {deviceB.name}</li>
  <li><strong>Model:</strong> {deviceB.model}</li>
  <li><strong>Release Date:</strong> {deviceB.releaseDate}</li>
  
  <li><strong>CPU:</strong> {deviceB.hardwareSoftware?.cpu || "N/A"}</li>
  <li><strong>Display Type:</strong> {deviceB.display?.displayType || "N/A"}</li>
  
  <li><strong>Primary Camera:</strong> 
    {deviceB.cameras?.primaryCamera?.resolution?.join(", ") || "N/A"}
  </li>
  
  <li><strong>Video Recording & FPS:</strong> 
    {deviceB.cameras?.primaryCamera?.videoRecording?.join(", ") || "N/A"} @ 
    {deviceB.cameras?.primaryCamera?.videoFPS?.join(", ") || "N/A"}
  </li>
  
  <li><strong>Selfie Camera & Resolution:</strong> 
    {deviceB.cameras?.selfieCamera?.resolution || "N/A"}
  </li>
  
  <li><strong>Colors:</strong> 
    {Array.isArray(deviceB.design?.colors) ? deviceB.design.colors.join(", ") : deviceB.design?.colors || "N/A"}
  </li>
  
  <li><strong>Battery Capacity:</strong> {deviceB.battery?.capacity || "N/A"}</li>
  <li><strong>Quick Charging:</strong> {deviceB.battery?.quickCharging || "N/A"}</li>
  <li><strong>USB Type-C:</strong> {deviceB.battery?.usbTypeC || "N/A"}</li>
  
  <li><strong>Internal Storage:</strong> {deviceB.memory?.internalStorage || "N/A"}</li>
  <li><strong>RAM:</strong> {deviceB.memory?.ram || "N/A"}</li>
  <li><strong>SIM Slot:</strong> {deviceB.networkConnectivity?.simSlot || "N/A"}</li>
  
  <li><strong>Made By:</strong> {deviceB.more?.madeBy || "N/A"}</li>
</ul>




            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Devices;
