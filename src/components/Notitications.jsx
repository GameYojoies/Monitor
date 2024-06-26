import {
  notification,
  icon_notify_1,
  icon_notify_2,
  icon_notify_3,
  icon_notify_4,
  img_device,
} from "../images";
import useAuth from "../hook/useAuth";
import React, { useState, useEffect } from "react";

function Notifications() {
  const { pin, datanotifydeivece } = useAuth();
  const [mainDevice, setMainDevice] = useState(null);
  useEffect(() => {
    const foundDevice = datanotifydeivece.find(
      (device) => device.main === true
    );
    setMainDevice(foundDevice);
  }, [datanotifydeivece]);
  console.log(mainDevice);
  return (
    <>
      <div className="h-5"></div>
      <div className="w-[90%] m-auto flex items-center">
        <img src={notification} className="h-8 "></img>
        <span>Notifications</span>
      </div>
      <div className="h-5"></div>
      <div
        className="w-[90%] m-auto bg-[#FFFFFF] h-[300px] flex"
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      >
        <div className="w-[90%] h-[100%] m-auto  flex">
          <div className="w-[30%]">
            <img src={img_device} className=" h-[100%]"></img>
          </div>
          <div className="w-[100%] h-[100%]  flex items-center justify-center flex-col	">
            <div className="w-[80%] ml-[10%]">
              <div className="flex  gap-5">
                <img src={icon_notify_4} className="h-6"></img>
                <span className="w-[200px]">Device Name</span>
                <div className="w-[80%]">
                  <span className="text-[#959AA4]">{mainDevice?.name}</span>
                  <hr></hr>
                </div>
              </div>
            </div>
            {/* /////////////////////////////////////////// */}
            <div className="h-5"></div>
            <div className="w-[80%] ml-[10%]">
              <div className="flex  gap-5">
                <img src={icon_notify_3} className="h-6"></img>
                <span className="w-[200px]">Device Pin</span>
                <div className="w-[80%]">
                  <span className="text-[#959AA4]">{mainDevice?.pn} </span>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="h-5"></div>
            {/* /////////////////////////////////////////// */}
            <div className="w-[80%] ml-[10%]">
              <div className="flex  gap-5">
                <img src={icon_notify_1} className="h-6"></img>
                <span className="w-[200px]">Device Type</span>
                <div className="w-[80%]">
                  <span className="text-[#959AA4]">All In-one Inverter</span>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="h-5"></div>

            <div className="w-[80%] ml-[10%]">
              <div className="flex  gap-5">
                <img src={icon_notify_2} className="h-6"></img>
                <span className="w-[200px]">Device Status</span>
                <div className="w-[80%]">
                  <div className="text-[#2264E5] bg-[#EBF0FA] w-[100px] rounded-lg h-[80%] flex justify-center items-center">
                    <span>{mainDevice?.status === 10 ? "Active" : "OFF"}</span>
                  </div>{" "}
                  <div className="h-2"></div>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
