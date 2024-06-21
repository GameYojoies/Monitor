/** @format */

// auth-api.js

import axios from "../config/axios"

export const login = async (credentials) => {
  try {
    const response = await axios.post("/v1/auth/login", credentials)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getMe = () => axios.get("/v1/account/profile")
