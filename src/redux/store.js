import { configureStore } from '@reduxjs/toolkit'

import goods from './features/goodsSlice'
import open from './features/openSlice'
import wishlist from './features/wishlistSlice'
import product from './features/productSlice'
import texture from './features/textureSlice'
import cart from './features/cartSlice'
import filters from './features/filtersSlice'
import order from './features/orderSlice'
import colorCard from './features/choiseCardColorSlice'
import { goodsApi } from './api/goodsApi'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [goodsApi.reducerPath]: goodsApi.reducer,
      goods,
      open,
      wishlist,
      product,
      texture,
      cart,
      filters,
      order,
      colorCard,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(goodsApi.middleware),
  })
  setupListeners(store.dispatch)
}