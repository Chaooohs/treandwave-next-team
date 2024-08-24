import { createSlice } from "@reduxjs/toolkit";
import imageOne from '/public/image/jpg/card-one.jpg'
import imageTwo from '/public/image/jpg/card-two.jpg'

const initialState = {
  goods: [
    {
      id: 1,
      title: 'product-one',
      imageOne: imageOne,
      imageTwo: imageTwo,
      price: 1500,
      discount: 40,
    },
    {
      id: 2,
      title: 'product-two',
      imageOne: imageOne,
      imageTwo: imageTwo,
      price: 1500,
      discount: 0,
    },
    {
      id: 3,
      title: 'product-three',
      imageOne: imageOne,
      imageTwo: imageTwo,
      price: 1500,
      discount: 40,
    },
    {
      id: 4,
      title: 'product-four',
      imageOne: imageOne,
      imageTwo: imageTwo,
      price: 1500,
      discount: 0,
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