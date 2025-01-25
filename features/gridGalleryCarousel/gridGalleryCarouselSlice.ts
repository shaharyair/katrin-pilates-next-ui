import { createSlice } from "@reduxjs/toolkit";
import { Image } from "react-grid-gallery";

interface gridGalleryCarouselState {
  lightboxImage: null | Image;
}

const initialState: gridGalleryCarouselState = {
  lightboxImage: null,
};

export const gridGalleryCarouselSlice = createSlice({
  name: "gridGalleryCarousel",
  initialState,
  reducers: {
    setLightboxImage: (state, action) => {
      state.lightboxImage = action.payload;
    },
  },
});

export const { setLightboxImage } = gridGalleryCarouselSlice.actions;

export default gridGalleryCarouselSlice.reducer;
