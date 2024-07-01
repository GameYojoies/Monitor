/** @format */
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"
import Layout from "../layouts/layout"
import MonitorPage from "../pages/monitorPage"
import ReportPage from "../pages/report"
import NotificationPage from "../pages/notification"
import UserPage from "../pages/user"
import LoginPage from "../pages/loginPage"
import ProtectedRout from "../utils/protectedRout"

const router = createBrowserRouter(
  [
    {
      element: (
        <ProtectedRout>
          <Layout />
        </ProtectedRout>
      ),
      path: "/",
      children: [
        {
          path: "/",
          element: <Navigate to="/monitor" />,
        },
        {
          path: "/monitor",
          element: <MonitorPage />,
        },
        {
          path: "/report",
          element: <ReportPage />,
        },
        {
          path: "/notification",
          element: <NotificationPage />,
        },
        {
          path: "/user",
          element: <UserPage />,
        },
        {
          path: "*",
          element: <Navigate to="/login" />,
        },
      ],
    },

    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <Navigate to="/login" />,
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_URL || "/",
  }
)

export default function Router() {
  return <RouterProvider router={router} />
}
