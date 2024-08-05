/** @format */

import axios from "axios"
import {iconsSys, iconsSys1, iconsSys2, iconsSys3} from "../images"
import {useEffect, useState} from "react"
import {toast} from "react-toastify"
import {getAccessToken} from "../utils/local-storage"
import useAuth from "../hook/useAuth"
import {useTranslation} from "react-i18next"

import {LocalizationProvider} from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {DatePicker} from "@mui/x-date-pickers/DatePicker"
import {TextField} from "@mui/material"
import dayjs from "dayjs"
import "dayjs/locale/th"

const SolarDetail = () => {
  const [allDay, setAllDay] = useState("")
  const {pin, setDataStore, dataStore, selecteLanguage} = useAuth()
  const [currentDay, setCurrentDay] = useState(dayjs())
  const [selectdate, setSelectdate] = useState(dayjs().format("YYYY-MM-DD"))
  const getPin = pin ? pin.devicePn : "402A8FD7707C"
  const {t} = useTranslation()

  const getDataAPI = async () => {
    if (!allDay) return
    try {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_TEST}${allDay}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getAccessToken(),
        },
      })

      const getData = response.data

      if (getData.code === 0) {
        const allData =
          response.data.result && response.data.result[0]
            ? response.data.result[0]
            : 0
        setDataStore(allData)
      } else {
        toast.error(getData.code)
      }
    } catch (err) {
      toast.error(err.response?.data.message)
    }
  }

  useEffect(() => {
    setAllDay(`/reportData/detail?devicePn=${getPin}&date=${selectdate}`)
  }, [pin, pin])

  useEffect(() => {
    getDataAPI()
  }, [allDay])

  const handleSelectDay = (e) => {
    const date = `${e.$y}-${(e.$M + 1).toString().padStart(2, "0")}-${e.$D
      .toString()
      .padStart(2, "0")}`
    setSelectdate(date)
    setAllDay(`/reportData/detail?devicePn=${getPin}&date=${date}`)
  }

  const loadData = [
    {
      id: 1,
      name: t("Load percentage"),
      value: dataStore.loadPercentage || 0,
      unit: "%",
      des: t("load_percentage_des"),
    },
    {
      id: 2,
      name: t("Load Half Ratio"),
      value: dataStore.loadHalf || 0,
      unit: "",
      des: t("load_half_ratio_des"),
    },
    {
      id: 3,
      name: t("Load apparent power"),
      value: dataStore.loadApparentPower || 0,
      unit: "VA",
      des: t("load_apparent_power_des"),
    },
    {
      id: 4,
      name: t("Load active power"),
      value: dataStore.loadActivePower || 0,
      unit: "V",
      des: t("load_active_power_des"),
    },
    {
      id: 5,
      name: t("Output voltage"),
      value: dataStore.opVol || 0,
      unit: "V",
      des: t("output_voltage_des"),
    },
    {
      id: 6,
      name: t("Output frequency"),
      value: dataStore.opFrequency || 0,
      unit: "Hz",
      des: t("output_frequency_des"),
    },
    {
      id: 7,
      name: t("Output current"),
      value: dataStore.opCurrent || 0,
      unit: "A",
      des: t("output_current_des"),
    },
    {
      id: 8,
      name: t("Output active power"),
      value: dataStore.opActivePower || 0,
      unit: "W",
      des: t("output_active_power_des"),
    },
    {
      id: 9,
      name: t("Output apparent power"),
      value: dataStore.opApparentPower || 0,
      unit: "VA",
      des: t("output_apparent_power_des"),
    },
    {
      id: 10,
      name: t("Total power output on the day"),
      value: dataStore.tpOutputDay || 0,
      unit: "kWh",
      des: t("total_power_output_day_des"),
    },
  ]

  const inverterData = [
    {
      id: 11,
      name: t("Inverter voltage"),
      value: dataStore.inverterVol || 0,
      unit: "V",
      des: t("inverter_voltage_des"),
    },
    {
      id: 12,
      name: t("Inverter frequency"),
      value: dataStore.inverterFrequency || 0,
      unit: "Hz",
      des: t("inverter_frequency_des"),
    },
    {
      id: 13,
      name: t("Inverter current"),
      value: dataStore.inverterCurrent || 0,
      unit: "A",
      des: t("inverter_current_des"),
    },
  ]

  const batteryData = [
    {
      id: 14,
      name: t("Battery Voltage"),
      value: dataStore.batVol || 0,
      unit: "V",
      des: t("battery_voltage_des"),
    },
    {
      id: 15,
      name: t("Battery Discharge Current"),
      value: dataStore.batDischargeCurrent || 0,
      unit: "A",
      des: t("battery_discharge_current_des"),
    },
    {
      id: 16,
      name: t("Charging Voltage"),
      value: dataStore.chargingVol || 0,
      unit: "V",
      des: t("charging_voltage_des"),
    },
    {
      id: 17,
      name: t("Number of Battery Cells"),
      value: dataStore.numberOfBatteryCells
        ? dataStore.numberOfBatteryCells
        : 0,
      unit: "",
      des: t("battery_cells_id_des"),
    },
    {
      id: 18,
      name: t("Charging Current"),
      value: dataStore.chargingCurrent || 0,
      unit: "A",
      des: t("charging_current_des"),
    },
    {
      id: 19,
      name: t("Charging Power"),
      value: dataStore.TotalPower || 0,
      unit: "W",
      des: t("charging_power_des"),
    },
    {
      id: 20,
      name: t("Battery Capacity (Battery SOC)"),
      value: dataStore.batCapacity || 0,
      unit: "%",
      des: t("battery_capacity_soc_des"),
    },
    {
      id: 21,
      name: t("Battery Capacity Query"),
      value: dataStore.batCapacityQuery || 0,
      unit: "Ah",
      des: t("battery_capacity_query_des"),
    },
    {
      id: 22,
      name: t("Battery Current"),
      value: dataStore.batCurrent || 0,
      unit: "A",
      des: t("battery_current_des"),
    },
  ]

  const photovolData = [
    {
      id: 23,
      name: t("Photovoltaic voltage"),
      value: dataStore.pvVol || 0,
      unit: "V",
      des: t("pv_voltage_des"),
    },
    {
      id: 24,
      name: t("Photovoltaic charging current"),
      value: dataStore.pvChargingCurrent || 0,
      unit: "A",
      des: t("pv_charging_current_des"),
    },
    {
      id: 25,
      name: t("Photovoltaic current"),
      value: dataStore.pvCurrent || 0,
      unit: "A",
      des: t("pv_current_des"),
    },
    {
      id: 26,
      name: t("Total photovoltaic power"),
      value: dataStore.tppPower || 0,
      unit: "W",
      des: t("total_pv_power_des"),
    },
    {
      id: 27,
      name: t("Total photovoltaic power generation on that day"),
      value: dataStore.tppGenerationDay || 0,
      unit: "kWh",
      des: t("total_pv_power_generation_day_des"),
    },
    {
      id: 28,
      name: t("Total photovoltaic power generations"),
      value: dataStore.tppGenerations || 0,
      unit: null,
      des: t("total_pv_power_generations_des"),
    },
    {
      id: 29,
      name: t("Total photovoltaic power generation"),
      value: dataStore.tppGeneration || 0,
      unit: "kWh",
      des: t("total_pv_power_generation_des"),
    },
  ]

  const gridData = [
    {
      id: 30,
      name: t("Grid Input voltage"),
      value: dataStore.gridInputVol || 0,
      unit: "V",
      des: t("grid_input_voltage_des"),
    },
    {
      id: 31,
      name: t("Grid  Frequency"),
      value: dataStore.gridFrequency || 0,
      unit: "Hz",
      des: t("grid_frequency_des"),
    },
    {
      id: 32,
      name: t("Total power generated by the Grid on that day"),
      value: (dataStore.tgpGenerationDay || 0) / 100,
      unit: "kWh",
      des: t("total_grid_power_generation_day_des"),
    },
    {
      id: 33,
      name: t("Total Grid power generation"),
      value: dataStore.tgpGeneration || 0,
      unit: "kWh",
      des: t("total_grid_power_generation_des"),
    },
    {
      id: 34,
      name: t("Grid voltage"),
      value: (dataStore.gridOutputVol || 0) / 100,
      unit: "V",
      des: t("grid_voltage_des"),
    },
    {
      id: 35,
      name: t("Grid frequency"),
      value: dataStore.gridOutputFrequency || 0,
      unit: "Hz",
      des: t("grid_output_frequency_des"),
    },
    {
      id: 36,
      name: t("Grid current output"),
      value: dataStore.gridCurrentOutput || 0,
      unit: "V",
      des: t("grid_current_output_des"),
    },
    {
      id: 37,
      name: t("Output frequency"),
      value: dataStore.outputFrequency || 0,
      unit: "HZ",
      des: t("output_frequency_des2"),
    },
  ]

  return (
    <div>
      <div className="flex items-center gap-2">
        <img
          src={iconsSys}
          alt=""
          className="h-[40px]"
        />
        <h1 className="text-[#001647] font-semibold text-2xl">
          {t("ChartPSpan4")}
        </h1>
      </div>

      <div className="w-[100%] py-4 bg-white flex flex-col items-center mt-10 shadow-[2px_2px_15px_0px_#00000026] rounded-xl">
        <div className="w-[95%] flex gap-4 mt-2 items-center justify-end">
          <span className="pt-2">{t("SystemDetailsSpan5")}</span>
          <div className="w-[200px] h-[45px]">
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale={selecteLanguage == "EN" ? "en" : "th"}>
              <DatePicker
                label={t("ChartSpan11")}
                value={currentDay}
                shouldDisableDate={(date) => date.isAfter(currentDay)}
                onChange={(newValue) => handleSelectDay(newValue)}
                renderInput={(params) => <TextField {...params} />}
                format="ll"
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className="w-[95%] h-[55px] mt-6 bg-[#133261] flex pl-[20px] rounded-tl-lg rounded-tr-lg">
          <div className="text-white flex items-center gap-2 w-[30%]">
            <img
              src={iconsSys1}
              alt=""
              className="h-[25px]"
            />
            <span className="font-semibold">{t("SystemDetailsSpan1")}</span>
          </div>
          <div className="text-white flex items-center gap-2 w-[30%]">
            <img
              src={iconsSys2}
              alt=""
              className="h-[25px]"
            />
            <span className="font-semibold">{t("SystemDetailsSpan2")}</span>
          </div>
          <div className="text-white flex items-center gap-2 w-[35%]">
            <img
              src={iconsSys3}
              alt=""
              className="h-[20px]"
            />
            <span className="font-semibold">{t("SystemDetailsSpan3")}</span>
          </div>
        </div>
        <div className="w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold">
          {t("DeviceSpan4")}
        </div>
        {loadData.map((data) => (
          <div className="py-2 w-[95%] h-auto flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2">
            <div className="w-[35%]">
              <span>{data.id}.</span>
              <span className="pl-4">{data.name}</span>
            </div>

            <div className="w-[65%] flex items-center">
              <div className="w-[25%]">
                <span>{data.value}</span>
                <span className="pl-1">{data.unit}</span>
              </div>
              <div className="w-[75%]">
                <span>{data.des}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold">
          {t("DeviceSpan5")}
        </div>
        {inverterData.map((data) => (
          <div className="py-2 w-[95%] h-auto flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2">
            <div className="w-[35%]">
              <span>{data.id}.</span>
              <span className="pl-4">{data.name}</span>
            </div>

            <div className="w-[65%] flex items-center">
              <div className="w-[25%]">
                <span>{data.value}</span>
                <span className="pl-1">{data.unit}</span>
              </div>
              <div className="w-[75%]">
                <span>{data.des}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold">
          {t("DeviceSpan7")}
        </div>
        {batteryData.map((data) => (
          <div className="py-2 w-[95%] h-auto flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2">
            <div className="w-[35%]">
              <span>{data.id}.</span>
              <span className="pl-4">{data.name}</span>
            </div>

            <div className="w-[65%] flex items-center">
              <div className="w-[25%]">
                <span>{data.value}</span>
                <span className="pl-1">{data.unit}</span>
              </div>
              <div className="w-[75%]">
                <span>{data.des}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold">
          {t("SystemDetailsSpan4")}
        </div>
        {photovolData.map((data) => (
          <div className="py-2 w-[95%] h-auto flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2">
            <div className="w-[35%]">
              <span>{data.id}.</span>
              <span className="pl-4">{data.name}</span>
            </div>

            <div className="w-[65%] flex items-center">
              <div className="w-[25%]">
                <span>{data.value}</span>
                <span className="pl-1">{data.unit}</span>
              </div>
              <div className="w-[75%]">
                <span>{data.des}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold">
          {t("DeviceSpan8")}
        </div>
        {gridData.map((data) => (
          <div className="py-2 w-[95%] h-auto flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2">
            <div className="w-[35%]">
              <span>{data.id}.</span>
              <span className="pl-4">{data.name}</span>
            </div>

            <div className="w-[65%] flex items-center">
              <div className="w-[25%]">
                <span>{data.value}</span>
                <span className="pl-1">{data.unit}</span>
              </div>
              <div className="w-[75%]">
                <span>{data.des}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="h-[30px]"></div>
      </div>

      <div className="h-[20px]"></div>
    </div>
  )
}

export default SolarDetail
