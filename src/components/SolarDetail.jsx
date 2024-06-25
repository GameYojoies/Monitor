import axios from 'axios';
import { iconsSys, iconsSys1, iconsSys2, iconsSys3 } from '../images';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAccessToken } from '../utils/local-storage';
import useAuth from '../hook/useAuth';
import { useTranslation } from 'react-i18next';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/th';


const SolarDetail = () => {

    const [allDay, setAllDay] = useState("")
    const { pin, setDataStore, dataStore, selecteLanguage } = useAuth();
    const [currentDay, setCurrentDay] = useState(dayjs());
    const [selectdate, setSelectdate] = useState(dayjs().format('YYYY-MM-DD'));
    const getPin = pin ? pin.devicePn : "402A8FD7707C"
    const { t } = useTranslation();

    const getDataAPI = async () => {
        if (!allDay) return;
        try {
            const response = await axios({
                method: 'get',
                url: `${import.meta.env.VITE_API_TEST}${allDay}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getAccessToken()
                }
            });

            const getData = response.data;

            if (getData.code === 0) {
                const allData = response.data.result[0]
                setDataStore(allData)


            } else {
                toast.error(getData.code);
            }
        } catch (err) {
            toast.error(err.response?.data.message);
        }
    }

    useEffect(() => {
        setAllDay(`/reportData/detail?devicePn=${getPin}&date=${selectdate}`)
    }, [pin, pin])

    useEffect(() => {
        getDataAPI()
    }, [allDay])

    const handleSelectDay = (e) => {
        const date = `${e.$y}-${(e.$M + 1).toString().padStart(2, '0')}-${e.$D.toString().padStart(2, '0')}`;
        setSelectdate(date)
        setAllDay(`/reportData/detail?devicePn=${getPin}&date=${date}`)
    };




    const loadData = [
        {
            "id": 1,
            "name": t("Load percentage"),
            "value": dataStore.loadPercentage,
            "unit": "%",
            "des": "The rate of power consumption by the load, often expressed as a percentage of the total capacity."
        },
        {
            "id": 2,
            "name": "Load Half Ratio",
            "value": dataStore.loadHalf,
            "unit": "%",
            "des": "The ratio of the load currently in use to the total load capacity is typically expressed as a percentage."
        },
        {
            "id": 3,
            "name": t("Load apparent power"),
            "value": dataStore.loadApparentPower,
            "unit": "VA",
            "des": "The total power consumed by the load, considering both active and reactive components."
        },
        {
            "id": 4,
            "name": t("Load active power"),
            "value": dataStore.loadActivePower,
            "unit": "V",
            "des": "Active power consumed by the connected loads, usually measured in watts (W) or kilowatts (kW)."
        },
        {
            "id": 5,
            "name": t("Output voltage"),
            "value": dataStore.opVol,
            "unit": "V",
            "des": "Output voltage, typically measured in volts (V)."
        },
        {
            "id": 6,
            "name": t("Output frequency"),
            "value": dataStore.opFrequency,
            "unit": "Hz",
            "des": "Output frequency, often measured in hertz (Hz)."
        },
        {
            "id": 7,
            "name": t("Output current"),
            "value": dataStore.opCurrent,
            "unit": "A",
            "des": "The electric current supplied by the system or component."
        },
        {
            "id": 8,
            "name": t("Output active power"),
            "value": dataStore.opActivePower,
            "unit": "W",
            "des": "The real power output of the system is typically measured in watts (W)."
        },
        {
            "id": 9,
            "name": t("Output apparent power"),
            "value": dataStore.opApparentPower,
            "unit": "Ah",
            "des": "The product of the voltage and current in an AC circuit, typically measured in volt-amperes (VA)."
        },
        {
            "id": 10,
            "name": t("Total power output on the day"),
            "value": dataStore.tpOutputDay,
            "unit": "kWh",
            "des": "The cumulative electrical energy outputted by the system throughout the day."
        }
    ];

    const inverterData = [

        {
            "id": 11,
            "name": t("Inverter voltage"),
            "value": dataStore.inverterVol,
            "unit": "V",
            "des": "The Voltage is supplied by the inverter, which converts DC power to AC power."
        },
        {
            "id": 12,
            "name": t("Inverter frequency"),
            "value": dataStore.inverterFrequency,
            "unit": "Hz",
            "des": "Inverter current, representing the electric current output from the inverter."
        },
        {
            "id": 13,
            "name": t("Inverter current"),
            "value": dataStore.inverterCurrent,
            "unit": "A",
            "des": "The electrical current flows through the inverter, which is a device that converts direct current (DC) from solar panels into alternating current (AC) that can be used to power electrical devices in a solar power system."
        }
    ]
    const batteryData = [
        {
            "id": 14,
            "name": t("Battery Voltage"),
            "value": dataStore.batVol,
            "unit": "V",
            "des": "Short for Battery Voltage: the voltage level of the connected battery in the system."
        },
        {
            "id": 15,
            "name": t("Battery Discharge Current"),
            "value": dataStore.batDischargeCurrent,
            "unit": "A",
            "des": "Amount of energy discharged from the battery during the current day."
        },
        {
            "id": 16,
            "name": t("Charging Voltage"),
            "value": dataStore.chargingVol,
            "unit": "V",
            "des": "The voltage is applied to charge batteries or other energy storage systems."
        },
        {
            "id": 17,
            "name": t("Number of Battery Cells"),
            "value": dataStore.numberOfBatteryCells ? dataStore.numberOfBatteryCells : 0,
            "unit": "",
            "des": "The quantity of individual battery units connected in series or parallel."
        },
        {
            "id": 18,
            "name": t("Charging Current"),
            "value": dataStore.chargingCurrent,
            "unit": "A",
            "des": "The electric current used to charge the battery, typically measured in amperes (A) or kiloamperes (kA)."
        },
        {
            "id": 19,
            "name": t("Charging Power"),
            "value": dataStore.TotalPower,
            "unit": "W",
            "des": "The power used to charge the battery, typically measured in watts (W) or kilowatts (kW)."
        },
        {
            "id": 20,
            "name": t("Battery Capacity (Battery SOC)"),
            "value": dataStore.batCapacity,
            "unit": "%",
            "des": "Capacity of the battery, often expressed as State of Charge (SOC)."
        },
        {
            "id": 21,
            "name": t("Battery Capacity Query"),
            "value": dataStore.batCapacityQuery,
            "unit": "Ah",
            "des": "Short for Battery State of Charge: the remaining capacity of the battery as a percentage of its total capacity"
        },
        {
            "id": 22,
            "name": t("Battery Current"),
            "value": dataStore.batCurrent,
            "unit": "A",
            "des": "The flow of electric charge within the battery is typically measured in amperes (A)."
        }
    ]

    const photovolData = [
        {
            "id": 23,
            "name": t("Photovoltaic voltage"),
            "value": dataStore.pvVol,
            "unit": "V",
            "des": "Short for Photovoltaic Input Voltage, it represents the voltage level of the solar panels or photovoltaic system input."
        },
        {
            "id": 24,
            "name": t("Photovoltaic charging current"),
            "value": dataStore.pvChargingCurrent,
            "unit": "A",
            "des": "Current generated by the photovoltaic (PV) system, usually measured in amperes (A)."
        },
        {
            "id": 25,
            "name": t("Photovoltaic current"),
            "value": dataStore.pvCurrent,
            "unit": "A",
            "des": "The flow of electric current generated by a photovoltaic (PV) solar panel when exposed to sunlight. It is the direct current (DC) produced by the solar cells in the PV panel as a result of the photovoltaic effect."
        },
        {
            "id": 26,
            "name": t("Total photovoltaic power"),
            "value": dataStore.tppPower,
            "unit": "W",
            "des": "The total power generated by the photovoltaic system, typically measured in watts (W) or kilowatts (kW)."
        },
        {
            "id": 27,
            "name": t("Total photovoltaic power generation on that day"),
            "value": dataStore.tppGenerationDay,
            "unit": "kWh",
            "des": "The total amount of energy generated by the solar panels in a solar power system during a specific period of the day."
        },
        {
            "id": 28,
            "name": t("Total photovoltaic power generations"),
            "value": dataStore.tppGenerations,
            "unit": null,
            "des": "Represents the cumulative energy production of the photovoltaic panels."
        },
        {
            "id": 29,
            "name": t("Total photovoltaic power generation"),
            "value": dataStore.tppGeneration,
            "unit": "kWh",
            "des": "The total amount of electrical energy produced by photovoltaic (PV) solar panels over a specific period."
        }
    ]
    const gridData = [
        {
            "id": 30,
            "name": t("Grid Input voltage"),
            "value": dataStore.gridInputVol,
            "unit": "V",
            "des": "The Voltage is supplied to the system from the electrical grid."
        },
        {
            "id": 31,
            "name": t("Grid  Frequency"),
            "value": dataStore.gridFrequency,
            "unit": "Hz",
            "des": "Short for Grid Frequency, it indicates the frequency of the electrical grid to which the system is connected"
        },
        {
            "id": 32,
            "name": t("Total power generated by the Grid on that day"),
            "value": dataStore.tgpGenerationDay,
            "unit": "kWh",
            "des": "The sum of all electrical energy generated by the grid throughout the day."
        },
        {
            "id": 33,
            "name": t("Total Grid power generation"),
            "value": dataStore.tgpGeneration,
            "unit": "kWh",
            "des": "The overall electrical energy produced by the grid."
        },
        {
            "id": 34,
            "name": t("Grid voltage"),
            "value": dataStore.gridOutputVol,
            "unit": "V",
            "des": "AC Input Voltage: the current flowing between the system and the electrical grid"
        },
        {
            "id": 35,
            "name": t("Grid frequency"),
            "value": dataStore.gridOutputFrequency,
            "unit": "Hz",
            "des": "Short for Grid Frequency, it indicates the frequency of the electrical grid to which the system is connected"
        },
        {
            "id": 36,
            "name": t("Grid current output"),
            "value": dataStore.gridCurrentOutput,
            "unit": "V",
            "des": "Indicates the amount of current being supplied by the grid to the system."
        },
        {
            "id": 37,
            "name": t("Output frequency"),
            "value": dataStore.outputFrequency,
            "unit": "HZ",
            "des": "The frequency of alternating current (AC) electricity produced by a power generation system or electrical device. It is measured in Hertz (Hz) and indicates the id of complete cycles per second."
        }
    ]



    return (

        <div >

            <div className='flex items-center gap-2'>
                <img src={iconsSys} alt="" className='h-[40px]' />
                <h1 className='text-[#001647] font-semibold text-2xl'>{t("ChartPSpan4")}</h1>
            </div>

            <div className='w-[100%] py-4 bg-white flex flex-col items-center mt-10 shadow-[2px_2px_15px_0px_#00000026] rounded-xl'>

                <div className='w-[95%] flex gap-4 mt-2 items-center justify-end'>
                    <span className='font-semibold'>{t("SystemDetailsSpan5")}</span>
                    <div className="w-[200px] h-[45px]">
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={selecteLanguage == "EN" ? "en" : "th"}>

                            <DatePicker
                                label={t("ChartSpan11")}
                                value={currentDay}
                                onChange={(newValue) => handleSelectDay(newValue)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>


                </div>

                <div className='w-[95%] h-[55px] mt-6 bg-[#133261] flex pl-[20px] rounded-tl-lg rounded-tr-lg'>
                    <div className='text-white flex items-center gap-2 w-[30%]'>
                        <img src={iconsSys1} alt="" className='h-[25px]' />
                        <span className='font-semibold'>System Components</span>
                    </div>
                    <div className='text-white flex items-center gap-2 w-[30%]'>
                        <img src={iconsSys2} alt="" className='h-[25px]' />
                        <span className='font-semibold'>System Metrics</span>
                    </div>
                    <div className='text-white flex items-center gap-2 w-[35%]'>
                        <img src={iconsSys3} alt="" className='h-[20px]' />
                        <span className='font-semibold'>Details</span>
                    </div>
                </div>
                <div className='w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold'>{t("DeviceSpan4")}</div>
                {loadData.map((data) =>

                    <div className='py-2 w-[95%] h-auto flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2'>
                        <div className='w-[35%]'>
                            <span>{data.id}.</span>
                            <span className='pl-4'>{data.name}</span>
                        </div>

                        <div className='w-[65%] flex items-center'>
                            <div className='w-[25%]'>
                                <span>{data.value}</span>
                                <span className='pl-1' >{data.unit}</span>
                            </div>
                            <div className='w-[75%]'>
                                <span >{data.des}</span>
                            </div>
                        </div>

                    </div>

                )}
                <div className='w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold'>{t("DeviceSpan5")}</div>
                {inverterData.map((data) =>

                    <div className='py-2 w-[95%] h-auto flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2'>
                        <div className='w-[35%]'>
                            <span>{data.id}.</span>
                            <span className='pl-4'>{data.name}</span>
                        </div>

                        <div className='w-[65%] flex items-center'>
                            <div className='w-[25%]'>
                                <span>{data.value}</span>
                                <span className='pl-1' >{data.unit}</span>
                            </div>
                            <div className='w-[75%]'>
                                <span >{data.des}</span>
                            </div>
                        </div>

                    </div>

                )}
                <div className='w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold'>{t("DeviceSpan7")}</div>
                {batteryData.map((data) =>

                    <div className='py-2 w-[95%] h-auto flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2'>
                        <div className='w-[35%]'>
                            <span>{data.id}.</span>
                            <span className='pl-4'>{data.name}</span>
                        </div>

                        <div className='w-[65%] flex items-center'>
                            <div className='w-[25%]'>
                                <span>{data.value}</span>
                                <span className='pl-1' >{data.unit}</span>
                            </div>
                            <div className='w-[75%]'>
                                <span >{data.des}</span>
                            </div>
                        </div>

                    </div>

                )}
                <div className='w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold'>{t("SystemDetailsSpan4")}</div>
                {photovolData.map((data) =>

                    <div className='py-2 w-[95%] h-auto flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2'>
                        <div className='w-[35%]'>
                            <span>{data.id}.</span>
                            <span className='pl-4'>{data.name}</span>
                        </div>

                        <div className='w-[65%] flex items-center'>
                            <div className='w-[25%]'>
                                <span>{data.value}</span>
                                <span className='pl-1' >{data.unit}</span>
                            </div>
                            <div className='w-[75%]'>
                                <span >{data.des}</span>
                            </div>
                        </div>

                    </div>

                )}
                <div className='w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold'>{t("DeviceSpan8")}</div>
                {gridData.map((data) =>

                    <div className='py-2 w-[95%] h-auto flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2'>
                        <div className='w-[35%]'>
                            <span>{data.id}.</span>
                            <span className='pl-4'>{data.name}</span>
                        </div>

                        <div className='w-[65%] flex items-center'>
                            <div className='w-[25%]'>
                                <span>{data.value}</span>
                                <span className='pl-1' >{data.unit}</span>
                            </div>
                            <div className='w-[75%]'>
                                <span >{data.des}</span>
                            </div>
                        </div>

                    </div>

                )}


                <div className='h-[30px]'></div>

            </div>

            <div className='h-[20px]'></div>


        </div>
    )
}

export default SolarDetail