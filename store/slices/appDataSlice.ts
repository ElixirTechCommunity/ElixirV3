import { createSlice } from "@reduxjs/toolkit";

interface AppData {
  isMobile: boolean;
  // Add other server-side data here
}

const initialState: AppData = {
  isMobile: false,
};

const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    setAppData: (state, action) => {
      return { ...state, ...action.payload };
    },
    // Add other reducers for server-side data here
  },
});

export const { setAppData } = appDataSlice.actions;
export default appDataSlice.reducer;
