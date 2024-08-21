import { configureStore } from '@reduxjs/toolkit'

import goods from './features/goodsSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      goods,
    },
  })
}