import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: "20",
  page: "1",
  search: '',
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilters: (state, action) => {
      state.page = action.payload.page;
      // state.search = action.payload.q;
    },
  },
});

export const { setPage, setFilters, setSearch, } = filtersSlice.actions;
export default filtersSlice.reducer;
