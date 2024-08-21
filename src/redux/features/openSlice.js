import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burger: false,
}

const openSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    openBurger: (state, action) => {
      state.burger = action.payload
    },
  },
})

export const { openBurger } = openSlice.actions
export default openSlice.reducer;