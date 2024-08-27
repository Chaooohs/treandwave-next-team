'use client'
import { useSelector } from "react-redux";
import Link from "next/link";

import { CardForCart } from "@/components/shared";
import { Button } from "../ui";

export const CartFull = () => {
  const cart = useSelector(state => state.cart.cart);

  return (
    <>
      {
        Array.isArray(cart) &&
        cart.map((el) => {
          return (
            <div className="px-6 box-border" key={el.id} >
              <div className="relative card-cart mt-8 mb-6 overflow-hidden ">
                <CardForCart el={el} />
              </div>
            </div>

          );
        }
        )
      }

      <div className="border-t border-[#212121] rounded px-6 pb-6 box-border mt-6">
        <div className="mt-24 flex justify-between items-end">
          <span className="uppercase text-sm font-semibold">До сплати</span>
          <span className="uppercase text-base font-semibold">uah</span>
        </div>
        <Button className='mt-8 w-full uppercase font-semibold text-base'>Оформити замовлення</Button>
        <Link href='#!'>
          <Button variant='outline' className='mt-3 w-full uppercase font-semibold text-base'>Оформити замовлення</Button>
        </Link>
      </div>
    </>
  )
}