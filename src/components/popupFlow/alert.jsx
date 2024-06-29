/** @format */

import React, {useEffect, useState} from "react"
import {getAccessToken} from "../../utils/local-storage"
import useAuth from "../../hook/useAuth"
import axios from "axios"

import TabContent from "./Tabcontent"

//   console.log(datanotity, record, "datanotity");
//   const [detail, setDetail] = useState([]);
//   const [status, setStatus] = useState();
//   const [maxRecord, setMaxRecord] = useState(null);
//   const { countPage, setCountPage, setShowPage, showPage } = useAuth();
//   if (
//     content === "1" &&
//     statusCounts.Active +
//       statusCounts.Inactive +
//       statusCounts.Normal +
//       statusCounts.Warning +
//       statusCounts.Error !=
//       0
//   ) {
//     setShowPage(true);
//   } else if (content === "2" && statusCounts.Error != 0) {
//     setShowPage(true);
//   } else if (content === "3" && statusCounts.Warning != 0) {
//     setShowPage(true);
//   } else if (content === "4" && statusCounts.Normal != 0) {
//     setShowPage(true);
//   }
//   else{
//     setShowPage(false);

//   }
//   useEffect(() => {
//     if (record !== undefined && record !== null) {
//       setMaxRecord(Math.ceil(record / 10));
//     }
//   }, [record]);
//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleDateString("en-GB", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };
//   const SystemAlert = (codes) => {
//     const statusCodesNotification = {
//       4500: "Error Starting Work",
//       4501: "High Voltage Input",
//       4502: "Low Voltage Input",
//       4503: "Issue in the DC Circuit",
//       4504: "High Temperature",
//       4505: "High Battery Voltage",
//       4506: "Increasing the Input Voltage Failed",
//       4507: "Problems in the Input Terminal",
//       4508: "Fluid Related Issues at the Start of the Inverter",
//       4509: "High Voltage in the Inverter",
//       4510: "Low Voltage in the Inverter",
//       4511: "Issue in the Inverter Circuit",
//       4512: "Protection Against Negative Influences on the Inverter",
//       4513: "Issue in Exceeding Power Capacity",
//       4514: "Problem in Writing Machine Model Code",
//       4515: "Lack of Boot Programs",
//       4516: "Problem in Writing Machine Programs",
//       4517: "Excessive Current in the Neutral Line",
//       4518: "Identical Product Codes",
//       4519: "CAN Communication Issues",
//       4520: "Significant Differences in Battery Voltage",
//       4521: "Significant Differences in Power Supply Voltage",
//       4522: "Significant Differences in Frequency from the Power Supply",
//       4523: "Incorrect Settings Affecting Collaborative Operation Results",
//       4524: "Loss of Improvement Adjustments",
//       4525: "Issues in BMS Battery",
//       4600: "Chip is Broken",
//       4601: "The Fan is Broken",
//       4602: "High Temperature (Excessive)",
//       4603: "High Charging Voltage",
//       4604: "Failure to Start the Battery in Cold Conditions",
//       4605: "Low State of Charge (SOC)",
//       4606: "Battery Low Turning Off",
//       4607: "Full Charge Cycle",
//       4608: "Battery Not Connected",
//       4609: "Low Battery",
//       4610: "Over Load",
//       4700: "Battery Voltage Drop",
//       4701: "Storage Error",
//       4702: "Low Energy Discharging",
//       4703: "The Fan is Not Working",
//       4704: "The Temperature is Too High",
//       4705: "Charging Over Current",
//       4706: "Lost Communication with BMS",
//       4707: "Phase Sequence Error",
//       4708: "Battery Open Circuit",
//       4709: "Low Battery Voltage",
//       4710: "Parallel Setup Error",
//       4711: "Parallel Synchronization Error",
//       4712: "Parallel Communication Failure",
//       4713: "Parallel Models are Not Compatible",
//       4714: "Main Power Phase in Parallel is Wrong",
//       4715: "Insufficient PV Power",
//       4716: "Overload",
//       4717: "Main Frequency is Absent",
//       4718: "Mains Voltage has Disappeared",
//     };
//     const alerts = codes.codes.map((code) => ({
//       code,
//       message: statusCodesNotification[code] || "Unknown Status Code",
//     }));

