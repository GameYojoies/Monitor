import React from "react";
const PopupFlow = ({ count, data }) => {
  console.log(data,"data");
  return (
    <>
      <div>
        <div className="h-4"></div>
        {count === "Load" ? (
          <div className="h-[100%] flex flex-col gap-3">
            {[
              {
                label: "Load percentage",
                value: data?.loadPercentage || 0,
                unit: "%",
              },
              {
                label: "Load apparent power",
                value: data?.loadApparentPower || 0,
                unit: "VA",
              },
              {
                label: "Load active power",
                value: data?.loadActivePower || 0,
                unit: "V",
              },
              { label: "Output voltage", value: data?.opVol || 0, unit: "V" },
              {
                label: "Output frequency",
                value: data?.opFrequency || 0,
                unit: "Hz",
              },
              {
                label: "Output current",
                value: data?.opCurrent || 0,
                unit: "A",
              },
              {
                label: "Output active power",
                value: data?.opActivePower || 0,
                unit: "W",
              },
              {
                label: "Output apparent power",
                value: data?.opApparentPower || 0,
                unit: "kWh",
              },
              {
                label: "The total power output on the day",
                value: data?.tpOutputDay || 0,
                unit: "kWh",
              },
            ].map(({ label, value, unit }) => (
              <React.Fragment key={label}>
                <div className="w-[90%] m-auto flex items-center justify-between">
                  <span className="ml-5">{label}</span>
                  <div className="mr-5 w-12 relative flex items-center">
                    <span className="text-base text-right absolute right-[3rem] ">
                      {value}
                    </span>
                    <span className="text-base text-[#A6A6A6] ml-1 absolute right-0">
                      {unit}
                    </span>
                  </div>
                </div>
                <hr className="w-[90%] m-auto" />
              </React.Fragment>
            ))}
          </div>
        ) : count === "Inverter" ? (
          <div className="h-[100%] flex flex-col gap-3">
            {[
              {
                label: "Inverter voltage",
                value: data?.inverterVol || 0,
                unit: "v",
              },
              {
                label: "Inverter frequency",
                value: data?.inverterFrequency || 0,
                unit: "%",
              },
              {
                label: "Inverter current",
                value: data?.inverterCurrent || 0,
                unit: "A",
              },
            ].map(({ label, value, unit }) => (
              <React.Fragment key={label}>
                <div className="w-[90%] m-auto flex items-center justify-between">
                  <span className="ml-5">{label}</span>
                  <div className="mr-5 w-12 relative flex items-center">
                    <span className="text-base text-right absolute right-[3rem] ">
                      {value}
                    </span>
                    <span className="text-base text-[#A6A6A6] ml-1 absolute right-0">
                      {unit}
                    </span>
                  </div>
                </div>
                <hr className="w-[90%] m-auto" />
              </React.Fragment>
            ))}
          </div>
        ) : count === "PV" ? (
          <div className="h-[100%] flex flex-col gap-3">
            {[
              {
                label: "Photovoltaic voltage",
                value: data?.pvVol || 0,
                unit: "V",
              },
              {
                label: "Photovoltaic charging current",
                value: data?.pvChargingCurrent || 0,
                unit: "A",
              },
              {
                label: "Photovoltaic current",
                value: data?.pvCurrent || 0,
                unit: "A",
              },
              {
                label: "Total photovoltaic power",
                value: data?.tppPower || 0,
                unit: "W",
              },
              {
                label: "Total photovoltaic power generation on that day",
                value: data?.tppGenerationDay || 0,
                unit: "kWh",
              },
              {
                label: "Total photovoltaic power generations",
                value: data?.tppGenerations || 0,
                unit: "",
              },
              {
                label: "Total photovoltaic power generation",
                value: data?.tppGeneration || 0,
                unit: "kWh",
              },
            ].map(({ label, value, unit }) => (
              <React.Fragment key={label}>
                <div className="w-[90%] m-auto flex items-center justify-between">
                  <span className="ml-5">{label}</span>
                  <div className="mr-5 w-12 relative flex items-center">
                    <span className="text-base text-right absolute right-[3rem] ">
                      {value}
                    </span>
                    <span className="text-base text-[#A6A6A6] ml-1 absolute right-0">
                      {unit}
                    </span>
                  </div>
                </div>
                <hr className="w-[90%] m-auto" />
              </React.Fragment>
            ))}
          </div>
        ) : count === "Battery" ? (
          <div className="h-[100%] flex flex-col gap-3">
            {[
              { label: "Battery Voltage", value: data?.batVol || 0, unit: "V" },
              {
                label: "Battery Discharge Current",
                value: data?.batDischargeCurrent || 0,
                unit: "A",
              },
              {
                label: "Charging Voltage",
                value: data?.chargingVol || 0,
                unit: "V",
              },
              {
                label: "Number of Battery Cells",
                value: data?.numberOfBatteryCells || 0,
                unit: "",
              },
              {
                label: "Charging Current",
                value: data?.chargingCurrent || 0,
                unit: "A",
              },
              {
                label: "Charging Power",
                value: data?.TotalPower || 0,
                unit: "W",
              },
              {
                label: "Battery Capacity (Battery SOC)",
                value: data?.batCapacity || 0,
                unit: "%",
              },
              {
                label: "Battery Capacity Query",
                value: data?.batCapacityQuery || 0,
                unit: "",
              },
              {
                label: "Battery Current",
                value: data?.batCurrent || 0,
                unit: "A",
              },
            ].map(({ label, value, unit }) => (
              <React.Fragment key={label}>
                <div className="w-[90%] m-auto flex items-center justify-between">
                  <span className="ml-5">{label}</span>
                  <div className="mr-5 w-12 relative flex items-center">
                    <span className="text-base text-right absolute right-[3rem] ">
                      {value}
                    </span>
                    <span className="text-base text-[#A6A6A6] ml-1 absolute right-0">
                      {unit}
                    </span>
                  </div>
                </div>
                <hr className="w-[90%] m-auto" />
              </React.Fragment>
            ))}
          </div>
        ) : count === "Grid" ? (
          <div className="h-[100%] flex flex-col gap-3">
            {[
              {
                label: "Grid Input voltage",
                value: data?.gridInputVol || 0,
                unit: "V",
              },
              {
                label: "Grid frequency",
                value: data?.gridFrequency || 0,
                unit: "Hz",
              },
              {
                label:
                  "The total amount of power generated by the Grid on that day",
                value: data?.tgpGenerationDay || 0,
                unit: "kWh",
              },
              {
                label: "Total Grid power generation",
                value: data?.tgpGeneration || 0,
                unit: "kWh",
              },
              {
                label: "Grid voltage",
                value: data?.gridOutputVol || 0,
                unit: "V",
              },
              {
                label: "Grid frequency",
                value: data?.gridOutputFrequency || 0,
                unit: "Hz",
              },
              {
                label: "Grid current output",
                value: data?.gridCurrentOutput || 0,
                unit: "A",
              },
              {
                label: "Output frequency",
                value: data?.outputFrequency || 0,
                unit: "Hz",
              },
            ].map(({ label, value, unit }, index) => (
              <React.Fragment key={index}>
                <div className="w-[90%] m-auto flex items-center justify-between">
                  <span className="ml-5">{label}</span>
                  <div className="mr-5 w-12 relative flex items-center">
                    <span className="text-base text-right absolute right-[3rem]">
                      {value}
                    </span>
                    <span className="text-base text-[#A6A6A6] ml-1 absolute right-0">
                      {unit}
                    </span>
                  </div>
                </div>
                <hr className="w-[90%] m-auto" />
              </React.Fragment>
            ))}
          </div>
        ) : null}
        <div className="h-4"></div>
      </div>
    </>
  );
};

export default PopupFlow;
