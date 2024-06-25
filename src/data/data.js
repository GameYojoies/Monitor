export const loadData = [
    {
        "id": 1,
        "name": "Load Percentage",
        "value": null,
        "unit": "%",
        "des": "The rate of power consumption by the load, often expressed as a percentage of the total capacity."
    },
    {
        "id": 2,
        "name": "Load Half Ratio",
        "value": null,
        "unit": "%",
        "des": "The ratio of the load currently in use to the total load capacity is typically expressed as a percentage."
    },
    {
        "id": 3,
        "name": "Load Apparent Power",
        "value": null,
        "unit": "VA",
        "des": "The total power consumed by the load, considering both active and reactive components."
    },
    {
        "id": 4,
        "name": "Load Active Power",
        "value": null,
        "unit": "V",
        "des": "Active power consumed by the connected loads, usually measured in watts (W) or kilowatts (kW)."
    },
    {
        "id": 5,
        "name": "Output Voltage",
        "value": null,
        "unit": "V",
        "des": "Output voltage, typically measured in volts (V)."
    },
    {
        "id": 6,
        "name": "Output Frequency",
        "value": null,
        "unit": "Hz",
        "des": "Output frequency, often measured in hertz (Hz)."
    },
    {
        "id": 7,
        "name": "Output Current",
        "value": null,
        "unit": "A",
        "des": "The electric current supplied by the system or component."
    },
    {
        "id": 8,
        "name": "Output Active Power",
        "value": null,
        "unit": "W",
        "des": "The real power output of the system is typically measured in watts (W)."
    },
    {
        "id": 9,
        "name": "Output Apparent Power",
        "value": null,
        "unit": "Ah",
        "des": "The product of the voltage and current in an AC circuit, typically measured in volt-amperes (VA)."
    },
    {
        "id": 10,
        "name": "The Total Power Output on the Day",
        "value": null,
        "unit": "kWh",
        "des": "The cumulative electrical energy outputted by the system throughout the day."
    }
];


export const inverterData = [

    {
        "id": 11,
        "name": "Inverter Voltage",
        "value": null,
        "unit": "V",
        "des": "The Voltage is supplied by the inverter, which converts DC power to AC power."
    },
    {
        "id": 12,
        "name": "Inverter Frequency",
        "value": null,
        "unit": "Hz",
        "des": "Inverter current, representing the electric current output from the inverter."
    },
    {
        "id": 13,
        "name": "Inverter Current",
        "value": null,
        "unit": "A",
        "des": "The electrical current flows through the inverter, which is a device that converts direct current (DC) from solar panels into alternating current (AC) that can be used to power electrical devices in a solar power system."
    }
]

export const batteryData = [
    {
        "id": 14,
        "name": "Battery Voltage",
        "value": null,
        "unit": "V",
        "des": "Short for Battery Voltage: the voltage level of the connected battery in the system."
    },
    {
        "id": 15,
        "name": "Battery Discharge Current",
        "value": null,
        "unit": "A",
        "des": "Amount of energy discharged from the battery during the current day."
    },
    {
        "id": 16,
        "name": "Charging Voltage",
        "value": null,
        "unit": "V",
        "des": "The voltage is applied to charge batteries or other energy storage systems."
    },
    {
        "id": 17,
        "name": "id of Battery Cells",
        "value": null,
        "unit": "",
        "des": "The quantity of individual battery units connected in series or parallel."
    },
    {
        "id": 18,
        "name": "Charging Current",
        "value": null,
        "unit": "A",
        "des": "The electric current used to charge the battery, typically measured in amperes (A) or kiloamperes (kA)."
    },
    {
        "id": 19,
        "name": "Charging Power",
        "value": null,
        "unit": "W",
        "des": "The power used to charge the battery, typically measured in watts (W) or kilowatts (kW)."
    },
    {
        "id": 20,
        "name": "Battery Capacity (Battery SOC)",
        "value": null,
        "unit": "%",
        "des": "Capacity of the battery, often expressed as State of Charge (SOC)."
    },
    {
        "id": 21,
        "name": "Battery Capacity Query",
        "value": null,
        "unit": "Ah",
        "des": "Short for Battery State of Charge: the remaining capacity of the battery as a percentage of its total capacity"
    },
    {
        "id": 22,
        "name": "Battery Current",
        "value": null,
        "unit": "A",
        "des": "The flow of electric charge within the battery is typically measured in amperes (A)."
    }
]

