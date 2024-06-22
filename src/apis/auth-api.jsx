/** @format */

// auth-api.js

import axios from "../config/axios"

export const login = (input) => axios.post("/v1/auth/login", input)

export const getMe = () => axios.get("/v1/account/profile")
