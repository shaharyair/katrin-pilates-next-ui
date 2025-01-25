import { configureStore } from "@reduxjs/toolkit";

import lightboxReducer from "../features/lightbox/lightboxSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      lightbox: lightboxReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
