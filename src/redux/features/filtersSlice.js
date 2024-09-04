import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: "10",
  skip: "0",
  search: '',
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSkip: (state, action) => {
      state.skip = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilters: (state, action) => {
      state.skip = action.payload.skip;
      // state.search = action.payload.q;
    },
  },
});

export const { setSkip, setFilters, setSearch, } = filtersSlice.actions;
export default filtersSlice.reducer;
