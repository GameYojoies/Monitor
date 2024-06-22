/** @format */

import { createContext, useEffect, useState } from "react";
import { login, getMe } from "../apis/auth-api";
import { removeAccessToken, setAccessToken, getAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticateUser, setAuthenticatedUser] = useState(getAccessToken() ? true : null);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await getMe();
        console.log("fetchAuthUser: success", res.data.result);
        setAuthenticatedUser(res.data.result);
      } catch (err) {
        console.log("fetchAuthUser: error", err);
        removeAccessToken();
      }
    };

    if (getAccessToken()) {
      console.log("=== true ===");
      fetchAuthUser();
    } else {
      console.log("=== false ===");
    }
  }, []);

  const userLogin = async (name, password) => {
    const res = await login({ name, password });
    setAccessToken(res?.result?.token);
    setAuthenticatedUser(res?.result?.token);
    setFetch(true);  // Trigger fetch after login
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
    setFetch(false);  // Reset fetch state on logout
  };

  return (
    <AuthContext.Provider value={{ authenticateUser, userLogin, logout, setFetch, fetch }}>
      {children}
    </AuthContext.Provider>
  );
}
