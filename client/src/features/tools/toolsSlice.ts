import { createSlice } from "@reduxjs/toolkit";

export const toolSlice = createSlice({
  name: "tools",
  initialState: {
    isDarkTheme: true,
    isMobileMenuOpen: false,
    isFiltersOpen: false,
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
    openFilters: (state) => {
      state.isFiltersOpen = true;
    },
    closeFilters: (state) => {
      state.isFiltersOpen = false;
    },
  },
});

export const {
  toggleTheme,
  openMobileMenu,
  closeMobileMenu,
  openFilters,
  closeFilters,
} = toolSlice.actions;
export default toolSlice.reducer;
