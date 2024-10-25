import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
  color: '',
};

export const choiseCardColorSlice = createSlice({
  name: "colorCard",
  initialState,
  reducers: {
    setColorCardIndex: (state, action) => {
      state.index = action.payload;
    },
    setColorCardColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setColorCardIndex, setColorCardColor } = choiseCardColorSlice.actions;
export default choiseCardColorSlice.reducer;
