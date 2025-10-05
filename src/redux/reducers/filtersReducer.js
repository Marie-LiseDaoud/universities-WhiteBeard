import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountry: null,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setSelectedCountry } = filtersSlice.actions;
export default filtersSlice.reducer;
