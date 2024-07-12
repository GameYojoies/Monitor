/** @format */
import Device from "../components/Device";
import React from "react";
import {
  solar1,
  energyFlow,
  battery,
  bg_green,
  bg_yellow,
  bg_red,
  bg_green_per,
  bg_yellow_per,
  bg_red_per,
  flowEnergy,
} from "../images";
import PopupFlow from "./popupFlow/popupFlow";
import { useState, useEffect } from "react";
import axios from "axios";
import { getAccessToken } from "../utils/local-storage";
import useAuth from "../hook/useAuth";
import { useTranslation } from "react-i18next";

const SolarEnergyFlow = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState("Load");
  const [textHead, setTextHead] = useState(`${t("Load")}`);
  const [colorText, setColorText] = useState(3);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const token = getAccessToken();
  const { dataFlow, setDataFlow, solarDate, pin, datanotifydeivece } =
    useAuth();
  const [devicePn, setDevicePn] = useState(null);
  const [formattedDate, setFormattedDate] = useState("-");
  const [countNumber, setCountNumber] = useState(0);
  const [mainDevice, setMainDevice] = useState(null);
  useEffect(() => {
    const foundDevice = datanotifydeivece.find(
      (device) => device.main === true
    );
    setMainDevice(foundDevice);
  }, [datanotifydeivece]);
  const getFormattedDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const timestamp = dataFlow?.time;
    const date = new Date(timestamp);
    const language = localStorage.getItem("Language") || "en-US";
    let formattedDate = date.toLocaleDateString(language, options);
    if (formattedDate === "Invalid Date") {
      formattedDate = "-";
    }
    return formattedDate;
  };

  useEffect(() => {
    const newFormattedDate = getFormattedDate();
    setFormattedDate(newFormattedDate);
  }, [dataFlow?.time, localStorage.getItem("Language")]); // Include dependencies

  useEffect(() => {
    const fetchData = async (date, pin) => {
      try {
        if (pin == null) {
          setDevicePn(null);
        } else {
          setDevicePn(pin.devicePn);
        }

        const response = await axios.get(
          `${import.meta.env.VITE_API_TEST}/reportData/detail?devicePn=${
            pin ? pin.devicePn : ""
          }&date=${date}&page=1&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.result != null) {
          setData(response.data.result[0]);
        } else {
          setData(0);
        }
        console.log(response.data.result[0], "response");
      } catch (error) {
        setError(error);
      }
    };

    if (solarDate && token) {
      fetchData(solarDate, pin);
    }
  }, [solarDate, token, pin]);

  const handleClick = (position) => {
    setCount(position);
    if (position === "Inverter") {
      setTextHead(`${t("Output active power")}`);
      setColorText(1);
    }
    if (position === "PV") {
      setTextHead(`${t("Photovoltaic power")}`);
      setColorText(2);
    }
    if (position === "Load") {
      setTextHead(`${t("Load")}`);
      setColorText(3);
    }
    if (position === "Grid") {
      setTextHead(`${t("Grid")}`);
      setColorText(4);
    }
    if (position === "Battery") {
      setTextHead(`${t("Battery")}`);
      setColorText(5);
    }
  };
  useEffect(() => {
    if (textHead) {
      handleClick(count);
    }
  }, [textHead, handleClick, count]);

  return (
    <div>
      <div className="h-10"></div>
      <div className="flex items-center gap-2 ml-9">
        <img src={solar1} alt="" className="h-[25px]" />
        <h1 className="text-[#001647] font-semibold text-2xl">
          {t("Solar Energy Flow")}
        </h1>
        <div
          className={`h-8 w-20 rounded-md flex justify-center items-center ${
            mainDevice?.status === 10
              ? "bg-gradient-to-r from-[#3DC42D] to-[#31AEE3] shadow-md"
              : ""
          }`}
          style={
            mainDevice?.status !== 10
              ? {
                  background:
                    "linear-gradient(273.58deg, #DF7D22 0%, #E72D22 100%)",
                  boxShadow: "2px 4px 4.4px 0px #0000002E",
                }
              : {}
          }
        >
          {" "}
          <span className="text-white">
            {" "}
            {mainDevice?.status === 10 ? t("ON") : t("OFF")}
          </span>
        </div>
      </div>
      <div className="h-5"></div>
      <div className="w-[95%] m-auto lg:flex lg:flex-col">
        <div className="text-[#ADB5BD] font-semibold flex justify-end">
          <div className="flex gap-2">{formattedDate}</div>
        </div>
        <div className="h-2"></div>
        <div
        
          className="w-[100%] flex flex-row items-center justify-center gap-14 flex-wrap lg:flex-row h-auto  m-auto p-10 bg-white rounded-lg"
          style={{ boxShadow: "2px 2px 15px 0px #00000026" }}
        >
          <div className="flex justify-center items-center h-[400px] w-[400px] relative">
            <div className="lg:h-[400px] lg:w-[400px] absolute">
              <img src={flowEnergy} className="h-[100%] w-[100%]" />
            </div>
        

            {/* ///////////////////////////////////////////////////////onclick popup ///////////////////////////////////////////// */}

            <div
              className="h-[30%] w-48 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 mx-auto cursor-pointer"
              onClick={() => handleClick("Load")}
            ></div>

            <div
              className="h-[20%] w-[130px] absolute top-10 right-[20px] cursor-pointer"
              onClick={() => handleClick("PV")}
            ></div>
            <div
              className="h-[20%] w-[130px] absolute top-10 left-[20px] cursor-pointer"
              onClick={() => handleClick("Inverter")}
            ></div>
            <div
              className="h-[20%] w-[130px] absolute bottom-10 right-[20px] cursor-pointer"
              onClick={() => handleClick("Grid")}
            ></div>
            <div
              className="h-[20%] w-[130px] absolute bottom-10 left-[20px] cursor-pointer flex justify-center items-center"
              onClick={() => handleClick("Battery")}
            >
              <div className=" flex justify-center items-center">
                <img
                  src={battery}
                  alt=""
                  className="w-[40%] h-[25%] pointer-events-none absolute"
                />
                <img
                  src={
                    dataFlow?.batteryCapacity >= 40 &&
                    dataFlow?.batteryCapacity <= 100
                      ? bg_green
                      : dataFlow?.batteryCapacity > 10 &&
                        dataFlow?.batteryCapacity < 40
                      ? bg_yellow
                      : dataFlow?.batteryCapacity >= 0 &&
                        dataFlow?.batteryCapacity <= 10
                      ? bg_red
                      : bg_red
                  }
                  alt=""
                  className="w-[35%] h-[25%] m-auto pointer-events-none absolute"
                />

                <img
                  src={
                    dataFlow?.batteryCapacity >= 40 &&
                    dataFlow?.batteryCapacity <= 100
                      ? bg_green_per
                      : dataFlow?.batteryCapacity > 10 &&
                        dataFlow?.batteryCapacity < 40
                      ? bg_yellow_per
                      : dataFlow?.batteryCapacity >= 0 &&
                        dataFlow?.batteryCapacity <= 10
                      ? bg_red_per
                      : bg_red_per
                  }
                  alt=""
                  className={`w-[${
                    dataFlow?.batteryCapacity >= 40 &&
                    dataFlow?.batteryCapacity <= 100
                      ? "30%"
                      : dataFlow?.batteryCapacity > 10 &&
                        dataFlow?.batteryCapacity < 40
                      ? "10%"
                      : "30%"
                  }] h-[18%] m-auto pointer-events-none absolute`}
                  style={{
                    right:
                      data?.batteryCapacity >= 40 &&
                      data?.batteryCapacity <= 100
                        ? "0%"
                        : data?.batteryCapacity > 10 &&
                          data?.batteryCapacity < 40
                        ? "45%"
                        : "",
                  }}
                />
                <div className="w-[30%] h-[18%]  pointer-events-none text-[#FFF]  text-xs absolute flex justify-center items-center">
                  <span> {dataFlow?.batteryCapacity || 0} %</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[160px] left-[10%] font-bold text-2xl text-[#133261]">
              <span>{dataFlow?.batteryDischargeCurrent || 0}</span>&nbsp;
              <span>A</span>
            </div>
            <div className="absolute bottom-[160px] right-[10%] font-bold text-2xl text-[#133261]">
              <span>{dataFlow?.gridFrequency || 0}</span>&nbsp;<span>Hz</span>
            </div>
            <div className="absolute top-[160px] right-[10%] font-bold text-2xl text-[#133261]">
              <span>{dataFlow?.powerCharging || 0}</span>&nbsp;<span>W</span>
            </div>
            <div className="absolute top-[160px] left-[10%] font-bold text-2xl text-[#133261]">
              <span>{dataFlow?.outputActivePower || 0}</span>&nbsp;
              <span>W</span>
            </div>
            <div className=" pointer-events-none absolute top-[47%] left-0 right-0 transform -translate-y-1/2 mx-auto font-bold text-2xl text-[#133261] flex justify-center">
              <span>{dataFlow?.currentLoadPower || 0}</span>&nbsp;<span>W</span>
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////onclick popup ///////////////////////////////////////////// */}
         
          <div
            className="bg-white w-[90%] lg:w-[450px] h-[560px] rounded-lg"
            style={{ boxShadow: "2px 2px 15px 0px #00000026" }}
          >
            <div className="h-10"></div>
            <div
              className={`w-[90%] m-auto h-16 flex items-center rounded-md ${
                colorText === 1
                  ? "bg-[#FF9F9F]"
                  : colorText === 2
                  ? "bg-[#F2CD97]"
                  : colorText === 3
                  ? "bg-[#E9F0FC]"
                  : colorText === 4
                  ? "bg-[#D496FB]"
                  : "bg-[#00C6C6]"
              } justify-between shadow-md`}
            >
              <span className="ml-5 font-bold text-2xl text-[#133261]	">
                {textHead}
              </span>
              <div className="mr-5 font-bold">
                <span className="text-base mr-2">
                  {" "}
                  {count === "Load"
                    ? dataFlow?.currentLoadPower || 0
                    : count === "PV"
                    ? dataFlow?.powerCharging || 0
                    : count === "Inverter"
                    ? dataFlow?.outputActivePower || 0
                    : count === "Grid"
                    ? dataFlow?.gridFrequency || 0
                    : count === "Battery"
                    ? dataFlow?.batteryDischargeCurrent || 0
                    : null}
                </span>
                <span className="text-base">w</span>
              </div>
            </div>
            <div className="h-2"></div>
            <PopupFlow count={count} data={data} />
          </div>
          <Device/>
        </div>
      </div>
    </div>
  );
};

export default SolarEnergyFlow;
