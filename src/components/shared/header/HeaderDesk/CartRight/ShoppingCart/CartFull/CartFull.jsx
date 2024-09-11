'use client'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";

import { CardForCart } from "@/components/shared";
import { Button } from "@/components/ui";
import { setTotalPrice } from "@/redux/features/cartSlice";


export const CartFull = ({ setIsOpen }) => {
  const dispatch = useDispatch()
  const { cart, totalPrice } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(setTotalPrice())
  }, [cart])

  return (
    <>
      <div className="flex flex-col overflow-y-auto">
        {
          Array.isArray(cart) &&
          cart.map((el) => {
            return (
              <div className="px-6 box-border" key={el.id} >
                <div className="relative card-cart mb-3 overflow-hidden ">
                  <CardForCart el={el} />
                </div>
              </div>
            );
          }
          )
        }
      </div>

      <div className="border-t border-[#212121] rounded px-6 pb-6 box-border mt-6">
        <div className="mt-6 flex justify-between items-end">
          <span className="uppercase text-sm font-semibold">До сплати</span>
          <span className="uppercase text-base font-semibold">{totalPrice} uah</span>
        </div>
        <Link href='/checkout/delivery' onClick={() => setIsOpen(true)}>
          <Button className='h-12 mt-8 w-full uppercase font-semibold text-base'>Оформити замовлення</Button>
        </Link>
        <Link href='/checkout' onClick={() => setIsOpen(true)}>
          <Button variant='outline' className='h-12 mt-3 w-full uppercase font-semibold text-base'>дивитися кошик</Button>
        </Link>
      </div>
    </>
  )
}