import "@/index.css";
import { router } from "@/utils/routes";
import "normalize.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("html-wrapper")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
