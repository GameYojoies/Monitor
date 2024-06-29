/** @format */

import {useEffect, useRef, useState} from "react"
import useAuth from "../../hook/useAuth"
import {err, warning, reset, left, icondown} from "../../images"

export default function TabContent({
  content,
  datanotity,
  record,
  statusCounts,
}) {
  console.log("datanotity--", datanotity)
  const [detail, setDetail] = useState([])
  const [status, setStatus] = useState()
  const [maxRecord, setMaxRecord] = useState(null)
  const {countPage, setCountPage, setShowPage, showPage} = useAuth()
  const [open, setOpen] = useState(false)

  if (
    content === "1" &&
    statusCounts.Active +
      statusCounts.Inactive +
      statusCounts.Normal +
      statusCounts.Warning +
      statusCounts.Error !=
      0
  ) {
    setShowPage(true)
  } else if (content === "2" && statusCounts.Error != 0) {
    setShowPage(true)
  } else if (content === "3" && statusCounts.Warning != 0) {
    setShowPage(true)
  } else if (content === "4" && statusCounts.Normal != 0) {
    setShowPage(true)
  } else {
    setShowPage(false)
  }
  useEffect(() => {
    if (record !== undefined && record !== null) {
      setMaxRecord(Math.ceil(record / 10))
    }
  }, [record])
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }
  const SystemAlert = (codes) => {
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
    }
    const alerts = codes.codes.map((code) => ({
      code,
      message: statusCodesNotification[code] || "Unknown Status Code",
    }))

    setDetail(alerts)
    setStatus(codes)
    console.log("Alerts:", detail, status.status)
  }
  const PrevPage = () => {
    setCountPage((prevCount) => Math.max(prevCount - 1, 1))
  }
  const NextPage = () => {
    setCountPage((prevCount) => Math.min(prevCount + 1, maxRecord))
  }
  const Rest = () => {
    setCountPage(1)
  }
  return (
    <>
      <div>
        <div className="w-[100%] h-[50px] bg-[#133261] rounded-md text-white flex items-center">
          <div className="w-[60%] flex ml-[100px] justify-between">
            <span className="w-[100px] flex justify-center">Date</span>
            <span className="w-[100px] flex justify-center  ml-[10px]">
              Status
            </span>
            <span className="w-[200px] flex justify-center ">
              Serial number
            </span>
            <span className="w-[100px] flex justify-center">Alarm Code</span>
          </div>
          <div className="w-[30%] flex justify-end mr-[5%]">
            <div
              className="flex items-center gap-2"
              onClick={Rest}>
              <img
                className="h-[20px] "
                src={reset}
                alt=""
              />
              <span className="cursor-pointer"> Rest</span>
            </div>
          </div>
        </div>
        <div className="h-5"></div>

        <div className="flex">
          <div className="flex justify-center flex-col w-[75%] cursor-pointer relative">
            {datanotity == null || datanotity.length == 0 ? (
              <div className="absolute flex top-0 right-[50%]">Nodata</div>
            ) : datanotity[0].list.some(
                (item) =>
                  content === "1" ||
                  (content === "2" && item.status === 50) ||
                  (content === "3" && item.status === 40) ||
                  (content === "4" && item.status === 30)
              ) ? (
              datanotity[0].list.map((item, index) => {
                if (
                  content === "1" ||
                  (content === "2" && item.status === 50) ||
                  (content === "3" && item.status === 40) ||
                  (content === "4" && item.status === 30)
                ) {
                  return (
                    <div
                      key={item.id}
                      className="flex items-center py-2 w-[90%] mb-1"
                      style={{boxShadow: "0px 1px 13px 0px #00000014"}}
                      onClick={() => SystemAlert(item)}>
                      <div className="flex ml-[10px] w-[100%] justify-between">
                        <span className="w-[px] text-sm flex mr-[10px]">
                          {index + 1} .
                        </span>
                        <span className="w-[100px] text-sm flex">
                          {formatDate(item.alertTime)}
                        </span>
                        <span
                          className={`w-[100px] flex justify-center ${
                            item.status === 40
                              ? "bg-[#FFF6E8]  border border-solid border-[#FFCC81] text-[#ED9B22]"
                              : item.status === 50
                              ? "bg-[#FFF0F0]  border border-solid border-[#FF4747] text-[#FF4747]"
                              : item.status === 30
                              ? "bg-[#F2FFF7]  border border-solid border-[#00B448] text-[#00B448]"
                              : "bg-[#FFF6E8]  border border-solid border-[#FFCC81] text-[#ED9B22]"
                          }   rounded`}>
                          <span>
                            {item.status === 10
                              ? "Active"
                              : item.status === 20
                              ? "Inactive"
                              : item.status === 30
                              ? "Normal"
                              : item.status === 40
                              ? "Warning"
                              : item.status === 50
                              ? "Error"
                              : ""}
                          </span>
                        </span>
                        <span className="w-[200px] flex justify-center">
                          {item.devicePn}
                        </span>
                        <span className="w-[100px] flex justify-center">
                          {item.codes.length > 2
                            ? `${item.codes.slice(0, 2).join(", ")}...`
                            : item.codes.join(", ")}
                        </span>
                      </div>
                      <div className="h-[40px]"></div>
                    </div>
                  )
                } else {
                  return null
                }
              })
            ) : (
              <div className="absolute flex top-0 right-[50%]">Nodata</div>
            )}
          </div>

          <div className="flex justify-start flex-col w-[25%]">
            <div
              className="bg-[#244D8A] h-[50px] w-[100%] text-white flex items-center justify-center"
              style={{
                borderRadius: "15px 15px 0px 0px",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}>
              <span>System Alert</span>
            </div>

            <div
              className="bg-[#FFF] h-[300px] w-[100%]"
              style={{
                borderRadius: "0px 0px 0px 0px",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}>
              {detail[0]?.message ? (
                <div>
                  <div className="flex items-center justify-center gap-5 mt-4">
                    <img
                      className="w-[60px]"
                      src={
                        status.status == 40
                          ? warning
                          : status.status == 50
                          ? err
                          : warning
                      }
                      alt=""></img>

                    <span className="text-base font-medium">
                      {status.status == 40
                        ? "Warning"
                        : status.status == 50
                        ? "Error"
                        : "Trouble Solved"}
                    </span>
                  </div>
                </div>
              ) : null}

              <div className="w-[80%] m-auto flex flex-col">
                <div className="flex justify-center">
                  <div className="flex-col flex text-sm">
                    {detail[0]?.message ? (
                      <div>
                        {detail.map((msg, index) => (
                          <li
                            className="text-[#F44336]"
                            key={index}>
                            {" "}
                            <span className="text-[#001647]">
                              {msg.message}
                            </span>
                          </li>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-2 text-[#001647]">
                        No messages available
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {datanotity == null || datanotity.length === 0 ? null : showPage ? (
          <div
            className="h-[50px] w-[70%] justify-end flex items-center gap-5"
            id="showPage">
            <div className="">
              <button
                className="flex items-center gap-1 text-xs text-[#687182]"
                onClick={() => setOpen(!open)}>
                Rows per page: 10{" "}
                <img
                  src={icondown}
                  className="w-4 h-4"
                />
              </button>
            </div>

            <div className="flex gap-5">
              <div
                onClick={PrevPage}
                className="h-[30px] w-[40px] bg-[#F7F9FC] shadow border border-[#464F603D] rounded-[6px] flex justify-center items-center">
                <img
                  className="h-[30px] w-[30px]"
                  src={left}
                  alt=""
                />
              </div>
              <div className="flex items-center">
                {countPage}/{maxRecord}
              </div>
              <div
                onClick={NextPage}
                className="h-[30px] w-[40px] bg-[#F7F9FC] shadow border border-[#464F603D] rounded-[6px] flex justify-center items-center">
                <img
                  className="h-[30px] w-[30px] transform scale-x-[-1]"
                  src={left}
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : null}

        {open && (
          <div className=" bg-red-200 w-full flex justify-center items-center">
            <div className="bg-red-300 w-[5%]">
              <p>5</p>
              <p>10</p>
              <p>15</p>
              <p>20</p>
              <p>30</p>
              <p>40</p>
              <p>50</p>
            </div>
          </div>
        )}
        <div className="h-[200px]"></div>
      </div>
    </>
  )
}
