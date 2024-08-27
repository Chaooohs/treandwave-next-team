import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burgerOpen: false,
}

const openSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    openBurger: (state, action) => {
      state.burgerOpen = action.payload
    },
  },
})

export const { openBurger } = openSlice.actions
export default openSlice.reducer;