import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: "20",
  page: "1",
  search: '',
  category: '',
  subCategory: '',
  color: [],
  minPrice: 100,
  maxPrice: 10000,
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
      state.color = action.payload.color;
      if(action.payload.minPrice === undefined) {
        state.minPrice = 100;
      } else {
        state.minPrice = action.payload.minPrice;
      }
      if(action.payload.maxPrice === undefined) {
        state.maxPrice = 10000;
      } else {
        state.maxPrice = action.payload.maxPrice;
      }
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSubCategory: (state, action) => {
      state.subCategory = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const { setPage, setFilters, setSearch, setCategory, setSubCategory, setColor, setMinPrice, setMaxPrice } = filtersSlice.actions;
export default filtersSlice.reducer;
