import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const universitiesSlice = createSlice({
  name: "universities",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const item = action.payload;
      const exists = state.favorites.some(
        (fav) => fav.name === item.name && fav.country === item.country
      );
      if (exists) {
        state.favorites = state.favorites.filter(
          (fav) => !(fav.name === item.name && fav.country === item.country)
        );
      } else {
        state.favorites.push(item);
      }
    },
  },
});

export const { toggleFavorite } = universitiesSlice.actions;

export default universitiesSlice.reducer;
