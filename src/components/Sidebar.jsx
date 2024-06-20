import React from "react";
import { monitor, report,notification,user } from "../images";
function Sidebar({ activeLink, onLinkClick }) {
  const linkClass = (link) =>
    `block  py-2 text-gray-800 hover:bg-gray-200 rounded-none ${
      activeLink === link ? "bg-gray-200" : ""
    }`;

  return (
    <div className="">
      <nav className="w-40 bg-white  ">
        <ul className="space-y-2 text-center shadow-xl  h-screen mr-4">
          <li className="pt-7">
            <a
              href="#monitor"
              className={`${linkClass("Monitor")} flex flex-col items-center `}
              onClick={() => onLinkClick("Monitor")}
            >
              <img src={monitor} className="w-[24px]" alt="IconMonitor" />
              Monitor
            </a>
          </li>
          <li>
            <a
              href="#report"
              className={`${linkClass("Report")} flex flex-col items-center`}
              onClick={() => onLinkClick("Report")}
            >
               <img src={report} className="w-[24px]" alt="IconReport" />
               Report
            </a>
          </li>
          <li>
            <a
              href="#Notification"
              className={`${linkClass("Notification")} flex flex-col items-center`}
              onClick={() => onLinkClick("Notification")}
            >
               <img src={notification} className="w-[24px]" alt="IconNotification" />
             Notification
            </a>
          </li>
          <li>
            <a
              href="#user"
              className={`${linkClass("User")} flex flex-col items-center`}
              onClick={() => onLinkClick("User")}
            >
               <img src={user} className="w-[24px]" alt="IconUser" />
              User
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
