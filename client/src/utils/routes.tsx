import { ProtectedRoute } from "@/layouts/ProtectedRoute";
import {
  AuthForm,
  Dashboard,
  Error,
  JobForm,
  Jobs,
  Landing,
  LandingPage,
  Profile,
} from "@/pages";
import { createBrowserRouter as cRouter } from "react-router-dom";

export const router = cRouter([
  {
    path: "/",
    Component: Landing,
    children: [
      { index: true, Component: LandingPage },
      { path: "/auth/login", element: <AuthForm authType="LOGIN" /> },
      { path: "/auth/register", element: <AuthForm authType="REGISTER" /> },
    ],
  },
  {
    path: "/app",
    Component: ProtectedRoute,
    children: [
      { index: true, Component: Dashboard },
      { path: "/app/jobs", Component: Jobs },
      { path: "/app/edit-job/:id", Component: JobForm },
      { path: "/app/create-job", Component: JobForm },
      { path: "/app/profile", Component: Profile },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
