/** @format */

import React, {useEffect, useState} from "react"
import {getAccessToken} from "../../utils/local-storage"
import useAuth from "../../hook/useAuth"
import axios from "axios"

import TabContent from "./Tabcontent"

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
