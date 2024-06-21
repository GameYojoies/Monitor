/** @format */

import {createContext, useState} from "react"
import {login} from "../apis/auth-api"

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

  const userLogin = async (name, password) => {
    const res = await login({name, password})
    // console.log("res", res)
    setAccessToken(res.result.token)
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
