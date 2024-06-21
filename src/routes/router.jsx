/** @format */
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "../layouts/layout"
import MonitorPage from "../pages/monitorPage"
import ReportPage from "../pages/report"
import NotificationPage from "../pages/notification"
import UserPage from "../pages/user"

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
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
])

export default function Router() {
  return <RouterProvider router={router} />
}
