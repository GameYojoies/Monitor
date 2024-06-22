/** @format */

import {createContext, useEffect, useState} from "react"
import {login, getMe} from "../apis/auth-api"
import {
  removeAccessToken,
  setAccessToken,
  getAccessToken,
} from "../utils/local-storage"

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  const [authenticateUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  )
  const [fetch, setFetch] = useState(false)
  const [pin, setPin] = useState([])
  const [solarDate, setSolarDate] = useState()

  const [userLoginCode, setUserLoginCode] = useState("")
  // console.log("userLoginCode", userLoginCode)

  const [selecteLanguage, setSelecteLanguage] = useState("EN")

  const [dataFlow, setDataFlow] = useState(null)

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await getMe()
        setAuthenticatedUser(res.data.result)
      } catch (err) {
        removeAccessToken()
        setAuthenticatedUser(null)
      }
    }

    if (getAccessToken()) {
      fetchAuthUser()
    }
  }, [])

  const userLogin = async (name, password) => {
    const res = await login({name, password})
    // console.log("res", res)
    const token = res?.data.result?.token
    // console.log("token", token)
    const code = res?.data.code
    // console.log("code:", code)

    if (code === 4010) {
      throw new Error(`Mobile or password not correct: ${code}`)
    }

    setAccessToken(token)
    setAuthenticatedUser(token)
    setUserLoginCode(code)
    setFetch(true)
  }

  const logout = () => {
    removeAccessToken()
    setAuthenticatedUser(null)
    setFetch(false)
    setUserLoginCode(null)
  }

  return (
    <AuthContext.Provider
      value={{
        authenticateUser,
        userLogin,
        logout,
        userLoginCode,
        selecteLanguage,
        dataFlow,
        setDataFlow,
        setSelecteLanguage,
        fetch,
        setUserLoginCode,
        setFetch,
        pin,
        setPin,
        solarDate,
        setAuthenticatedUser,
        setSolarDate,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
