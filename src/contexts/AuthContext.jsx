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

  const [userLoginCode, setUserLoginCode] = useState("")
  // console.log("userLoginCode", userLoginCode)

  const [selecteLanguage, setSelecteLanguage] = useState("EN")

  const [dataFlow, setDataFlow] = useState(null)

  useEffect(() => {
    const token = getAccessToken()
    console.log("token inside useEffect:", token)

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
    setAccessToken(token)
    setAuthenticatedUser(token)
    setUserLoginCode(res?.data?.code)
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
      }}>
      {children}
    </AuthContext.Provider>
  )
}
