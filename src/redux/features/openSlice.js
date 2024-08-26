import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burgerOpen: false,
  cartOpen: false,
}

const openSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    openBurger: (state, action) => {
      state.burgerOpen = action.payload
    },
    openCart: (state, action) => {
      state.cartOpen = action.payload
    },
  },
})

export const { openBurger, openCart } = openSlice.actions
export default openSlice.reducer;