import "@/index.css";
import { store } from "@/store/store";
import { muiTheme } from "@/utils/muiTheme";
import { router } from "@/utils/routes";
import { theme } from "@/utils/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import "normalize.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <StoreProvider store={store}>
          <RouterProvider router={router} />
          <ToastContainer position="top-right" />
        </StoreProvider>
      </MuiThemeProvider>
    </StyledThemeProvider>
  </StrictMode>
);
