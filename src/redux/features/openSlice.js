import { createSlice } from "@reduxjs/toolkit";
import { setFilters } from "./filtersSlice";

const initialState = {
  burger: false,
  cart: false,
  filters: false,
}

const openSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    setOpenBurger: (state, action) => {
      state.burger = action.payload
    },
    setOpenCart: (state, action) => {
      state.cart = action.payload
    },
    setOpenFilters: (state, action) => {
      state.filters = action.payload
    },
  },
})

export const { setOpenBurger, setOpenCart, setOpenFilters } = openSlice.actions
export default openSlice.reducer;