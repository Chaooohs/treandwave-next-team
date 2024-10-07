import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const found = state.cart.find(el => el.id === action.payload.id && el.color === action.payload.color && el.size === action.payload.size);
      if (!found) {
        state.cart.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(el => el.id !== action.payload.id || el.color !== action.payload.color || el.size !== action.payload.size)
    },
    setIncrement: (state, action) => {
      state.cart.map((el) => {
        return el.id === action.payload
          ? {
            ...el,
            count: el.count++,
          }
          : el;
      });
    },
    setDecrement: (state, action) => {
      state.cart.map((el) => {
        return el.id === action.payload
          ? {
            ...el,
            count: el.count > 1 ? el.count-- : 1,
          }
          : el;
      });
    },
    setTotalPrice: (state) => {
      state.totalPrice = state.cart?.map(el => el.count * el.price)
        .reduce((sum, el) => sum + el, 0)
    },
  },
})

export const { addToCart, removeFromCart, setIncrement, setDecrement, setTotalPrice, } = cartSlice.actions
export default cartSlice.reducer;