/** @format */

import UserInfoSection from "../components/UserInfoSection"
import useAuth from "../hook/useAuth"
import {iconUser} from "../images"

export default function UserPage() {
  const {authenticateUser, viteApiTest} = useAuth()
  // console.log("authenticateUser", authenticateUser)

  return (
    <div className="w-11/12 m-auto flex flex-col gap-20">
      <div className="flex items-center gap-4 border-b-2 border-[#001647] p-4">
        <img
          src={iconUser}
          className="w-12 h-12"
        />

        <p className="text-[23px] font-bold">User Information</p>
      </div>

      <div className="bg-white flex-none lg:flex items-center">
        <div className="w-full lg:w-1/4  flex flex-col items-center ">
          <img
            src={viteApiTest + authenticateUser?.avatar || iconUser}
            className="w-[242px] h-[242px] rounded-full cursor-pointer"
          />

          <p className="text-[22px] font-bold text-[#001647]">
            {authenticateUser?.name}
          </p>

          <p className="text-[#7A6D87] text-base">
            ID <span>{authenticateUser?.id}</span>
          </p>
        </div>

        <div className="w-full lg:w-3/4 flex flex-col gap-5 ">
          <div className="flex flex-col gap-2">
            <UserInfoSection
              header="Username"
              title={authenticateUser?.name || "-"}
            />
          </div>

          <div className="flex gap-2 items-cener">
            <div className="w-3/4 flex flex-col gap-2">
              <UserInfoSection
                header="Username"
                title={authenticateUser?.dob || "-"}
              />
            </div>

            <div className="w-1/4 flex flex-col gap-2">
              <UserInfoSection
                header="Gender"
                title={
                  authenticateUser?.gender === 10 ? "male" : "female" || "-"
                }
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <UserInfoSection
              header="Phone Number"
              title={authenticateUser?.mobile || "-"}
            /> 
          </div>

          <div className="flex flex-col gap-2">
            <UserInfoSection
              header="E-mail"
              title={authenticateUser?.email || "-"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
