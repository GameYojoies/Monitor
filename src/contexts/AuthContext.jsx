/** @format */

import { createContext, useEffect, useState } from "react"
import { login, getMe } from "../apis/auth-api"
import {
  removeAccessToken,
  setAccessToken,
  getAccessToken,
} from "../utils/local-storage"

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  const [authenticateUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  )
  const [fetch, setFetch] = useState(false)
  const [pin, setPin] = useState([])
  const [solarDate, setSolarDate] = useState()
  const [dataStore, setDataStore] = useState([])

  const [selecteLanguage, setSelecteLanguage] = useState(localStorage.getItem("Language"))
  const viteApiTest = "http://18.143.194.72/solar"

  const [dataFlow, setDataFlow] = useState(null)

  const fetchAuthUser = async () => {
    try {
      const res = await getMe()
      setAuthenticatedUser(res.data.result)
    } catch (err) {
      removeAccessToken()
      setAuthenticatedUser(null)
    }
  }

  useEffect(() => {
    if (getAccessToken()) {
      fetchAuthUser()
    }
  }, [getAccessToken()])

  useEffect(() => {
    checkLanguage()
  }, [selecteLanguage])

  const checkLanguage = () => {

    const getLang = localStorage.getItem("Language");

    if (!getLang) {
      localStorage.setItem("Language", "EN");
      setSelecteLanguage("EN");
    } else {
      localStorage.setItem("Language", selecteLanguage);
    }

  }

  const userLogin = async (name, password) => {
    const res = await login({ name, password })
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
    setFetch(true)
  }

  const logout = () => {
    removeAccessToken()
    setAuthenticatedUser(null)
    setFetch(false)
  }

  return (
    <AuthContext.Provider
      value={{
        authenticateUser,
        userLogin,
        logout,
        selecteLanguage,
        dataFlow,
        setDataFlow,
        setSelecteLanguage,
        fetch,
        setFetch,
        pin,
        setPin,
        solarDate,
        setAuthenticatedUser,
        setSolarDate,
        viteApiTest,
        dataStore,
        setDataStore,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
