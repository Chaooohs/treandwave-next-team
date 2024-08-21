import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goods: [
    {
      id: 1,
      title: 'Product name',
      imageOne: '../../../public/image/jgp/card-one.jpg',
      imageTwo: '../../../public/image/jgp/card-two.jpg',
      price: 1500,
      discoutn: 40,
    },
    {
      id: 2,
      title: 'Product name',
      imageOne: '../../../public/image/jgp/card-one.jpg',
      imageTwo: '../../../public/image/jgp/card-two.jpg',
      price: 1500,
      discoutn: 40,
      best: true,
    },
    {
      id: 3,
      title: 'Product name',
      imageOne: '../../../public/image/jgp/card-one.jpg',
      imageTwo: '../../../public/image/jgp/card-two.jpg',
      price: 1500,
      discoutn: 40,
    },
    {
      id: 4,
      title: 'Product name',
      imageOne: '../../../public/image/jgp/card-one.jpg',
      imageTwo: '../../../public/image/jgp/card-two.jpg',
      price: 1500,
      discoutn: 40,
      best: true,
    },
  ],
}

const goodsSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addGoods: (state, action) => {
      state.goods = action.payload
    },
  },
})

export const { addGoods } = goodsSlice.actions
export default goodsSlice.reducer;