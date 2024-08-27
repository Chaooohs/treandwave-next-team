// 'use client'
// import { useDispatch } from "react-redux";
// import { useState } from "react";

import { Button, Title } from "@/components/ui";
import { CartEmpty, CartFull } from "@/components/shared";
// import Close from '../../../public/image/svg/close.svg'
// import CloseBig from '../../../public/image/svg/cart-big.svg'
// import Link from "next/link";


export default function ShoppingCart({ counter }) {
  // const dispatch = useDispatch()
  // const [close, setClose] = useState(false);

  return (
    <div className="pt-6 box-border">

      {/* <button
        className="w-[52px] h-[52px] block ml-auto flex items-center justify-center"
        onClick={() => setClose(true)}
      >
        <Close />
      </button> */}

      <Title text='Кошик' className='text-2xl uppercase font-semibold mt-6 px-6 box-border' />

      {
        counter > 0
          ?
          <CartFull />
          :
          <CartEmpty/>
      }
    </div>
  )
}