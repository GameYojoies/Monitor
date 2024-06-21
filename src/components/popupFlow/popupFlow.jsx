import React from "react";
const PopupFlow = ({ count }) => {
  console.log(count);
  return (
    <>
      <div>
        <div className="h-4"></div>
        {count === 'Load' ? (
          <div className="h-[100%] flex flex-col gap-3">
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 text-2xl	">Load percentage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">%</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>
            {/* Load apparent power */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Load apparent power</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">VA</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            {/* Load active power */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Load active power</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">V</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            {/* Output voltage */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Output voltage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">V</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            {/* Output frequency */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Output frequency</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">Hz</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            {/* Output current */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Output current</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">A</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            {/* Output active power */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Output active power</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">W</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            {/* Output apparent power */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">Output apparent power</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">kWh</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            {/* Total power output on the day */}
            <div className="w-[90%] m-auto flex items-center justify-between">
              <span className="ml-5">The total power output on the day</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">kWh</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

          </div>
        )  : count === 'Inverter' ? (
            <div className="h-[100%] flex flex-col gap-3">
             <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Inverter voltage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">v</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Inverter frequency</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">%</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Inverter current</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">A</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            </div>
        ) : count === 'PV' ? (
            <div className="h-[100%] flex flex-col gap-3">
             <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Photovoltaic voltage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">v</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Photovoltaic charging current</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">A</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Photovoltaic current</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">A</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Total photovoltaic power</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">W</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Total photovoltaic power generation on that day</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">kWh</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Total photovoltaic power generations</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]"></span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5">Total photovoltaic power generation</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6]">kWh</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            </div>
        ):  count === 'Battery' ? (
            <div className="h-[100%] flex flex-col gap-3">
               <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Battery Voltage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">v</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Battery Discharge Current</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">A</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Charging Voltage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">v</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Number of Battery Cells</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] "></span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Charging Current</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">A</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Charging Power</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">W</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Battery Capacity (Battery SOC)</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">%</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Battery Capacity Query</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] "></span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Battery Current</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">A</span>
              </div>
            </div>
            <hr className="w-[90%] m-auto" ></hr>

            </div>

        ) : ( 
        <div className="h-[100%] flex flex-col gap-3">
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Grid Input voltage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">v</span>
              </div>
            </div>  
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Grid frequency</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">Hz</span>
              </div>
            </div> 
            <hr className="w-[90%] m-auto" ></hr>
 
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">The total amount of power generated by the Grid on that day</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">kWh</span>
              </div>
            </div>  
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Total Grid power generation</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">kWh</span>
              </div>
            </div> 
            <hr className="w-[90%] m-auto" ></hr>
 
            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Grid voltage</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">v</span>
              </div>
            </div>  
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Grid frequency</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">Hz</span>
              </div>
            </div>  
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Grid current output</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">v</span>
              </div>
            </div>  
            <hr className="w-[90%] m-auto" ></hr>

            <div className="w-[90%] m-auto h-6 flex items-center justify-between">
              <span className="ml-5 ">Output frequency</span>
              <div className="mr-5 w-8">
                <span className="text-base mr-5">0</span>
                <span className="text-base text-[#A6A6A6] ">Hz</span>
              </div>
            </div>  
            <hr className="w-[90%] m-auto" ></hr>

        </div>
    
    )}
        <div className="h-4"></div>
      </div>
    </>
  );
};

export default PopupFlow;
