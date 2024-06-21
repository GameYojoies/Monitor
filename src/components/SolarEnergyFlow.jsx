/** @format */

import React from "react"
import icons1 from "../images/Monitor/solar1.png"
import icons2 from "../images/Monitor/energyFlow.png"
import PopupFlow from "./popupFlow/popupFlow"
import {useState} from "react"
const SolarEnergyFlow = () => {
  const [count, setCount] = useState("Load")
  const [textHead, setTextHead] = useState("Load")
  const [colorText, setColorText] = useState("#E9F0FC")

  const handleClick = (position) => {
    setCount(position)
    if (position === "Inverter") {
      setTextHead("Output active power")
      setColorText("#FF9F9F")
    }
    if (position === "PV") {
      setTextHead("Photovoltaic power")
      setColorText("#F2CD97")
    }
    if (position === "Load") {
      setTextHead(position)
      setColorText("#E9F0FC")
    }
    if (position === "Grid") {
      setTextHead(position)
      setColorText("#D496FB")
    }
    if (position === "Battery") {
      setTextHead(position)
      setColorText("#00C6C6")
    }
  }
  return (
    <div>
      <div className="h-10"></div>
      <div className="flex items-center gap-2">
        <img
          src={icons1}
          alt=""
          className="h-[25px]"
        />
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
            <img
              src={icons2}
              alt=""
              className="w-[100%] h-[650px] m-auto"
            />
            {/* ///////////////////////////////////////////////////////onclick popup ///////////////////////////////////////////// */}
            <div
              className="h-[30%] w-48 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 mx-auto"
              onClick={() => handleClick("Load")}></div>

            <div
              className="h-[20%] w-48 absolute top-2 right-[8%]"
              onClick={() => handleClick("PV")}></div>
            <div
              className="h-[20%] w-48 absolute top-2 left-[8%]"
              onClick={() => handleClick("Inverter")}></div>
            <div
              className="h-[20%] w-48 absolute bottom-8 right-[8%]"
              onClick={() => handleClick("Grid")}></div>
            <div
              className="h-[20%] w-48 absolute bottom-8 left-[8%]"
              onClick={() => handleClick("Battery")}></div>
          </div>
          {/* ///////////////////////////////////////////////////////onclick popup ///////////////////////////////////////////// */}

          <div className="bg-white w-full lg:w-[50%] h-auto lg:h-[650px] rounded-md shadow-lg">
            <div className="h-4"></div>
            <div
              className={`w-[90%] m-auto h-16 flex items-center bg-[${colorText}] justify-between shadow-md`}>
              <span className="ml-5 font-bold text-4xl	">{textHead}</span>
              <div className="mr-5 font-bold">
                <span className="text-base mr-2">0</span>
                <span className="text-base">w</span>
              </div>
            </div>
            <div className="h-2"></div>
            <PopupFlow count={count} />
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
  )
}

export default SolarEnergyFlow
