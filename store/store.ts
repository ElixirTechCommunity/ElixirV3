import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slices/eventSlice";
import appDataReducer from "./slices/appDataSlice";

export const createStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      event: eventReducer,
      appData: appDataReducer,
    },
    preloadedState,
  });
};

const appStore = createStore();

export default appStore;
