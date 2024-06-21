import React from "react";

const MyDevice = () => {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between">
        {/* Box 1 */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">MyDevice</h1>
          <div className="bg-cyan-500 p-4 rounded-[30px] shadow-md flex items-center text-white relative">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col w-[200px] relative">
                <label className="font-semibold ">Device Name</label>
                <select
                  name="device"
                  id="device"
                  className="bg-transparent border-none text-white rounded-md focus:outline-none focus:border-transparent appearance-none"
                  style={{ backgroundImage: "none" }}
                >
                  <option className="text-black border-none" value="bieber">
                    Bieber
                  </option>
                  <option className="text-black" value="device2">
                    Device 2
                  </option>
                  <option className="text-black" value="device3">
                    Device 3
                  </option>
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </div>
              <div className="border-r-2 border-gray-300 h-12"></div>
              <div className="flex flex-col w-[170px]">
                <label className="font-semibold">Device's PN</label>
                <span className="">A1234567890888</span>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-md flex">
          <img
            src="https://via.placeholder.com/150"
            alt="Device"
            className="w-[20px] rounded-md mb-4"
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
