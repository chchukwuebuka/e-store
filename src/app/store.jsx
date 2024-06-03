import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../assets/appSlice";
import { apiSlice } from "../assets/apiSlice";

const store = configureStore({
  reducer: {
    cart: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
