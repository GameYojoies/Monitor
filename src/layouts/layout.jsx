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
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
