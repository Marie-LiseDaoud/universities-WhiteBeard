import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const universitiesSlice = createSlice({
  name: "universities",
  initialState,
  reducers: {
    setFavorites(state, action) {
      state.favorites = action.payload;
    },
  },
});

export default universitiesSlice.reducer;
