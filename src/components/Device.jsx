import React, { useState, useEffect } from "react";
import axios from "axios";
import { inverter, load, grid, pv, battery, } from "../images/Mydevice";
import { getAccessToken } from "../utils/local-storage";
import useAuth from "../hook/useAuth";


const Device = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const token = getAccessToken();
  const API_SERVER = import.meta.env.VITE_API_TEST;
  const { fetch, setFetch,setPin,dataFlow ,setDataFlow} = useAuth();
  console.log(fetch);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_SERVER}/solarDevice/data`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setDataFlow(response.data.result);
      setFetch(false); // Reset fetch state
      setPin(response.data.result? response.data.result : null)
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (fetch) {
      fetchData();
    }
  }, [fetch, API_SERVER, token]);

  const devices = [
    {
      id: 1,
      name: "Load",
      power: dataFlow ? dataFlow.currentLoadPower + " W" : "0"+ " W" ,
      image: load,
    },
    {
      id: 2,
      name: "Inverter",
      power: dataFlow ? dataFlow.outputActivePower + " W" : "0"+ " W" ,
      image: inverter,
    },
    { id: 3, name: "PV", power: dataFlow ? dataFlow.powerCharging + " W" : "0"+ " W" , image: pv },
    {
      id: 4,
      name: "Battery",
      power: dataFlow ? dataFlow.batteryDischargeCurrent + " A" : "0"+ " A",
      image: battery,
    },
    { id: 5, name: "Grid", power: dataFlow ? dataFlow.gridFrequency + " Hz" : "0"+ " Hz" , image: grid },
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
            className={`rounded-[5px] py-2 text-center cursor-pointer ${
              device.id === 1
                ? "bg-[#BBD6EE]"
                : device.id === 2
                ? "bg-[#FF9F9F]"
                : device.id === 3
                ? "bg-[#F2CD97]"
                : device.id === 4
                ? "bg-[#00C6C6]"
                : "bg-[#D496FB]"
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
            {device.id === 4 ? (
              <div className="flex flex-col">
                <span className="block text-center">{device.power}</span>
                <div className="border-t-2  w-[60px]">
                  <span className="block text-center">
                    {dataFlow ? dataFlow.batteryCapacity + " %" : "0"+ " %"}
                  </span>
                </div>
              </div>
            ) : (
              <span className="block text-center">{device.power}</span>
            )}
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
