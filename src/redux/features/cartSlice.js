import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  discount: 0, //  поле  скидки
  forPayValue: 0, // поле к оплате

}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartFromStorage: (state, action) => {
            state.cart = action.payload.cart;
            state.totalPrice = action.payload.totalPrice;
            state.discount = action.payload.discount;
            state.forPayValue = action.payload.forPayValue;
        },
    addToCart: (state, action) => {
      const found = state.cart.find(el => el.id === action.payload.id && el.color === action.payload.color && el.size === action.payload.size);
      if (!found) {
        state.cart.push(action.payload);
        localStorage.setItem('cart', JSON.stringify(state.cart)); //зберігаю в локал сторедж
      }
    },
    removeFromCart: (state, action) => {
      console.log('remove card')
      state.cart = state.cart.filter(el => el.id !== action.payload.id || el.color !== action.payload.color || el.size !== action.payload.size);
      // Пересчёты в корзине
      state.totalPrice = state.cart?.map(el => el.count * el.price)
      .reduce((sum, el) => sum + el, 0);
      // state.forPayValue = state.totalPrice - state.discount;

      localStorage.setItem('cart', JSON.stringify(state.cart)); //зберігаю в локал сторедж
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));

    },
    setIncrement: (state, action) => {
      state.cart.map((el) => {
        return el.id === action.payload
          ? {
            ...el,
            count: el.count++,
          }
          : el;
      });
      localStorage.setItem('cart', JSON.stringify(state.cart)); //зберігаю в локал сторедж
    },
    setDecrement: (state, action) => {
      state.cart.map((el) => {
        return el.id === action.payload
          ? {
            ...el,
            count: el.count > 1 ? el.count-- : 1,
          }
          : el;
      });
      localStorage.setItem('cart', JSON.stringify(state.cart)); //зберігаю в локал сторедж
    },
    setTotalPrice: (state) => {
      state.totalPrice = state.cart?.map(el => el.count * el.price)
        .reduce((sum, el) => sum + el, 0);
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice)); //зберігаю в локал сторедж
    },
    setDiscountValue: (state, action) => {
      state.discount = action.payload;  // для обновленія скидку
      localStorage.setItem('discount', JSON.stringify(state.discount)); // сохраняем скидку в localStorage
    },
    setForPayValue: (state, action) => {
      state.forPayValue = action.payload;  // для обновленія скидку
      localStorage.setItem('forPayValue', JSON.stringify(state.forPayValue)); // сохраняем скидку в localStorage
    },
    clearCart: (state) => {
      state.cart = initialState.cart;
      state.totalPrice = initialState.totalPrice;
      state.discount = initialState.discount;
      state.forPayValue = initialState.forPayValue;
      localStorage.removeItem('cart');
    }
  },
})

export const { addToCart, removeFromCart, setIncrement, setDecrement, setTotalPrice, setCartFromStorage, setDiscountValue, setForPayValue, clearCart } = cartSlice.actions
export default cartSlice.reducer;


