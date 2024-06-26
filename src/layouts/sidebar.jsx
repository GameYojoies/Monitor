/** @format */

import React from "react"
import {monitor, report, notification, user} from "../images"
import {Link, useLocation} from "react-router-dom"
import {useTranslation} from "react-i18next"
function Sidebar() {
  const navbarData = [
    {
      id: 1,
      img: monitor,
      title: "Monitor",
      to: "/monitor",
    },
    {
      id: 2,
      img: report,
      title: "Report",
      to: "/report",
    },
    {
      id: 3,
      img: notification,
      title: "Notification",
      to: "/notification",
    },
    {
      id: 4,
      img: user,
      title: "User",
      to: "/user",
    },
  ]

  const location = useLocation()
  // console.log("location", location.pathname)
  const {t} = useTranslation()

  return (
    <nav className="w-[110px] bg-white">
      <div className="shadow-xl  h-full">
        <ul className="space-y-0 text-center">
          {navbarData?.map((el, idx) => (
            <li
              key={idx}
              className="pt-0">
              <Link
                to={el.to}
                className={`py-7 text-gray-800 hover:bg-gray-200 flex flex-col items-center ${
                  location.pathname === el.to ? "bg-gray-200 font-semibold" : ""
                }`}>
                <img
                  src={el.img}
                  className="w-[30px]"
                  alt="IconMonitor"
                />
                {t(el.title)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
