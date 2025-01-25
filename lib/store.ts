import { configureStore } from "@reduxjs/toolkit";

import gridGalleryCarouselReducer from "./features/gridGalleryCarousel/gridGalleryCarouselSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      gridGalleryCarousel: gridGalleryCarouselReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
