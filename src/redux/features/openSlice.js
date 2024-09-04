import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burger: false,
}

const openSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    setOpenBurger: (state, action) => {
      state.burger = action.payload
    },
  },
})

export const { setOpenBurger } = openSlice.actions
export default openSlice.reducer;