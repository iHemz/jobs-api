import { createSlice } from "@reduxjs/toolkit";

export const toolSlice = createSlice({
  name: "tools",
  initialState: {
    isDarkTheme: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = toolSlice.actions;
export default toolSlice.reducer;