export const photovolData = [
    {
      "id": 23,
      "name": "Photovoltaic Voltage",
      "value": null,
      "unit": "V",
      "des": "Short for Photovoltaic Input Voltage, it represents the voltage level of the solar panels or photovoltaic system input."
    },
    {
      "id": 24,
      "name": "Photovoltaic Charging Current",
      "value": null,
      "unit": "A",
      "des": "Current generated by the photovoltaic (PV) system, usually measured in amperes (A)."
    },
    {
      "id": 25,
      "name": "Photovoltaic Current",
      "value": null,
      "unit": "A",
      "des": "The flow of electric current generated by a photovoltaic (PV) solar panel when exposed to sunlight. It is the direct current (DC) produced by the solar cells in the PV panel as a result of the photovoltaic effect."
    },
    {
      "id": 26,
      "name": "Total Photovoltaic Power",
      "value": null,
      "unit": "W",
      "des": "The total power generated by the photovoltaic system, typically measured in watts (W) or kilowatts (kW)."
    },
    {
      "id": 27,
      "name": "Total Photovoltaic Power Generation on That Day",
      "value": null,
      "unit": "kWh",
      "des": "The total amount of energy generated by the solar panels in a solar power system during a specific period of the day."
    },
    {
      "id": 28,
      "name": "Total Photovoltaic Power Generations",
      "value": null,
      "unit": null,
      "des": "Represents the cumulative energy production of the photovoltaic panels."
    },
    {
      "id": 29,
      "name": "Total Photovoltaic Power Generation",
      "value": null,
      "unit": "kWh",
      "des": "The total amount of electrical energy produced by photovoltaic (PV) solar panels over a specific period."
    }
  ]

export const gridData= [
    {
      "id": 30,
      "name": "Grid Input Voltage",
      "value": null,
      "unit": "V",
      "des": "The Voltage is supplied to the system from the electrical grid."
    },
    {
      "id": 31,
      "name": "Grid Frequency",
      "value": null,
      "unit": "Hz",
      "des": "Short for Grid Frequency, it indicates the frequency of the electrical grid to which the system is connected"
    },
    {
      "id": 32,
      "name": "Total Amount of Power Generated by the Grid on That Day",
      "value": null,
      "unit": "kWh",
      "des": "The sum of all electrical energy generated by the grid throughout the day."
    },
    {
      "id": 33,
      "name": "Total Grid Power Generation",
      "value": null,
      "unit": "kWh",
      "des": "The overall electrical energy produced by the grid."
    },
    {
      "id": 34,
      "name": "Grid Voltage",
      "value": null,
      "unit": "V",
      "des": "AC Input Voltage: the current flowing between the system and the electrical grid"
    },
    {
      "id": 35,
      "name": "Grid Frequency",
      "value": null,
      "unit": "Hz",
      "des": "Short for Grid Frequency, it indicates the frequency of the electrical grid to which the system is connected"
    },
    {
      "id": 36,
      "name": "Grid Current Output",
      "value": null,
      "unit": "V",
      "des": "Indicates the amount of current being supplied by the grid to the system."
    },
    {
      "id": 37,
      "name": "Output Frequency",
      "value": null,
      "unit": "HZ",
      "des": "The frequency of alternating current (AC) electricity produced by a power generation system or electrical device. It is measured in Hertz (Hz) and indicates the id of complete cycles per second."
    }
  ]
