/** @format */

import {Navigate} from "react-router-dom"
import useAuth from "../hook/useAuth"

export default function ProtectedRout({children}) {
  const {authenticateUser} = useAuth()
  if (!authenticateUser) {
    return <Navigate to={"/login"} />
  }
  return children
}
