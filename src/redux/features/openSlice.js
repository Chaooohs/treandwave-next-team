import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burger: false,
  cart: false,
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
  },
})

export const { setOpenBurger, setOpenCart } = openSlice.actions
export default openSlice.reducer;