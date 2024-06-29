/** @format */
import {Outlet, useNavigate} from "react-router-dom"
import Header from "./header"
import Sidebar from "./sidebar"
import {useEffect} from "react"

const Layout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (window.location.pathname !== "/monitor") {
      navigate("/monitor")
    }
  }, [navigate])
  
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
