/** @format */

import Avatar from "../components/Avatar"
import InputLogin from "../components/inputLogin"
import useAuth from "../hook/useAuth"
import {iconUser} from "../images"

export default function UserPage() {
  const {authenticateUser} = useAuth()
  // console.log("authenticateUser", authenticateUser)

  return (
    <div className="w-11/12 m-auto text-[#001647] flex flex-col gap-20">
      <div className="flex items-center gap-4 border-b-2 border-[#001647] p-4">
        <img
          src={iconUser}
          className="w-12 h-12"
        />

        <p className="text-[23px] font-bold">User Information</p>
      </div>

      <div className="bg-white border-2">
        <div className="w-1/4 flex flex-col items-center border-2">
          <Avatar
            src={authenticateUser?.avatar || iconUser}
            size="242px"
          />

          <p className="text-[22px] font-bold">{authenticateUser?.name}</p>

          <p className="text-[#7A6D87] text-base">
            ID <span>{authenticateUser?.id}</span>
          </p>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  )
}
