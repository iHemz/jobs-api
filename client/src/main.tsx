import "@/index.css";
import { store } from "@/store/store";
import { router } from "@/utils/routes";
import { theme } from "@/utils/theme";
import "normalize.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" />
      </StoreProvider>
    </ThemeProvider>
  </StrictMode>
);
