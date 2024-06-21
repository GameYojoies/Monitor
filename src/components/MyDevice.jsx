import React from "react";
import {drop,map} from "../images/Mydevice"
const MyDevice = () => {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between">
        {/* Box 1 */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-[#001647]">MyDevice</h1>
          <div className="bg-[#001647] px-[50px] py-1 rounded-[30px] shadow-md flex items-center text-white relative">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col w-[200px] relative">
                <label className="font-semibold  text-xs">Device Name</label>
                <select
                  name="device"
                  id="device"
                  className="bg-transparent border-none text-white text-xl  rounded-md focus:outline-none focus:border-transparent appearance-none"
                  style={{ backgroundImage: "none" }}
                >
                  <option className="text-black py-2 " value="bieber">
                    Bieber
                  </option>
                  <option className="text-black " value="device2">
                    Device 2
                  </option>
                  <option className="text-black py-2" value="device3">
                    Device 3
                  </option>
                </select>
                <span className="absolute top-3  flex items-center right-0 pointer-events-none">
                <img className="w-[24px]" src={drop} alt="Dropdown Icon" />
                </span>
              </div>
              <div className="border-r-2 border-gray-300 h-12"></div>
              <div className="flex flex-col w-[170px]">
                <label className="font-semibold text-xs">Device's PN</label>
                <span className="text-xl">A1234567890888</span>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-1/4 bg-white p-4  gap-1 flex">
          <img
            src={map}
            alt="Device"
            className="w-[24px] mb-4 "
          />
          <div className="text-sm">
            159/190 M.5 North Pattaya Rd., Naklua Sub-district, Banglamung
            District, Chonburi 20150
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDevice;
