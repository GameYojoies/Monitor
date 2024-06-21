/** @format */

import axios from "axios"
import {getAccessToken} from "../utils/local-storage"

axios.defaults.baseURL = "http://18.143.194.72/solar"

axios.interceptors.request.use(
  (config) => {
    if (getAccessToken()) {
      config.headers.authorization = `Bearer ${getAccessToken()}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default axios
