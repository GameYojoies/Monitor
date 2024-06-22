/** @format */

import React from "react";
import icons1 from "../images/Monitor/solar1.png";
import icons2 from "../images/Monitor/energyFlow.png";
import PopupFlow from "./popupFlow/popupFlow";
import { useState, useEffect } from "react";
import axios from "axios";
import { getAccessToken } from "../utils/local-storage";
import useAuth from "../hook/useAuth";

const SolarEnergyFlow = () => {
  const [count, setCount] = useState("Load");
  const [textHead, setTextHead] = useState("Load");
  const [colorText, setColorText] = useState("#E9F0FC");
  const [data, setData] = useState(null);
  const { dataFlow, setDataFlow } = useAuth();
  const [error, setError] = useState(null);
  const token = getAccessToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_TEST}/reportData/detail?devicePn=402A8FD7707C&date=2024-06-22&page=1&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setData(response.data.result[0]);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [token]); // Include any 

  useEffect(() => {
    if (data) {
      console.log(data, "data after setData");
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const handleClick = (position) => {
    setCount(position);
    if (position === "Inverter") {
      setTextHead("Output active power");
      setColorText(1);
    }
    if (position === "PV") {
      setTextHead("Photovoltaic power");
      setColorText(2);
    }
    if (position === "Load") {
      setTextHead(position);
      setColorText(3);
    }
    if (position === "Grid") {
      setTextHead(position);
      setColorText(4);
    }
    if (position === "Battery") {
      setTextHead(position);
      setColorText(5);
    }
  };
  return (
    <div>
      <div className="h-10"></div>
      <div className="flex items-center gap-2">
        <img src={icons1} alt="" className="h-[25px]" />
        <h1 className="text-[#001647] font-semibold text-2xl">
          Solar Energy Flow
        </h1>
        <div className="bg-gradient-to-r from-[#3DC42D] to-[#31AEE3] shadow-md h-8 w-20 rounded-md  flex justify-center items-center">
          <span className="text-white"> ON </span>
        </div>
      </div>
      <div className="h-5"></div>
      <div className="w-[90%] m-auto lg:flex lg:flex-col">
        <div className="text-[#ADB5BD] font-semibold flex justify-end">
          <div className="flex gap-2">
            <span>09:00 PM</span>
            <span>Monday, 22 June, 2024</span>
          </div>
        </div>
        <div className="h-2"></div>
        <div className="w-[100%] flex flex-col lg:flex-row h-[auto] m-auto">
          <div className="h-auto lg:h-[] w-full lg:w-[50%] relative">
            <img src={icons2} alt="" className="w-[100%] h-[650px] m-auto" />
            {/* ///////////////////////////////////////////////////////onclick popup ///////////////////////////////////////////// */}
            <div
              className="h-[30%] w-48 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 mx-auto"
              onClick={() => handleClick("Load")}
            ></div>

            <div
              className="h-[20%] w-48 absolute top-2 right-[8%]"
              onClick={() => handleClick("PV")}
            ></div>
            <div
              className="h-[20%] w-48 absolute top-2 left-[8%]"
              onClick={() => handleClick("Inverter")}
            ></div>
            <div
              className="h-[20%] w-48 absolute bottom-8 right-[8%]"
              onClick={() => handleClick("Grid")}
            ></div>
            <div
              className="h-[20%] w-48 absolute bottom-8 left-[8%]"
              onClick={() => handleClick("Battery")}
            ></div>
            <div className="absolute bottom-48 left-[15%] font-bold text-2xl text-[#133261]">
              <span>{ dataFlow?.batteryDischargeCurrent || 0}</span>&nbsp;<span>A</span>
            </div>
            <div className="absolute bottom-[180px] right-[14%] font-bold text-2xl text-[#133261]">
              <span>{ dataFlow?.gridFrequency || 0}</span>&nbsp;<span>Hz</span>
            </div>
            <div className="absolute top-40 right-[15%] font-bold text-2xl text-[#133261]">
              <span>{ dataFlow?.powerCharging || 0}</span>&nbsp;<span>W</span>
            </div>
            <div className="absolute top-40 left-[13%] font-bold text-2xl text-[#133261]">
              <span>{ dataFlow?.outputActivePower || 0}</span>&nbsp;<span>W</span>
            </div>
            <div className=" pointer-events-none absolute top-[45%] left-0 right-0 transform -translate-y-1/2 mx-auto font-bold text-2xl text-[#133261] flex justify-center">
              <span>{ dataFlow?.currentLoadPower || 0}</span>&nbsp;<span>W</span>
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////onclick popup ///////////////////////////////////////////// */}

          <div className="bg-white w-full lg:w-[50%] h-auto lg:h-[650px] rounded-md" style={{ boxShadow: '2px 2px 15px 0px #00000026' }}>
          <div className="h-10"></div>
            <div
              className={`w-[90%] m-auto h-16 flex items-center rounded-md ${
                colorText === 1
                  ? "bg-[#F2CD97]"
                  : colorText === 2
                  ? "bg-[#FF9F9F]"
                  : colorText === 3
                  ? "bg-[#E9F0FC]"
                  : colorText === 4
                  ? "bg-[#D496FB]"
                  : "bg-[#00C6C6]"
              } justify-between shadow-md`}
            >
              <span className="ml-5 font-bold text-4xl text-[#133261]	">
                {textHead}
              </span>
              <div className="mr-5 font-bold">
                <span className="text-base mr-2"> {count === "Load" ? (dataFlow?.currentLoadPower || 0) : count === "PV" ? (dataFlow?.powerCharging || 0) : count === "Inverter" ? (dataFlow?.outputActivePower || 0) : count === "Grid" ? (dataFlow?.gridFrequency || 0) : count === "Battery" ? (dataFlow?.batteryDischargeCurrent || 0) : null}</span>
                <span className="text-base">w</span>
              </div>
            </div>
            <div className="h-2"></div>
            <PopupFlow count={count}  data={data}/>
            {/* <div className='w-[90%] m-auto h-16 flex items-center  justify-between '>
        <span className='ml-5 '>Load percentage</span>
        <div className='mr-5'>
          <span className='text-base mr-5'>0</span>
          <span className='text-base text-[#A6A6A6]'>%</span>
        </div>
    
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarEnergyFlow;
