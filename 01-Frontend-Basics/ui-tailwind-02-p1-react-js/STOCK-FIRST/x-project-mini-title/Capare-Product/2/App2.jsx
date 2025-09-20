import React, { useEffect, useState } from 'react';
import devicesData from './vivo-x-fold5.json';

const Devices = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevice1, setSelectedDevice1] = useState('');
  const [selectedDevice2, setSelectedDevice2] = useState('');
  const [deviceA, setDeviceA] = useState(null);
  const [deviceB, setDeviceB] = useState(null);

  useEffect(() => {
    setDevices(devicesData);
  }, []);

  const handleCompare = () => {
    const a = devices.find(d => d.name === selectedDevice1);
    const b = devices.find(d => d.name === selectedDevice2);
    setDeviceA(a);
    setDeviceB(b);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Compare Mobile Devices</h1>

      {/* Dropdown Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select
          value={selectedDevice1}
          onChange={(e) => setSelectedDevice1(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select First Device</option>
          {devices.map(device => (
            <option key={device.name} value={device.name}>{device.name}</option>
          ))}
        </select>

        <select
          value={selectedDevice2}
          onChange={(e) => setSelectedDevice2(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select Second Device</option>
          {devices.map(device => (
            <option key={device.name} value={device.name}>{device.name}</option>
          ))}
        </select>

        <button
          onClick={handleCompare}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Compare
        </button>
      </div>

      {/* Comparison View */}
      {deviceA && deviceB && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[deviceA, deviceB].map((device, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-2">{device.name}</h2>
              <ul className="space-y-1 text-sm">
                <li><strong>Model:</strong> {device.model}</li>
                <li><strong>Release Date:</strong> {device.releaseDate}</li>
                <li><strong>CPU:</strong> {device.hardwareSoftware?.cpu || "N/A"}</li>
                <li><strong>Display Type:</strong> {device.display?.displayType || "N/A"}</li>
                <li><strong>Primary Camera:</strong> {device.cameras?.primaryCamera?.resolution?.join(", ")}</li>
                <li><strong>Video Recording & FPS:</strong> {device.cameras?.primaryCamera?.videoRecording?.join(", ")} @ {device.cameras?.primaryCamera?.videoFPS?.join(", ")}</li>
                <li><strong>Selfie Camera & Resolution:</strong> {device.cameras?.selfieCamera?.resolution}</li>
                <li><strong>Colors:</strong> {Array.isArray(device.design?.colors) ? device.design.colors.join(", ") : device.design?.colors}</li>
                <li><strong>Battery Capacity:</strong> {device.battery?.capacity}</li>
                <li><strong>Quick Charging:</strong> {device.battery?.quickCharging}</li>
                <li><strong>USB Type-C:</strong> {device.battery?.usbTypeC}</li>
                <li><strong>Internal Storage:</strong> {device.memory?.internalStorage}</li>
                <li><strong>RAM:</strong> {device.memory?.ram}</li>
                <li><strong>SIM Slot:</strong> {device.networkConnectivity?.simSlot}</li>
                <li><strong>Made By:</strong> {device.more?.madeBy}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Devices;
