import React from "react";
const PopupFlow = ({ count }) => {
  console.log(count);
  return (
    <>
      <div>
        <div className="h-4"></div>
        {count === 'Load' ? (
          <>
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Load percentage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">%</span>
              </div>
            </div>
            {/* Load apparent power */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Load apparent power</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">VA</span>
              </div>
            </div>
            {/* Load active power */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Load active power</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">V</span>
              </div>
            </div>
            {/* Output voltage */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Output voltage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">V</span>
              </div>
            </div>
            {/* Output frequency */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Output frequency</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">Hz</span>
              </div>
            </div>
            {/* Output current */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Output current</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">A</span>
              </div>
            </div>
            {/* Output active power */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Output active power</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">W</span>
              </div>
            </div>
            {/* Output apparent power */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Output apparent power</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">kWh</span>
              </div>
            </div>
            {/* Total power output on the day */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">The total power output on the day</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">kWh</span>
              </div>
            </div>
          </>
        )  : count === 'Inverter' ? (
            <>
             <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Inverter voltage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">v</span>
              </div>
            </div>
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Inverter frequency</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">%</span>
              </div>
            </div>
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Inverter current</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">A</span>
              </div>
            </div>
            </>
        ) : count === 'PV' ? (
            <>
             <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Photovoltaic voltage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">v</span>
              </div>
            </div>
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Photovoltaic charging current</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">A</span>
              </div>
            </div>
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Photovoltaic current</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">A</span>
              </div>
            </div>
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Total photovoltaic power</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">W</span>
              </div>
            </div>
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Total photovoltaic power generation on that day</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">kWh</span>
              </div>
            </div>
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Total photovoltaic power generations</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]"></span>
              </div>
            </div>
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Total photovoltaic power generation</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">kWh</span>
              </div>
            </div>
            </>
        ):  count === 'Battery ' ? (
            <>
            </>

        ) : ( 
        <>
            
        </>)}
        <div className="h-4"></div>
      </div>
    </>
  );
};

export default PopupFlow;
