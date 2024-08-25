import { createSlice } from "@reduxjs/toolkit";
import imageOne from '/public/image/jpg/card-one.jpg'
import imageTwo from '/public/image/jpg/card-two.jpg'

const initialState = {
  goods: [
    {
      id: 1,
      title: 'product-one',
      images: [imageOne, imageTwo],
      price: 1500,
      discount: 40,
      colors: ['#336cff', '#e03348', '#4d4d4d'],
    },
    {
      id: 2,
      title: 'product-two',
      images: [imageOne, imageTwo],
      price: 1500,
      discount: 0,
      colors: ['#336cff', '#e03348',],
    },
    {
      id: 3,
      title: 'product-three',
      images: [imageOne, imageTwo],
      price: 1500,
      discount: 40,
      colors: ['#e03348', '#4d4d4d'],
    },
    {
      id: 4,
      title: 'product-four',
      images: [imageOne, imageTwo],
      price: 1500,
      discount: 0,
      best: true,
      colors: ['#4d4d4d'],
    },
  ],
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