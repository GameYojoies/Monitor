/** @format */
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "../layouts/layout";
import MonitorPage from "../pages/monitorPage";
import ReportPage from "../pages/report";
import NotificationPage from "../pages/notification";
import UserPage from "../pages/user";
import LoginPage from "../pages/loginPage";
import ProtectedRout from "../utils/protectedRout";

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

        element: (
          <ProtectedRout>
            <MonitorPage />
          </ProtectedRout>
        ),
      },
      {
        path: "/report",
        element: (
          <ProtectedRout>
            <ReportPage />
          </ProtectedRout>
        ),
      },
      {
        path: "/notification",
        element: (
          <ProtectedRout>
            <NotificationPage />
          </ProtectedRout>
        ),
      },
      {
        path: "/user",
        element: (
          <ProtectedRout>
            <UserPage />
          </ProtectedRout>
        ),
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
