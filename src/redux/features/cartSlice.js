import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 color: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.color.push(action.payload)
    },
    removeColor: (state, action) => {
      state.color = state.color.filter(el => el !== action.payload)
    }
  },
})

export const {addColor, removeColor} = cartSlice.actions
export default cartSlice.reducer;