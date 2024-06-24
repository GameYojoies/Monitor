/** @format */
import {Outlet} from "react-router-dom"
import Header from "./header"
import Sidebar from "./sidebar"

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-grow bg-[#F3F6FC]">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
