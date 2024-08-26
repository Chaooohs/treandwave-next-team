import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action ) => {
      const found = state.cart.find(el => el.id === action.payload.id);
      if (!found) {
        state.cart.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(el => el.id !== action.payload)
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
  },
})

export const { addToCart, removeFromCart, setIncrement, setDecrement } = cartSlice.actions
export default cartSlice.reducer;