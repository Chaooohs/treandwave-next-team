'use client'
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckoutCard from "../ui/checkoutCard";
import { useState, useEffect } from "react";
import { SquarePen } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import ClockIcon from '/public/image/svg/clock.svg';
import useOrderFromStorage from "@/redux/features/useOrderFromStorage";

export default function CheckoutStatus() {
  useOrderFromStorage();
  const goods = useSelector(state => state.goods.goods);
  const { cart, totalPrice } = useSelector(state => state.cart);
  const [storedClientData, setStoredClientData] = useState(null);
  const [storedDeliveryData, setStoredDeliveryData] = useState(null);
  const pathname = usePathname();

  const dataUser = useSelector(state => state.order.dataUser);


  return (
    <div className="border-[1px] font-medium text-base text-[#121212] border-[#EDEDED] p-6 flex flex-col gap-6 rounded">
      <h3 className="uppercase font-semibold mob:text-lg lap:text-lg text-2xl">Статус оформлення</h3>
      <div className="bg-[#E2ECFF] text-[#0047FF] uppercase text-sm rounded-[3px] p-2 px-[14px] w-fit flex gap-2">
        <ClockIcon  style={{stroke:"#0047FF", strokeWidth:"2"}}/>
        оформлення
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full overflow-y-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Усі товари</AccordionTrigger>
            <div>

              {Array.isArray(goods) &&
                cart[0] && (
                  <div className="w-full rounded">
                    <CheckoutCard el={cart[0]} />
                  </div>
                )
              }
            </div>
            <AccordionContent>
              {Array.isArray(goods) &&
                cart.slice(1).map((el) => {
                  return (
                    <div key={el.id} className="w-full rounded">
                      <CheckoutCard el={el} />
                    </div>
                  );
                })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {pathname === '/checkout/payment' &&

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <h4 className="uppercase font-semibold mob:text-base lap:text-base  text-lg">Адреса доставки</h4>
                <Link href={'/checkout/delivery'}> <SquarePen /></Link>
              </div>
              {dataUser &&
                <div className="normal-case flex flex-col gap-2">
                  <p className="grid grid-cols-2">
                    <span>Мiсто:</span>
                    <span className="font-semibold">{dataUser.userCity}</span>
                  </p>
                  <p className="grid grid-cols-2">
                    <span>Відділення:</span>
                    <span className="font-semibold">{dataUser.userDevision}</span>
                  </p>
                  {dataUser.userPostomat && 
                        <p className="grid grid-cols-2">
                            <span>Поштомат:</span>
                            <span className="font-semibold">{dataUser.userPostomat}</span>
                        </p>
                  }
                 {dataUser.userStreet && 
                    <p className="grid grid-cols-2">
                        <span>Вулиця:</span>
                        <span className="font-semibold">{dataUser.userStreet}</span>
                    </p>
                 }
                 {dataUser.userHouse && 
                    <p className="grid grid-cols-2">
                        <span>Будинок:</span>
                        <span className="font-semibold">{dataUser.userHouse}</span>
                    </p>
                 }
                 {dataUser.userAppartment && 
                    <p className="grid grid-cols-2">
                        <span>Квартира:</span>
                        <span className="font-semibold">{dataUser.userAppartment}</span>
                    </p>
                 }
                 {dataUser.deliveryHours && 
                    <p className="grid grid-cols-2">
                        <span>Час доставки:</span>
                        <span className="font-semibold">{dataUser.deliveryHours}</span>
                    </p>
                 }
                </div>
              }
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <h4 className="uppercase font-semibold mob:text-base lap:text-base text-lg">Дані отримувача</h4>
                <Link href={'/checkout/delivery'}> <SquarePen /></Link>
              </div>
              {/* {storedClientData && */}
              <div className="normal-case flex flex-col gap-1">
                <div className="flex gap-1">
                  {/* <p>{storedClientData.firstName}</p> */}
                  {/* <p>{storedClientData.lastName}</p> */}
                </div>
                <p className="grid grid-cols-2">
                  <span>Iм&apos;я:</span>
                  <span className="font-semibold">{dataUser.userFirstName}</span>
                  {/* {`Iм'я: ${dataUser.userFirstName}`} */}
                </p>
                <p className="grid grid-cols-2">
                  <span>Фамiлiя:</span>
                  <span className="font-semibold">{dataUser.userLastName}</span>
                  {/* {`Фамiлiя: ${dataUser.userLastName}`} */}
                </p>
                <p className="grid grid-cols-2">
                  <span>Email:</span>
                  <span className="font-semibold">{dataUser.userEmail}</span>
                  {/* {`Email: ${dataUser.userEmail}`} */}
                </p>
                <p className="grid grid-cols-2">
                  <span>Тел:</span>
                  <span className="font-semibold">{dataUser.userPhone}</span>
                  {/* {`Тел: ${dataUser.userPhone}`} */}
                </p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}