import React from 'react';

const SystemAlert = ({ codes }) => {
  const statusCodesNotification = {
    4500: "Error Starting Work",
    4501: "High Voltage Input",
    4502: "Low Voltage Input",
    4503: "Issue in the DC Circuit",
    4504: "High Temperature",
    4505: "High Battery Voltage",
    4506: "Increasing the Input Voltage Failed",
    4507: "Problems in the Input Terminal",
    4508: "Fluid Related Issues at the Start of the Inverter",
    4509: "High Voltage in the Inverter",
    4510: "Low Voltage in the Inverter",
    4511: "Issue in the Inverter Circuit",
    4512: "Protection Against Negative Influences on the Inverter",
    4513: "Issue in Exceeding Power Capacity",
    4514: "Problem in Writing Machine Model Code",
    4515: "Lack of Boot Programs",
    4516: "Problem in Writing Machine Programs",
    4517: "Excessive Current in the Neutral Line",
    4518: "Identical Product Codes",
    4519: "CAN Communication Issues",
    4520: "Significant Differences in Battery Voltage",
    4521: "Significant Differences in Power Supply Voltage",
    4522: "Significant Differences in Frequency from the Power Supply",
    4523: "Incorrect Settings Affecting Collaborative Operation Results",
    4524: "Loss of Improvement Adjustments",
    4525: "Issues in BMS Battery",
    4600: "Chip is Broken",
    4601: "The Fan is Broken",
    4602: "High Temperature (Excessive)",
    4603: "High Charging Voltage",
    4604: "Failure to Start the Battery in Cold Conditions",
    4605: "Low State of Charge (SOC)",
    4606: "Battery Low Turning Off",
    4607: "Full Charge Cycle",
    4608: "Battery Not Connected",
    4609: "Low Battery",
    4610: "Over Load",
    4700: "Battery Voltage Drop",
    4701: "Storage Error",
    4702: "Low Energy Discharging",
    4703: "The Fan is Not Working",
    4704: "The Temperature is Too High",
    4705: "Charging Over Current",
    4706: "Lost Communication with BMS",
    4707: "Phase Sequence Error",
    4708: "Battery Open Circuit",
    4709: "Low Battery Voltage",
    4710: "Parallel Setup Error",
    4711: "Parallel Synchronization Error",
    4712: "Parallel Communication Failure",
    4713: "Parallel Models are Not Compatible",
    4714: "Main Power Phase in Parallel is Wrong",
    4715: "Insufficient PV Power",
    4716: "Overload",
    4717: "Main Frequency is Absent",
    4718: "Mains Voltage has Disappeared",
  };

  const textCodes = codes.map((code) => (
    <div key={code}>{statusCodesNotification[code] || "Unknown Status"}</div>
  ));

  return (
    <div>
      {textCodes}
    </div>
  );
};

export default SystemAlert;
