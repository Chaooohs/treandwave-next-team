import { createSlice } from "@reduxjs/toolkit";
import { actionAsyncStorage } from "next/dist/client/components/action-async-storage-instance";
import { act } from "react";

const initialState = {
  dataUser: {
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPhone: '',
    userCity: '',
    userStreet: '',
    userDevision: '',
    userPostomat: '',
    userHouse: '',
    userAppartment: '',
    deliveryHours: '',
    deliveryType: '',
    deliveryTime: '',
    paymentType: '',
  },
  orderReference: {
    orderNumber: '',
    orderTime: '',
  }
}

const saveToLocalStorage = (state) => {
  localStorage.setItem('userOrderData', JSON.stringify(state.dataUser));
  localStorage.setItem('orderReference', JSON.stringify(state.orderReference))
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderFromStorage: (state, action) => {
      const userData = action.payload.dataUser;
      state.dataUser.userFirstName = userData.userFirstName;
      state.dataUser.userLastName = userData.userLastName;
      state.dataUser.userEmail = userData.userEmail;
      state.dataUser.userPhone = userData.userPhone;
      state.dataUser.userCity = userData.userCity;
      state.dataUser.userStreet = userData.userStreet;
      state.dataUser.userDevision = userData.userDevision;
      state.dataUser.userPostomat = userData.userPostomat;
      state.dataUser.deliveryHours = userData.deliveryHours;
      state.dataUser.deliveryType = userData.deliveryType;
      state.dataUser.deliveryTime = userData.deliveryTime;
      state.dataUser.paymentType = userData.paymentType;
      state.dataUser.orderNumber = userData.orderNumber;
      state.dataUser.orderTime = userData.orderTime;

    },
    setDataUserOrder: (state, action) => {
      state.dataUser.userFirstName = action.payload.isFirstName
      state.dataUser.userLastName = action.payload.isLastName
      state.dataUser.userEmail = action.payload.isEmail
      state.dataUser.userPhone = action.payload.isPhone
      state.dataUser.userCity = action.payload.selectedCity
      saveToLocalStorage(state);
    },
    setAddressUserOrder: (state, action) => {
      state.dataUser.userCity = action.payload.selectedCity
      state.dataUser.userStreet = action.payload.selectedStreet
      state.dataUser.userHouse = action.payload.selectedHouse
      state.dataUser.userDevision = action.payload.selectedDivision
      state.dataUser.userPostomat = action.payload.selectedPostomat
      state.dataUser.userAppartment = action.payload.selectedAppartment
      state.dataUser.deliveryHours = action.payload.selectedHour
      saveToLocalStorage(state);
    },
    setDeliveryUserOrder: (state, action) => {
      state.dataUser.deliveryType = action.payload.selectedDeliveryType
      state.dataUser.deliveryTime = action.payload.selectedDeliveryTime
      saveToLocalStorage(state);
    },
    setPaymentUserOrder: (state, action) => {
      state.dataUser.paymentType = action.payload.selectedPaymentType
      state.orderReference.orderNumber = action.payload.selectedOrderNumber
      state.orderReference.orderTime = action.payload.selectedOrderTime
      saveToLocalStorage(state);
    },
    clearOrderDetails: (state) => {
      state.dataUser = initialState.dataUser;
      localStorage.removeItem('userOrderData');
    }
  },
})

export const { setDataUserOrder, setAddressUserOrder, setPaymentUserOrder, setDeliveryUserOrder, setOrderFromStorage, clearOrderDetails } = orderSlice.actions
export default orderSlice.reducer;