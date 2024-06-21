import React, { useState } from "react";
import { inverter, load } from "../images/Mydevice";

const Device = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const devices = [
    { id: 1, name: "Device 1", power: "0.450 W", image: inverter },
    { id: 2, name: "Device 2", power: "0.550 W", image: load },
    // ต่อไปเพิ่มอุปกรณ์อื่น ๆ ที่ต้องการแสดงรูปภาพ
    { id: 3, name: "Device 3", power: "0.650 W", image: inverter },
    { id: 4, name: "Device 4", power: "0.750 W", image: load },
    { id: 5, name: "Device 5", power: "0.850 W", image: inverter }
  ];

  const togglePopup = (device) => {
    setShowPopup(!showPopup);
    setSelectedDevice(device);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {devices.map((device) => (
        <div key={device.id} onClick={() => togglePopup(device)} className="flex flex-col bg-white shadow-md">
          <div
            className="bg-slate-400 rounded-sm text-center cursor-pointer"
            
          >
            {device.name}
          </div>
          <div className="p-5 flex items-center justify-center gap-3">
            <img src={device.image} alt={device.name} className="w-[55px] h-[55px] " />
            <span className="block text-center">{device.power}</span>
          </div>
        </div>
      ))}

      {showPopup && selectedDevice && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-40">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">{selectedDevice.name} Detail</h2>
            <p>Additional details or data related to {selectedDevice.name}.</p>
            <button onClick={() => setShowPopup(false)} className="mt-4 bg-gray-300 px-4 py-2 rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Device;
