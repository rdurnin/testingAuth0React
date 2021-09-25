import { createSlice } from '@reduxjs/toolkit';

export const initialState = false;

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      return !state;
    },
  },
});

const darkModeReducer = darkModeSlice.reducer;

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeReducer;
