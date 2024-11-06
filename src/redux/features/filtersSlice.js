import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: "20",
  page: "1",
  search: '',
  category: '',
  subCategory: '',
  bestseller: true,
  sale: true,
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
      state.category = action.payload.category;
      state.subCategory = action.payload.subCategory;
      state.bestseller = action.payload.bestseller;
      // state.search = action.payload.title;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSubCategory: (state, action) => {
      state.subCategory = action.payload;
    },
    setBestsellers: (state, action) => {
      state.bestseller = action.payload;
    },
  },
});

export const { setPage, setFilters, setSearch, setCategory, setSubCategory, setBestsellers } = filtersSlice.actions;
export default filtersSlice.reducer;