//     setDetail(alerts);
//     setStatus(codes);
//     console.log("Alerts:", detail, status.status);
//   };
//   const PrevPage = () => {
//     setCountPage((prevCount) => Math.max(prevCount - 1, 1));
//   };
//   const NextPage = () => {
//     setCountPage((prevCount) => Math.min(prevCount + 1, maxRecord));
//   };
//   const Rest = () => {
//     setCountPage(1);
//   };
//   return (

//   );
// };

const Alert = () => {
  const token = getAccessToken()
  const [activeTab, setActiveTab] = useState(0)
  const [datanotity, setDatanotity] = useState(null)
  const [record, setRecord] = useState(null)
  const {countPage, setCountPage, setShowPage, showPage} = useAuth()

  let statusCounts = {
    Active: 0,
    Inactive: 0,
    Normal: 0,
    Warning: 0,
    Error: 0,
  }
  // Check if datanotity is defined and has necessary properties
  if (datanotity && datanotity[0] && datanotity[0].list) {
    datanotity[0].list.forEach((item) => {
      // Ensure content is treated as string
      switch (item.status) {
        case 10:
          statusCounts.Active++
          break
        case 20:
          statusCounts.Inactive++
          break
        case 30:
          statusCounts.Normal++
          break
        case 40:
          statusCounts.Warning++
          break
        case 50:
          statusCounts.Error++
          break
        default:
          break
      }
    })
  }

  console.log(showPage, statusCounts)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_TEST
          }/solarDevice/deviceAlert?page=${countPage}&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )

        if (response.data.result != null) {
          setDatanotity(response.data.result)
          setRecord(response.data.records)
        } else {
          setDatanotity([])
          setRecord([])
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [token, countPage])
  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      <div className="w-[100%] m-auto  bg-[#FFF]">
        <div className="w-[90%] m-auto  bg-[#FFF]">
          <div className="h-5"></div>

          <div className="tab-buttons">
            <div
              className="w-[80%] h-[50px] text-[#001647]"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
                borderRadius: "15px 15px 0 0",
              }}>
              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 0 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{borderRadius: "15px 15px 0 0"}}
                onClick={() => handleTabClick(0)}>
                Show All
                <span className="bg-[#3B78FE] text-white text-[10px] pl-2 pr-2 pt-1 pb-1 ml-2 rounded-full	">
                  {statusCounts.Active +
                    statusCounts.Inactive +
                    statusCounts.Normal +
                    statusCounts.Warning +
                    statusCounts.Error}
                </span>
              </button>
              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 1 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{borderRadius: "15px 15px 0 0"}}
                onClick={() => handleTabClick(1)}>
                Error
                <span className="bg-[#3B78FE] text-white text-[10px] pl-2 pr-2 pt-1 pb-1 ml-2 rounded-full	">
                  {statusCounts.Error}
                </span>
              </button>
              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 2 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{borderRadius: "15px 15px 0 0"}}
                onClick={() => handleTabClick(2)}>
                Warning
                <span className="bg-[#3B78FE] text-white text-[10px] pl-2 pr-2 pt-1 pb-1 ml-2 rounded-full	">
                  {statusCounts.Warning}
                </span>
              </button>
              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 3 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{borderRadius: "15px 15px 0 0"}}
                onClick={() => handleTabClick(3)}>
                Trouble Solved
                <span className="bg-[#3B78FE] text-white text-[10px] pl-2 pr-2 pt-1 pb-1 ml-2 rounded-full	">
                  {statusCounts.Normal}
                </span>
              </button>
            </div>
            <div></div>
          </div>

          <div className="h-5"></div>

          <div className="tab-content">
            {activeTab === 0 && (
              <TabContent
                content="1"
                datanotity={datanotity}
                record={record}
                statusCounts={statusCounts}
              />
            )}
            {activeTab === 1 && (
              <TabContent
                content="2"
                datanotity={datanotity}
                record={record}
                statusCounts={statusCounts}
              />
            )}
            {activeTab === 2 && (
              <TabContent
                content="3"
                datanotity={datanotity}
                record={record}
                statusCounts={statusCounts}
              />
            )}
            {activeTab === 3 && (
              <TabContent
                content="4"
                datanotity={datanotity}
                record={record}
                statusCounts={statusCounts}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Alert
