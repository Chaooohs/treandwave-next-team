'use client'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { Button, Title } from "@/components/ui";
import { CardForCart } from "@/components/shared";
import Close from '../../../public/image/svg/close.svg'
import CloseBig from '../../../public/image/svg/cart-big.svg'
import Link from "next/link";


export default function ShoppingCart({ counter }) {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart);
  const [close, setClose] = useState(false);

  return (
    <div>

      {/* <button
        className="w-[52px] h-[52px] block ml-auto flex items-center justify-center"
        onClick={() => setClose(true)}
      >
        <Close />
      </button> */}

      <Title text='Кошик' className='text-2xl uppercase font-semibold mt-6' />

      {
        counter > 0
          ?
          Array.isArray(cart) &&
          cart.map((el) => {
            return (
              <div key={el.id} className="relative card-cart mt-8 mb-6">
                <CardForCart el={el} />
              </div>
            );
          })

          :
          <div className="flex flex-col items-center ">
            <CloseBig className='mt-10'/>
            <Title text='кошик пустий' size="xs" className='font-semibold uppercase mt-3' />
            <p className="font-medium text-center mt-1">У вашому кошику поки що немає товарів. Перегляньте наш каталог, щоб ознайомитися з усіма товарами та пропозиціями.</p>
            <Link href='/'>
              <Button variant='outline' className='mt-8 uppercase font-semibold text-sm'>Каталог</Button>
            </Link>
          </div>
      }



    </div>
  )
}