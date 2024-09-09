'use client'
import { useSelector } from "react-redux";
import Link from "next/link";

import { Button, Title } from "@/components/ui";
import { CardForCart } from "@/components/shared";
import VisaIcon from '/public/image/svg/visa-logo.svg'
import MasterIcon from '/public/image/svg/mastercard-logo.svg'
import AppleIcon from '/public/image/svg/applepay-logo.svg'


export default function ShoppingCart() {
  const goods = useSelector(state => state.goods.goods);
  const cart = useSelector(state => state.cart.cart);

  const counter = cart?.reduce((sum, el) => el.count + sum, 0);

  return (
    <main>
      <div className="wrap">
        <div className="content">
          <Title text='Кошик' size="xl" className='font-mul font-extrabold uppercase  mob:text-3xl' />
          <div className="text-lg font-medium uppercase lap:text-base	mob:mt-2">
            Усього (
            <span className="w-9 inline-block text-center">{counter}</span>
            товари )
          </div>
          <div className="product-layout mt-10 lap:mt-6">
            <main>
              {Array.isArray(goods) &&
                cart.map((el) => {
                  return (
                    <div key={el.id} className="relative card-cart mb-3 rounded">
                      <CardForCart el={el} />
                    </div>
                  );
                })}
            </main>
            <aside>
              <div className="border rounded border-[#EDEDED] p-6 flex flex-col gap-6 lap:mt-6">
                <h3 className="uppercase font-semibold text-2xl lap:text-lg">Ваше замовлення</h3>
                {/* <div className="flex justify-between items-center">
                  <span className="text-base">Товарів на суму</span>
                  <span className="text-lg font-medium uppercase"> uah</span>
                </div> */}
                <div className="flex justify-between items-center uppercase">
                  <span className="font-semibold text-base uppercase lap:text-base">До сплати</span>
                  <span className="text-2xl font-semibold uppercase lap:text-base"> uah</span>
                </div>
              </div>
              <Button
                className='font-semibold text-base uppercase h-14 w-full mt-10'
              >
                Оформити замовлення
              </Button>
              <div className="mt-16 text-lg font-semibold uppercase lap:mt-10">Потрібна допомога?</div>
              <div className="mt-3 flex flex-col text-base font-medium gap-y-2 underline">
                <Link href='/about/payment-and-delivery' className="hover:text-[#6a6a6a] duration-300">Оплата і доставка</Link>
                <Link href='/about/exchange-and-return' className="hover:text-[#6a6a6a] duration-300">Обмін та повернення</Link>
                <Link href='/about/contacts' className="hover:text-[#6a6a6a] duration-300">Контакти</Link>
              </div>
              <div className="mt-10 text-lg font-semibold uppercase">Методи оплати</div>
              <div className="flex gap-x-6 items-center mt-6 lap:mb-10">
                <VisaIcon/>
                <MasterIcon/>
                <AppleIcon/>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}