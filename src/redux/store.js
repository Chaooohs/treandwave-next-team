import { configureStore } from '@reduxjs/toolkit'

import goods from './features/goodsSlice'
import categories from './features/categoriesSlice'
import open from './features/openSlice'
import wishlist from './features/wishlistSlice'
import product from './features/productSlice'
import cart from './features/cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      goods,
      categories,
      open,
      wishlist,
      product,
      cart,
    },
  })
}