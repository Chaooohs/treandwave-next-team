import { createSlice } from "@reduxjs/toolkit";
import imageOne from '/public/image/jpg/cat-one.jpg'

const initialState = {
  categories: [
    {
      id: 1,
      name: 'Костюми',
      image: imageOne,
    },
    {
      id: 2,
      name: 'Category',
      image: imageOne,
    },
    {
      id: 3,
      name: 'Category',
      image: imageOne,
    },
    {
      id: 4,
      name: 'Category',
      image: imageOne,
    },
    {
      id: 5,
      name: 'Category',
      image: imageOne,
    },
    {
      id: 6,
      name: 'Category',
      image: imageOne,
    },
    {
      id: 7,
      name: 'Category',
      image: imageOne,
    },
    {
      id: 8,
      name: 'Category',
      image: imageOne,
    },
  ],
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories = action.payload
    },
  },
})

export const { addCategory } = categoriesSlice.actions
export default categoriesSlice.reducer;