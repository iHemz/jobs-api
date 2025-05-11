import { createSlice } from "@reduxjs/toolkit";

export const toolSlice = createSlice({
  name: "tools",
  initialState: {
    isDarkTheme: true,
    isMobileMenuOpen: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
    openMobileMenu: (state) => {
      state.isMobileMenuOpen = true;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
  },
});

export const { toggleTheme, openMobileMenu, closeMobileMenu } =
  toolSlice.actions;
export default toolSlice.reducer;
