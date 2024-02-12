import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  themeName: localStorage.getItem("themeName")
    ? localStorage.getItem("themeName")
    : "light",
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.themeName = state.themeName === "dark" ? "light" : "dark";
      localStorage.setItem("themeName", state.themeName);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
