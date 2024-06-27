import React, { useEffect, useState } from "react";
import { getAccessToken } from "../../utils/local-storage";
import axios from "axios";

const TabContent = ({ content, datanotity }) => {

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

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
            <span> Rest</span>
          </div>
        </div>
        <div className="h-5"></div>
        <div className="flex">
          <div className="flex justify-center flex-col w-[75%] cursor-pointer">
            {datanotity == null || datanotity[0].list.length === 0
              ? null
              : datanotity[0].list.map((item, index) => {
                  if (
                    content === "1" ||
                    (content === "2" && item.status === 50) ||
                    (content === "3" && item.status === 40) ||
                    (content === "4" && item.status === 30)
                  ) {
                    return (
                      <div
                        key={item.id}
                        className="flex items-center  py-2 w-[90%] mb-1" style={{boxShadow: "0px 1px 13px 0px #00000014"}}
                      >
                        <div className="flex  ml-[10px] w-[100%] justify-between">
                          <span className="w-[px] text-sm flex mr-[10px]">
                            {index + 1} .
                          </span>
                          <span className="w-[100px] text-sm flex">
                            {formatDate(item.alertTime)}
                          </span>
                          <span className="w-[100px] flex justify-center">
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
                            {item.codes.join(", ")}
                          </span>
                        </div>
                        <div className="h-[40px]"></div>
                      </div>
                    );
                  } else {
                    return <div>Nodata</div>
                  }
                })}
          </div>

          <div className="flex justify-start flex-col w-[25%]">
            <div
              className="bg-[#244D8A] h-[50px] w-[100%] text-white flex items-center justify-center"
              style={{
                borderRadius: "15px 15px 0px 0px",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <span>System Alert</span>
            </div>
            <div
              className="bg-[#FFF] h-[300px] w-[100%]"
              style={{
                borderRadius: "0px 0px 0px 0px",
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div>Error</div>
            </div>
          </div>
        </div>
        <div className="h-[200px]"></div>

      </div>
    </>
  );
};
const Alert = () => {
  const token = getAccessToken();
  const [activeTab, setActiveTab] = useState(0);
  const [datanotity, setDatanotity] = useState(null);
  let statusCounts = {
    Active: 0,
    Inactive: 0,
    Normal: 0,
    Warning: 0,
    Error: 0,
  };
  // Check if datanotity is defined and has necessary properties
  if (datanotity && datanotity[0] && datanotity[0].list) {
    datanotity[0].list.forEach((item) => {
        // Ensure content is treated as string
        switch (item.status) {
          case 10:
            statusCounts.Active++;
            break;
          case 20:
            statusCounts.Inactive++;
            break;
          case 30:
            statusCounts.Normal++;
            break;
          case 40:
            statusCounts.Warning++;
            break;
          case 50:
            statusCounts.Error++;
            break;
          default:
            break;
        }
    });

  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_TEST
          }/solarDevice/deviceAlert?page=1&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.result != null) {
          setDatanotity(response.data.result);
        } else {
          setDatanotity([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

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
              }}
            >
              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 0 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{ borderRadius: "15px 15px 0 0" }}
                onClick={() => handleTabClick(0)}
              >
                Show All
                <span className="bg-[#3B78FE] text-white text-[10px] pl-2 pr-2 pt-1 pb-1 ml-2 rounded-full	">
                  {statusCounts.Active + statusCounts.Inactive + statusCounts.Normal + statusCounts.Warning + statusCounts.Error}
                </span>
              </button>
              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 1 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{ borderRadius: "15px 15px 0 0" }}
                onClick={() => handleTabClick(1)}
              >
                Error
                <span className="bg-[#3B78FE] text-white text-[10px] pl-2 pr-2 pt-1 pb-1 ml-2 rounded-full	">
                  {statusCounts.Error}
                </span>
              </button>
              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 2 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{ borderRadius: "15px 15px 0 0" }}
                onClick={() => handleTabClick(2)}
              >
                Warning
                <span className="bg-[#3B78FE] text-white text-[10px] pl-2 pr-2 pt-1 pb-1 ml-2 rounded-full	">
                  {statusCounts.Warning}
                </span>
              </button>
              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 3 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{ borderRadius: "15px 15px 0 0" }}
                onClick={() => handleTabClick(3)}
              >
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
              <TabContent content="1" datanotity={datanotity} />
            )}
            {activeTab === 1 && (
              <TabContent content="2" datanotity={datanotity} />
            )}
            {activeTab === 2 && (
              <TabContent content="3" datanotity={datanotity} />
            )}
            {activeTab === 3 && (
              <TabContent content="4" datanotity={datanotity} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
