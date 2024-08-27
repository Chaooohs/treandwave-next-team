import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: [],
  size: [],
}

const textureSlice = createSlice({
  name: "texture",
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.color[0] = action.payload
    },

    addSize: (state, action) => {
      state.size[0] = action.payload
    },
  },
})

export const { addColor, removeColor, addSize, removeSize, } = textureSlice.actions
export default textureSlice.reducer;