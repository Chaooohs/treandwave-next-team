import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
}

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const found = state.wishlist.find((el) => el.id === action.payload.id)
      if(!found) {
        state.wishlist.push(action.payload)
      } else if (found) {
        state.wishlist = state.wishlist.filter((el) => el.id !== action.payload.id)
      }
    },
  },
})

export const { addToWishList } = wishlistSlice.actions
export default wishlistSlice.reducer;