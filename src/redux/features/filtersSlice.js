import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: "10",
  skip: "0",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSkip: (state, action) => {
      state.skip = action.payload;
    },
    setFilters: (state, action) => {
      state.skip = action.payload.skip;
    },
  },
});

export const { setSkip, setFilters, } = filtersSlice.actions;
export default filtersSlice.reducer;
