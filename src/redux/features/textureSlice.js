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
      state.color.push(action.payload)
    },
    removeColor: (state, action) => {
      state.color = state.color.filter(el => el !== action.payload)
    },

    addSize: (state, action) => {
      state.size.push(action.payload)
    },
    removeSize: (state, action) => {
      state.size = state.size.filter(el => el !== action.payload)
    }
  },
})

export const {addColor, removeColor, addSize, removeSize,} = textureSlice.actions
export default textureSlice.reducer;