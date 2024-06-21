/** @format */

import {createContext, useEffect, useState} from "react"
import {login, getMe} from "../apis/auth-api"

import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage"

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  const [authenticateUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  )
  // console.log("authenticateUser", authenticateUser)
  console.log("getAccessToken", getAccessToken)

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await getMe()
        console.log("res", res)
        setAuthenticatedUser(res?.data?.result)
      } catch (err) {
        removeAccessToken()
      }
    }
    if (getAccessToken()) {
      fetchAuthUser()
    }
  }, [])

  const userLogin = async (name, password) => {
    const res = await login({name, password})
    // console.log("res", res)
    setAccessToken(res.result.token)
    setAuthenticatedUser(res.result.token)
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
      }}>
      {children}
    </AuthContext.Provider>
  )
}
