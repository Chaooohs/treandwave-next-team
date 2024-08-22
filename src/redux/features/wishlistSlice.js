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
      }
    },
  },
})

export const { addToWishList } = wishlistSlice.actions
export default wishlistSlice.reducer;