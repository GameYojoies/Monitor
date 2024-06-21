/** @format */

import React from "react"
import {monitor, report, notification, user} from "../images"
import {Link} from "react-router-dom"
function Sidebar({activeLink, onLinkClick}) {
  const linkClass = (link) =>
    `block  py-2 text-gray-800 hover:bg-gray-200 rounded-none ${
      activeLink === link ? "bg-gray-200" : ""
    }`

  return (
    <nav className="w-40 bg-white ">
      <ul className="space-y-2 text-center shadow-xl  h-screen mr-4">
        <li className="pt-7">
          <Link
            to="monitor"
            className={`${linkClass("Monitor")} flex flex-col items-center `}>
            <img
              src={monitor}
              className="w-[24px]"
              alt="IconMonitor"
            />
            Monitor
          </Link>
        </li>
        <li>
          <Link
            to="report"
            className={`${linkClass("Report")} flex flex-col items-center`}>
            <img
              src={report}
              className="w-[24px]"
              alt="IconReport"
            />
            Report
          </Link>
        </li>
        <li>
          <Link
            to="Notification"
            className={`${linkClass(
              "Notification"
            )} flex flex-col items-center`}>
            <img
              src={notification}
              className="w-[24px]"
              alt="IconNotification"
            />
            Notification
          </Link>
        </li>
        <li>
          <Link
            to="user"
            className={`${linkClass("User")} flex flex-col items-center`}>
            <img
              src={user}
              className="w-[24px]"
              alt="IconUser"
            />
            User
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
