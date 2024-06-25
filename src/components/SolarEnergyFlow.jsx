/** @format */

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
  const { dataFlow, setDataFlow, solarDate, pin } = useAuth();
  const [devicePn, setDevicePn] = useState(null);
  const [formattedDate, setFormattedDate] = useState("-");
  const [countNumber, setCountNumber] = useState(0);

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
    let formattedDate = date.toLocaleDateString("en-US", options);

    if (formattedDate === "Invalid Date") {
      formattedDate = "-";
    } else {
      if (language === "TH") {
        formattedDate = date.toLocaleDateString("th-TH", options);
      } else {
        formattedDate = date.toLocaleDateString("en-US", options);
      }
    }
    return formattedDate;
  };

  useEffect(() => {
    // Update date on component mount
    setFormattedDate(getFormattedDate());

    const intervalId = setInterval(() => {
      setFormattedDate(getFormattedDate());
    }, 1000); // Poll every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

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
        console.log(response, "response");
      } catch (error) {
        setError(error);
      }
    };

    if (solarDate && token) {
      fetchData(solarDate, pin);
    }
  }, [solarDate, token, pin]);

  useEffect(() => {
    if (data) {
    }
  }, [data, solarDate, pin]);

  if (error) {
  }
  const handleClick = (position) => {

    setCount(position);
    if (position === "Inverter") {
      setTextHead(`${t("Output active power")}`);
      setColorText(1);
    }
    if (position === "PV") {
      setTextHead( `${t("Photovoltaic power")}`);
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
  
  return (
    <div>
      <div className="h-10"></div>
      <div className="flex items-center gap-2 ml-14">
        <img src={solar1} alt="" className="h-[25px]" />
        <h1 className="text-[#001647] font-semibold text-2xl">
          {t("Solar Energy Flow")}
        </h1>
        <div className="bg-gradient-to-r from-[#3DC42D] to-[#31AEE3] shadow-md h-8 w-20 rounded-md  flex justify-center items-center">
          <span className="text-white"> {t("ON")}
          </span>
        </div>
      </div>
      <div className="h-5"></div>
      <div className="w-[90%] m-auto lg:flex lg:flex-col">
        <div className="text-[#ADB5BD] font-semibold flex justify-end">
          <div className="flex gap-2">{formattedDate}</div>
        </div>
        <div className="h-2"></div>
        <div className="w-[100%] flex flex-col lg:flex-row h-[auto] m-auto">
          <div className="h-auto lg:h-[] w-full lg:w-[50%] relative">
            <img
              src={energyFlow}
              alt=""
              className="w-[100%] h-[650px] m-auto"
            />
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
              className="h-[20%] w-[20%] absolute bottom-8 left-[8%] "
              onClick={() => handleClick("Battery")}
            >
              <div>
                <img
                  src={battery}
                  alt=""
                  className="w-[40%] h-[25%] m-auto pointer-events-none	 top-8  right-[30%] absolute"
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
                  className="w-[35%] h-[25%] m-auto pointer-events-none top-8 right-[35%] absolute"
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
                      ? "30%"
                      : "10%"
                  }] h-[18%] m-auto pointer-events-none top-[37px]  absolute`}
                  style={{
                    right:
                      dataFlow?.batteryCapacity >= 40 &&
                      dataFlow?.batteryCapacity <= 100
                        ? "37%"
                        : dataFlow?.batteryCapacity > 10 &&
                          dataFlow?.batteryCapacity < 40
                        ? "45%"
                        : "56%",
                  }}
                />
                <div className="w-[30%] h-[18%] m-auto pointer-events-none  top-[40px] text-[#FFF]  text-xs	 right-[32%] absolute">
                  {" "}
                  {dataFlow?.batteryCapacity || 0} %
                </div>
              </div>
            </div>

            <div className="absolute bottom-48 left-[15%] font-bold text-2xl text-[#133261]">
              <span>{dataFlow?.batteryDischargeCurrent || 0}</span>&nbsp;
              <span>A</span>
            </div>
            <div className="absolute bottom-[180px] right-[14%] font-bold text-2xl text-[#133261]">
              <span>{dataFlow?.gridFrequency || 0}</span>&nbsp;<span>Hz</span>
            </div>
            <div className="absolute top-40 right-[15%] font-bold text-2xl text-[#133261]">
              <span>{dataFlow?.powerCharging || 0}</span>&nbsp;<span>W</span>
            </div>
            <div className="absolute top-40 left-[13%] font-bold text-2xl text-[#133261]">
              <span>{dataFlow?.outputActivePower || 0}</span>&nbsp;
              <span>W</span>
            </div>
            <div className=" pointer-events-none absolute top-[45%] left-0 right-0 transform -translate-y-1/2 mx-auto font-bold text-2xl text-[#133261] flex justify-center">
              <span>{dataFlow?.currentLoadPower || 0}</span>&nbsp;<span>W</span>
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////onclick popup ///////////////////////////////////////////// */}

          <div
            className="bg-white w-full lg:w-[50%] h-auto lg:h-[650px] rounded-md"
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
        </div>
      </div>
    </div>
  );
};

export default SolarEnergyFlow;
