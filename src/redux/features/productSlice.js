import { createSlice } from "@reduxjs/toolkit";
import imageOne from '/public/image/jpg/card-one.jpg'
import imageTwo from '/public/image/jpg/card-two.jpg'

const initialState = {
  product: 
    {
      id: 1,
      title: 'product-one',
      images: [imageOne, imageTwo],
      price: 1500,
      discoutn: 40,
      color: ['blue', 'red', 'green'],
      size: ['s', 'm', 'l', 'xl'],
    },
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
})

export const {} = productSlice.actions
export default productSlice.reducer;