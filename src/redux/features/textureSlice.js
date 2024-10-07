import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: '',
  size: '',
}

const textureSlice = createSlice({
  name: "texture",
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.color = action.payload
    },

    addSize: (state, action) => {
      state.size = action.payload
    },
  },
})

export const { addColor, removeColor, addSize, removeSize, } = textureSlice.actions
export default textureSlice.reducer;