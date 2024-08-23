import { createSlice } from "@reduxjs/toolkit";
import imageOne from '/public/image/jpg/card-one.jpg'
import imageTwo from '/public/image/jpg/card-two.jpg'

const initialState = {
  goods: [
    {
      id: 1,
      title: 'Product name',
      imageOne: imageOne,
      imageTwo: imageTwo,
      price: 1500,
      discoutn: 40,
    },
    {
      id: 2,
      title: 'Product name',
      imageOne: imageOne,
      imageTwo: imageTwo,
      price: 1500,
      discoutn: 0,
    },
    {
      id: 3,
      title: 'Product name',
      imageOne: imageOne,
      imageTwo: imageTwo,
      price: 1500,
      discoutn: 40,
    },
    {
      id: 4,
      title: 'Product name',
      imageOne: imageOne,
      imageTwo: imageTwo,
      price: 1500,
      discoutn: 0,
      best: true,
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