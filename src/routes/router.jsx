/** @format */
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"
import Layout from "../layouts/layout"
import MonitorPage from "../pages/monitorPage"
import ReportPage from "../pages/report"
import NotificationPage from "../pages/notification"
import UserPage from "../pages/user"
import LoginPage from "../pages/loginPage"

const router = createBrowserRouter([
  {
    element: <Layout />,
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
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
