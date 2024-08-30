import { createSlice } from "@reduxjs/toolkit";
import imageOne from '/public/image/jpg/card-one.jpg'
import imageTwo from '/public/image/jpg/card-two.jpg'

const initialState = {
  goods: [],
}

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    addGoods: (state, action) => {
      state.goods = action.payload
    },
  },
})

export const { addGoods } = goodsSlice.actions
export default goodsSlice.reducer;