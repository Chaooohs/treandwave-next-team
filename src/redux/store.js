import { configureStore } from '@reduxjs/toolkit'

import goods from './features/goodsSlice'
import categories from './features/categoriesSlice'
import open from './features/openSlice'
import wishlist from './features/wishlistSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      goods,
      categories,
      open,
      wishlist,
    },
  })
}