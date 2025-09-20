import React, { useState } from "react";

// Paste the JSON data here or import it
const data = {
  devices: [
    {
      name: "Vivo X Fold5",
      general: {
        brand: "Vivo",
        model: "X Fold5",
        deviceType: "Smartphone",
        releaseDate: "02 July 2025",
        status: "Available",
      },
      hardwareSoftware: {
        operatingSystem: "Android",
        osVersion: "v15",
        userInterface: "OriginOS 5",
        chipset: "Qualcomm SM8650-AB Snapdragon 8 Gen 3",
        cpu:
          "Octa-core (1x3.3 GHz Cortex-X4 & 3x3.2 GHz Cortex-A720 & 2x3.0 GHz Cortex-A720 & 2x2.3 GHz Cortex-A520)",
        cpuCores: 8,
        architecture: "64 bit",
        fabrication: "3 nm",
        gpu: "Adreno 750",
      },
      display: {
        displayType: "Foldable LTPO AMOLED",
        screenSize: "8.03 inches (20.4 cm)",
        resolution: "2200x2480 px",
        pixelDensity: "413 ppi",
        screenToBodyRatio: "90.9%",
        screenProtection: "Gorilla Glass",
        bezelLessDisplay: true,
        notch: "Punch-hole",
        touchScreen: "Capacitive Touchscreen, Multi-touch",
        brightness: "4500 nits",
        hdrSupport: "HDR 10+",
        refreshRate: "120 Hz",
        features:
          "Cover display: LTPO AMOLED, 120Hz, HDR10+, Dolby Vision, 5500 nits (peak) 6.53 inches, 1172 x 2748 pixels, 21:9 ratio Armor Glass (2nd gen)",
      },
      cameras: {
        primaryCamera: {
          cameraSetup: "Triple",
          resolution: [
            "50 MP, f/1.6, Wide Angle, Primary Camera",
            "50 MP, f/2.6, Periscope Telephoto Camera",
            "50 MP, f/2.1, Ultra-Wide Angle Camera",
          ],
          autofocus: "Laser autofocus",
          ois: true,
          flash: "Dual LED Flash",
          imageResolution: "8150 x 6150 Pixels",
          settings: ["Exposure compensation", "ISO control"],
          zoom: "Digital Zoom",
          shootingModes: ["Continuous Shooting", "High Dynamic Range mode (HDR)"],
          aperture: "f/1.6",
          features: [
            "Auto Flash",
            "Face detection",
            "Touch to focus",
            "Bokeh portrait video",
          ],
          videoRecording: ["7680x4320", "3840x2160", "1920x1080"],
          videoFPS: ["30 fps", "60 fps"],
        },
        selfieCamera: {
          cameraSetup: "Single",
          resolution: [
            "20 MP, f/2.4, Wide Angle, Primary Camera",
            "Cover camera: 20 MP, f/2.4, Wide Angle, Primary Camera",
          ],
          videoRecording: ["1920x1080"],
          videoFPS: "30 fps",
          aperture: "f/2.4",
        },
      },
      design: {
        height: "159.7 mm",
        width: "72.6 mm",
        thickness: "9.2 mm",
        weight: "217 grams",
        build: "Glass front (closed), aluminum alloy frame, glass fiber back",
        colors: ["Titanium Gray", "Green", "White"],
        waterproof: "Water resistant (up to 3m for 30 min)",
        ipRating: "IP58/IP59+",
        ruggedness: "Dust proof",
      },
      battery: {
        type: "Li-Ion (Lithium Ion)",
        capacity: "6000 mAh",
        quickCharging: "80W wired",
        wirelessCharging: "40W wireless",
        reverseCharging: "5W reverse wireless",
        placement: "Non-removable",
        usbTypeC: "USB Type-C 3.2, Display Port",
      },
      memory: {
        internalStorage: "256 GB",
        storageType: "UFS 4.1",
        usbOTG: true,
        ram: "12 GB",
        ramType: "LPDDR5X",
      },
      networkConnectivity: {
        network: ["2G", "3G", "4G", "5G"],
        simSlot: "Dual SIM, GSM+GSM",
        simSize: {
          SIM1: "Nano",
          SIM2: "Nano",
        },
        edge: true,
        gprs: true,
        volte: true,
        speed: ["HSPA", "LTE", "5G"],
        sarValue: {
          head: "0.86 W/kg",
          body: "0.85 W/kg",
        },
        wlan: "Wi-Fi 7 (802.11 a/b/g/n/ac/be/ax) 5GHz 6GHz, MIMO",
        bluetooth: "v5.4",
        gps: "Yes with A-GPS, Glonass",
        infrared: true,
        hotspot: true,
        nfc: true,
        usb: ["Mass storage device", "USB charging"],
      },
      sensorsSecurity: {
        sensors: [
          "Light sensor",
          "Proximity sensor",
          "Accelerometer",
          "Compass",
          "Gyroscope",
        ],
        fingerprintSensor: true,
        fingerSensorPosition: "Side-mounted",
        faceUnlock: true,
      },
      multimedia: {
        loudspeaker: true,
        audioJack: "USB Type-C",
        video: ["8K@30fps", "4K@30/60fps", "1080p@30/60fps", "gyro-EIS"],
      },
      more: {
        madeBy: "China",
        features: ["Accelerometer", "gyro", "proximity", "compass"],
      },
    },
    {
      name: "Techno Spark 40 Pro",
      general: {
        brand: "Techno",
        model: "Spark 40 Pro",
        deviceType: "Smartphone",
        releaseDate: "2024",
        status: "Available",
      },
      hardwareSoftware: {
        operatingSystem: "Android",
        osVersion: "v13",
        userInterface: "HiOS",
        chipset: "MediaTek Helio G85",
        cpu: "Octa-core 2.0 GHz Cortex-A75",
        cpuCores: 8,
        architecture: "64 bit",
        fabrication: "12 nm",
        gpu: "Mali-G52 MC2",
      },
      display: {
        displayType: "IPS LCD",
        screenSize: "6.4 inches",
        resolution: "1080x2400 px",
        pixelDensity: "409 ppi",
        screenToBodyRatio: "83.5%",
        screenProtection: "Not specified",
        bezelLessDisplay: false,
        notch: "Punch-hole",
        touchScreen: "Capacitive Touchscreen, Multi-touch",
        brightness: "450 nits",
        hdrSupport: "No",
        refreshRate: "90 Hz",
        features: "Standard IPS LCD",
      },
      cameras: {
        primaryCamera: {
          cameraSetup: "Dual",
          resolution: [
            "50 MP, f/1.8, Wide Angle, Primary Camera",
            "2 MP, depth sensor",
          ],
          autofocus: "Yes",
          ois: false,
          flash: "LED Flash",
          imageResolution: "Not specified",
          settings: ["HDR"],
          zoom: "Digital Zoom",
          shootingModes: ["Night mode", "Portrait"],
          aperture: "f/1.8",
          features: ["Face detection", "Touch to focus"],
          videoRecording: ["1080p@30fps"],
          videoFPS: ["30 fps"],
        },
        selfieCamera: {
          cameraSetup: "Single",
          resolution: ["8 MP, f/2.0, Wide Angle"],
          videoRecording: ["1080p@30fps"],
          videoFPS: "30 fps",
          aperture: "f/2.0",
        },
      },
      design: {
        height: "164 mm",
        width: "75.8 mm",
        thickness: "8.9 mm",
        weight: "182 grams",
        build: "Glass front, plastic back, plastic frame",
        colors: ["Polar Blue", "Steel Black", "Dawn White"],
        waterproof: "No",
        ipRating: "None",
        ruggedness: "None",
      },
      battery: {
        type: "Li-Ion",
        capacity: "5000 mAh",
        quickCharging: "18W wired",
        wirelessCharging: "No",
        reverseCharging: "No",
        placement: "Non-removable",
        usbTypeC: "USB Type-C 2.0",
      },
      memory: {
        internalStorage: "128 GB",
        storageType: "eMMC 5.1",
        usbOTG: true,
        ram: "8 GB",
        ramType: "LPDDR4X",
      },
      networkConnectivity: {
        network: ["2G", "3G", "4G"],
        simSlot: "Dual SIM, Nano+Nano",
        simSize: {
          SIM1: "Nano",
          SIM2: "Nano",
        },
        edge: true,
        gprs: true,
        volte: true,
        speed: ["HSPA", "LTE"],
        sarValue: {
          head: "Not specified",
          body: "Not specified",
        },
        wlan: "Wi-Fi 802.11 b/g/n",
        bluetooth: "v5.0",
        gps: "Yes with A-GPS",
        infrared: false,
        hotspot: true,
        nfc: false,
        usb: ["Mass storage device", "USB charging"],
      },
      sensorsSecurity: {
        sensors: ["Light sensor", "Proximity sensor", "Accelerometer", "Compass"],
        fingerprintSensor: true,
        fingerSensorPosition: "Rear-mounted",
        faceUnlock: true,
      },
      multimedia: {
        loudspeaker: true,
        audioJack: "3.5 mm",
        video: ["1080p@30fps"],
      },
      more: {
        madeBy: "China",
        features: ["Accelerometer", "gyro", "proximity", "compass"],
      },
    },
  ],
};

