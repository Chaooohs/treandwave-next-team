'use client'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";

import { CardForCart } from "@/components/shared";
import { Button } from "@/components/ui";
import { setTotalPrice } from "@/redux/features/cartSlice";

export const CartFull = () => {
  const dispatch = useDispatch()
  const { cart, totalPrice } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(setTotalPrice())
  }, [cart])

  return (
    <>
      <div className="flex flex-col overflow-y-auto h-[60vh]">
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
        <div className="mt-24 flex justify-between items-end">
          <span className="uppercase text-sm font-semibold">До сплати</span>
          <span className="uppercase text-base font-semibold">{totalPrice} uah</span>
        </div>
        <Button className='mt-8 w-full uppercase font-semibold text-base'>Оформити замовлення</Button>
        <Link href='/checkout'>
          <Button variant='outline' className='mt-3 w-full uppercase font-semibold text-base'>Оформити замовлення</Button>
        </Link>
      </div>
    </>
  )
}