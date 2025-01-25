import { createSlice } from "@reduxjs/toolkit";
import { Image } from "react-grid-gallery";

interface LightboxState {
  value: null | Image;
}

const initialState: LightboxState = {
  value: null,
};

export const lightboxSlice = createSlice({
  name: "lightbox",
  initialState,
  reducers: {
    setLightboxImage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLightboxImage } = lightboxSlice.actions;

export default lightboxSlice.reducer;
