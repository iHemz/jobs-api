import { Landing, LandingPage } from "@/pages/landing";
import { createBrowserRouter as cRouter } from "react-router";

export const router = cRouter([
  {
    path: "/",
    Component: Landing,
    children: [{ index: true, Component: LandingPage }],
  },
]);
