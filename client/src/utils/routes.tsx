import { Landing, LandingPage } from "@/pages/landing";
import { createBrowserRouter as cRouter } from "react-router";

export const router = cRouter([
  {
    path: "/",
    element: <Landing />,
    children: [{ index: true, Component: LandingPage }],
  },
]);
