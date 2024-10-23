import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartFromStorage } from "./cartSlice";

const useCartFromStorage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Достала данные из localStorage на стороне клиента
    const cartFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPriceFromStorage = JSON.parse(localStorage.getItem('totalPrice')) || 0;
    const discountStorage = JSON.parse(localStorage.getItem('discount')) || 0;
    const forPayValueStorage = JSON.parse(localStorage.getItem('forPayValue')) || 0;

    // Обновляю состояние в Redux
    dispatch(setCartFromStorage({ cart: cartFromStorage, totalPrice: totalPriceFromStorage, discount: discountStorage, forPayValue: forPayValueStorage }));
  }, [dispatch]);
};

export default useCartFromStorage;