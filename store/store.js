import { configureStore } from "@reduxjs/toolkit";
import FavouritesSlice from "../slices/FavouritesSlice";

export const store = configureStore({
  reducer: {
    favourite: FavouritesSlice, //favourite reducer
  },
});
