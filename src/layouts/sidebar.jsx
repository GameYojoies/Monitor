/** @format */

import React from "react"
import {monitor, report, notification, user} from "../images"
import {Link, useLocation} from "react-router-dom"
function Sidebar() {
  const location = useLocation()
  // console.log("location", location.pathname)

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

  return (
    <nav className="w-40 bg-white ">
      <ul className="space-y-2 text-center shadow-xl  h-screen mr-4">
        {navbarData?.map((el, idx) => (
          <li
            key={idx}
            className="pt-7">
            <Link
              to={el.to}
              className={`py-2 text-gray-800 hover:bg-gray-200 flex flex-col items-center ${
                location.pathname === el.to ? "bg-gray-200" : ""
              }`}>
              <img
                src={el.img}
                className="w-[24px]"
                alt="IconMonitor"
              />
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
