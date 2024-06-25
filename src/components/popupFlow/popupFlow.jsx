import React from "react";
import { useTranslation } from "react-i18next";

const PopupFlow = ({ count, data }) => {
  const {t} = useTranslation()

  const dataByCount = {
    Load: [
      { label: "Load percentage", key: "loadPercentage", unit: "%" },
      { label: "Load apparent power", key: "loadApparentPower", unit: "VA" },
      { label: "Load active power", key: "loadActivePower", unit: "V" },
      { label: "Output voltage", key: "opVol", unit: "V" },
      { label: "Output frequency", key: "opFrequency", unit: "Hz" },
      { label: "Output current", key: "opCurrent", unit: "A" },
      { label: "Output active power", key: "opActivePower", unit: "W" },
      { label: "Output apparent power", key: "opApparentPower", unit: "kWh" },
      { label: "Total power output on the day", key: "tpOutputDay", unit: "kWh" },
    ],
    Inverter: [
      { label: "Inverter voltage", key: "inverterVol", unit: "V" },
      { label: "Inverter frequency", key: "inverterFrequency", unit: "Hz" },
      { label: "Inverter current", key: "inverterCurrent", unit: "A" },
    ],
    PV: [
      { label: "Photovoltaic voltage", key: "pvVol", unit: "V" },
      { label: "Photovoltaic charging current", key: "pvChargingCurrent", unit: "A" },
      { label: "Photovoltaic current", key: "pvCurrent", unit: "A" },
      { label: "Total photovoltaic power", key: "tppPower", unit: "W" },
      { label: "Total photovoltaic power generation on that day", key: "tppGenerationDay", unit: "kWh" },
      { label: "Total photovoltaic power generations", key: "tppGenerations", unit: "" },
      { label: "Total photovoltaic power generation", key: "tppGeneration", unit: "kWh" },
    ],
    Battery: [
      { label: "Battery Voltage", key: "batVol", unit: "V" },
      { label: "Battery Discharge Current", key: "batDischargeCurrent", unit: "A" },
      { label: "Charging Voltage", key: "chargingVol", unit: "V" },
      { label: "Number of Battery Cells", key: "numberOfBatteryCells", unit: "" },
      { label: "Charging Current", key: "chargingCurrent", unit: "A" },
      { label: "Charging Power", key: "TotalPower", unit: "W" },
      { label: "Battery Capacity (Battery SOC)", key: "batCapacity", unit: "%" },
      { label: "Battery Capacity Query", key: "batCapacityQuery", unit: "" },
      { label: "Battery Current", key: "batCurrent", unit: "A" },
    ],
    Grid: [
      { label: "Grid Input voltage", key: "gridInputVol", unit: "V" },
      { label: "Grid  Frequency", key: "gridFrequency", unit: "Hz" },
      { label: "Total power generated by the Grid on that day", key: "tgpGenerationDay", unit: "kWh" },
      { label: "Total Grid power generation", key: "tgpGeneration", unit: "kWh" },
      { label: "Grid voltage", key: "gridOutputVol", unit: "V" },
      { label: "Grid frequency", key: "gridOutputFrequency", unit: "Hz" },
      { label: "Grid current output", key: "gridCurrentOutput", unit: "A" },
      { label: "Output frequency", key: "outputFrequency", unit: "Hz" },
    ],
  };
  
  const selectedData = dataByCount[count] || [];

  return (
    <>
   <div>
    <div className="h-4"></div>
    <div className="h-[100%] flex flex-col gap-3">
      {selectedData.map(({ label, key, unit }) => (
        <React.Fragment key={label}>
          <div className="w-[90%] m-auto flex items-center justify-between">
            <span className="ml-5">{t(label) }</span>
            <div className="mr-5 w-12 relative flex items-center">
              <span className="text-base text-right absolute right-[3rem]">
                {data?.[key] || 0}
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
    <div className="h-4"></div>
  </div>
    </>
  );
};

export default PopupFlow;
