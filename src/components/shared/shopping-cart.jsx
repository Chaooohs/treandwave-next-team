'use client'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { Title } from "@/components/ui";
import { CardForCart } from "@/components/shared";
import Close from '../../../public/image/svg/close.svg'
import { openCart } from "@/redux/features/openSlice";


export default function ShoppingCart() {
  const ref = useRef()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart);
  const [close, setClose] = useState(false);

  useEffect(() => {
    if (cart) {
      setTimeout(() => {
        ref.current.classList.add(`open-cart`);
      }, 50);
    }
  }, [cart]);

  useEffect(() => {
    if (close) {
      ref.current.classList.remove(`open-cart`);
      setTimeout(() => {
        dispatch(openCart(false));
      }, 350);
    }
  }, [close])

  return (
    <div className="cart" ref={ref}>

      <button
        className="w-[52px] h-[52px] block ml-auto flex items-center justify-center"
        onClick={() => setClose(true)}
      >
        <Close />
      </button>

      <Title text='Кошик' className='text-2xl uppercase font-semibold mt-6' />

      {Array.isArray(cart) &&
        cart.map((el) => {
          return (
            <div key={el.id} className="relative card-cart mt-8 mb-6">
              <CardForCart el={el} />
            </div>
          );
        })}

    </div>
  )
}