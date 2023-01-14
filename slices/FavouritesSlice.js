import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
  name: "FavouriteSlice",
  initialState: { ids: [] },
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export default FavouriteSlice.reducer;
export const { addFavourite, removeFavourite } = FavouriteSlice.actions;
