import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUser: {
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPhone: '',
    userCity: '',
    userStreet: '',
  },
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setDataUserOrder: (state, action) => {
      state.dataUser.userFirstName = action.payload.isFirstName
      state.dataUser.userLastName = action.payload.isLastName
      state.dataUser.userEmail = action.payload.isEmail
      state.dataUser.userPhone = action.payload.isPhone
      state.dataUser.userCity = action.payload.selectedCity
    },
    setAddressUserOrder: (state, action) => {
      state.dataUser.userCity = action.payload.selectedCity
      state.dataUser.userStreet = action.payload.selectedStreet
    },
  },
})

export const { setDataUserOrder, setAddressUserOrder, } = orderSlice.actions
export default orderSlice.reducer;