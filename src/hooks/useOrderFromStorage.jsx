
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOrderFromStorage } from "@/redux/features/orderSlice";

const useOrderFromStorage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Достала данные из localStorage на стороне клиента
    const orderDataFromStorage = JSON.parse(localStorage.getItem('userOrderData')) || {
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
      orderNumber: '',
      orderTime: '',
    };
    
    // Обновляю состояние в Redux
    dispatch(setOrderFromStorage({ dataUser: orderDataFromStorage, }));
  }, [dispatch]);
};

export default useOrderFromStorage;