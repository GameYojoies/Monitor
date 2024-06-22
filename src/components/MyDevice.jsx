import { drop, map } from "../images/Mydevice";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAccessToken } from "../utils/local-storage";
import useAuth from "../hook/useAuth";

const MyDevice = () => {
  const [Pn, setPn] = useState(null);
  const [address, setAddress] = useState(""); 
  const [deviceOptions, setDeviceOptions] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const { fetch, setFetch } = useAuth();

  const token = getAccessToken();
  const API_SERVER = import.meta.env.VITE_API_TEST;

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get(`${API_SERVER}/solarDevice`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.data.records === 0) {
          handleNoDevices();
        } else {
          handleDevices(response.data.result);
        }
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchDevices();
  }, [API_SERVER, token]);

  const handleNoDevices = () => {
    console.log("No devices available");
  };

  const handleDevices = (devices) => {
    setDeviceOptions(devices);

    if (devices.length > 0) {
      const mainDevice = devices.find((device) => device.main === true);
      if (mainDevice) {
        setSelectedDevice(mainDevice);
        setPn(mainDevice.pn);
        setAddress(mainDevice.address); 
        setFetch(true);
      }
    }
  };

  const restartDatalogger = (deviceId) => {
    console.log(`Restarting datalogger for device ID: ${deviceId}`);
  };

  const handleDeviceSelect = async (deviceId) => {
    let parts = deviceId.split(",");
    let part1 = parts[0];
    let part2 = parts[1];
    let part3 = parts[2];

    setPn(part2);
    setAddress(part3);

    const selected = deviceOptions.find((device) => device.id === part1);
    setSelectedDevice(selected);

    try {
      const response = await axios.patch(
        `${API_SERVER}/solarDevice/main/${part1}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.code === 0) {
        setFetch(true); // Fetch devices again to get updated data
      } else {
        console.error(`Error: ${response.data.code}`);
      }
    } catch (error) {
      console.error("Error updating main device:", error);
    }
  };

  return (
    <div className="py-2">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4 mb-4 md:mb-0 md:w-3/4">
          <h1 className="text-2xl font-bold text-[#001647]">MyDevice</h1>
          <div className="bg-gradient-to-r from-[#0079e3] to-[#00437d] px-12 py-1 rounded-[30px] shadow-md flex items-center text-white relative">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col w-[200px] relative">
                <label className="font-semibold text-xs">Device Name</label>
                <select
                  name="device"
                  id="device"
                  className="bg-transparent border-none text-white text-xl rounded-md focus:outline-none focus:border-transparent appearance-none"
                  style={{ backgroundImage: "none" }}
                  onChange={(e) => handleDeviceSelect(e.target.value)}
                >
                  {deviceOptions.map((device) => (
                    <option
                      className="text-black"
                      key={device.id}
                      value={`${device.id},${device.pn},${device.address}`}
                      selected={device.main === true}
                    >
                      {device.name}
                    </option>
                  ))}
                </select>
                <span className="absolute top-3 flex items-center right-0 pointer-events-none">
                  <img className="w-[24px]" src={drop} alt="Dropdown Icon" />
                </span>
              </div>
              <div className="border-r-2 border-gray-300 h-12"></div>
              <div className="flex flex-col w-[170px]">
                <label className="font-semibold text-xs">Device's PN</label>
                <span className="text-xl">{Pn}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4 bg-white p-4 gap-1 flex">
          <img
            src={map}
            alt="Device"
            className="w-[24px] h-[24px] mb-4 md:mb-0"
          />
          <div className="text-sm text-black">{address}</div>
        </div>
      </div>
    </div>
  );
};

export default MyDevice;