export default function Devices() {
  const [selectedDevice, setSelectedDevice] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Mobile Devices Catalog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.devices.map((device, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-1">{device.name}</h2>
                <p className="text-gray-600">{device.general.model}</p>
              </div>
              <button
                onClick={() => setSelectedDevice(device)}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Details
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedDevice && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={() => setSelectedDevice(null)}
            >
              <div
                className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedDevice(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
                  aria-label="Close details modal"
                >
                  &times;
                </button>

                <h2 className="text-2xl font-bold mb-4 text-blue-700">
                  {selectedDevice.name} ({selectedDevice.general.model})
                </h2>

                <div className="space-y-3 text-gray-800">
                  <p>
                    <strong>Release Date:</strong> {selectedDevice.general.releaseDate}
                  </p>

                  <p>
                    <strong>CPU:</strong> {selectedDevice.hardwareSoftware.cpu}
                  </p>

                  <p>
                    <strong>Display Type:</strong> {selectedDevice.display.displayType}
                  </p>

                  <p>
                    <strong>Primary Camera:</strong>{" "}
                    {selectedDevice.cameras.primaryCamera.resolution.join(", ")}
                  </p>

                  <p>
                    <strong>Video Recording & FPS:</strong>{" "}
                    {selectedDevice.cameras.primaryCamera.videoRecording.join(", ")} at{" "}
                    {selectedDevice.cameras.primaryCamera.videoFPS.join(", ")}
                  </p>

                  <p>
                    <strong>Selfie Camera & Resolution:</strong>{" "}
                    {selectedDevice.cameras.selfieCamera.resolution.join(", ")}
                  </p>

                  <p>
                    <strong>Colors:</strong> {selectedDevice.design.colors.join(", ")}
                  </p>

                  <p>
                    <strong>Battery:</strong> Capacity - {selectedDevice.battery.capacity}, Quick Charging -{" "}
                    {selectedDevice.battery.quickCharging}, USB Type-C - {selectedDevice.battery.usbTypeC}
                  </p>

                  <p>
                    <strong>Internal Storage:</strong> {selectedDevice.memory.internalStorage}
                  </p>

                  <p>
                    <strong>RAM:</strong> {selectedDevice.memory.ram}
                  </p>

                  <p>
                    <strong>SIM Slot:</strong> {selectedDevice.networkConnectivity.simSlot}
                  </p>

                  <p>
                    <strong>Made By:</strong> {selectedDevice.more.madeBy}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
