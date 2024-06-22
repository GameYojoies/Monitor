/** @format */

import {createContext, useEffect, useState} from "react"
import {login, getMe} from "../apis/auth-api"

import {
  removeAccessToken,
  setAccessToken,
  getAccessToken,
} from "../utils/local-storage"
import {toast} from "react-toastify"

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  const [authenticateUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  )
  // console.log("authenticateUser", authenticateUser)

  const [userLoginCode, setUserLoginCode] = useState("")
  // console.log("userLoginCode", userLoginCode)

  const [selecteLanguage, setSelecteLanguage] = useState("EN")

  
  const [dataFlow, setDataFlow] = useState(null);
  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await getMe()
        console.log("getMe:", res.data.result)
        setAuthenticatedUser(res.data.result)
      } catch (err) {
        console.log("fetchAuthUser: error", err)
        removeAccessToken()
      }
    }

    if (getAccessToken()) {
      console.log("=== true ===")
      fetchAuthUser()
    } else {
      console.log("=== false ===")
    }
  }, [])

  const userLogin = async (name, password) => {
    try {
      const res = await login({name, password})
      console.log("res", res)
      setAccessToken(res?.data.result?.token)
      setAuthenticatedUser(res?.data.result?.token)
      setUserLoginCode(res.data.code)
    } catch (error) {
      setUserLoginCode(null)
      throw error
    }
  }

  const logout = () => {
    removeAccessToken()
    setAuthenticatedUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        authenticateUser,
        userLogin,
        logout,
        userLoginCode,
        selecteLanguage,
        dataFlow, setDataFlow,
        setSelecteLanguage,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
