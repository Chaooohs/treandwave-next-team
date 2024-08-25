import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cart: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.cart = state.color.filter(el => el !== action.payload)
    },
  },
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer;