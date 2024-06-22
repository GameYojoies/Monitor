import React, { useState, useEffect } from "react";
import axios from "axios";
import { inverter, load, grid, pv, battery } from "../images/Mydevice";
import { getAccessToken } from "../utils/local-storage";

const Device = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [data, setData] = useState(null);
  const token = getAccessToken();
  const API_SERVER = import.meta.env.VITE_API_TEST;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_SERVER}/solarDevice/data`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setData(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [API_SERVER, token]); // ต้องเพิ่ม token เป็น dependency ของ useEffect เพื่อให้เรียก API ใหม่เมื่อ token เปลี่ยน

  // ปรับ devices array ให้ใช้ข้อมูลจาก data ที่ได้จาก API
  const devices = [
    {
      id: 1,
      name: "Load",
      power: data ? data.currentLoadPower : "",
      image: load,
    },
    {
      id: 2,
      name: "Inverter",
      power: data ? data.outputActivePower : "",
      image: inverter,
    },
    { id: 3, name: "PV", power: data ? data.currentLoadPower : "", image: pv },
    {
      id: 4,
      name: "Battery",
      power: data ? data.batteryDischargeCurrent : "",
      image: battery,
    },
    { id: 5, name: "Grid", power: data ? data.gridFrequency : "", image: grid },
  ];

  const togglePopup = (device) => {
    setShowPopup(!showPopup);
    setSelectedDevice(device);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {devices.map((device) => (
        <div
          key={device.id}
          onClick={() => togglePopup(device)}
          className="flex flex-col bg-white shadow-md"
        >
          <div
            className={`rounded-sm text-center cursor-pointer ${
              device.id === 1
                ? "bg-green-400"
                : device.id === 2
                ? "bg-blue-400"
                : device.id === 3
                ? "bg-red-400"
                : device.id === 4
                ? "bg-yellow-400"
                : "bg-purple-400"
            }`}
          >
            {device.name}
          </div>

          <div className="p-5 flex items-center justify-center gap-3 h-full">
            <img
              src={device.image}
              alt={device.name}
              className={`${
                device.id === 3 || device.id === 4
                  ? "w-[65px] h-[30px]"
                  : "w-55 h-[55px]"
              } `}
            />
            <span className="block text-center">{device.power}</span>
          </div>
        </div>
      ))}

      {showPopup && selectedDevice && (
        <div
          onClick={() => setShowPopup(false)}
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-40"
        >
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">
              {selectedDevice.name} Detail
            </h2>
            <p>Additional details or data related to {selectedDevice.name}.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-gray-300 px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Device;
