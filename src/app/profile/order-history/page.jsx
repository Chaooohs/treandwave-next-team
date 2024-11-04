'use client'
import { useState, useEffect } from "react";
import CheckoutConfirmationOrderItemsList from "@/components/shared/checkautConfirmationOrderItemsList";
import CheckoutConfirmationOrderDetails from "@/components/shared/checkoutConfirmationOrderDetails";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Button } from "@/components/ui";
  import ClockIcon from '/public/image/svg/clock.svg';
  import CheckoutConfirmationCard from "@/components/shared/checkoutConfirmationCard";

export default function Page() {
    const [comlettedSteps, setComlettedSteps] = useState([0]);

    const orderReference = {
        orderNumber: "order_1730385255701",
        orderTime: "31.10.2024, 16:34:14"
    }


    const orderConfirmedData = {
            cart: [
                {
                    "id": 1,
                    "title": "бавовняна футболка calvin klein jeans",
                    "images": "https://img2.ans-media.com/i/1256x1884/AW24-TSD16E-01X_F1.webp?v=1724406282",
                    "price": 1589,
                    "color": "beige",
                    "size": "xs",
                    "count": 1
                },
                {
                    "id": 1,
                    "title": "сукня guess",
                    "images": "https://img2.ans-media.com/i/540x813/AW22-SUD0Z8-33A_F2.webp?v=1725456621",
                    "price": 7289,
                    "color": "red",
                    "size": "s",
                    "count": 1
                }
            ],
            dataUser: {
                "userFirstName": "Анастасія",
                "userLastName": "Коп",
                "userEmail": "kop27@gmail.com",
                "userPhone": "+38(063)444-44-44",
                "userCity": "Миколаїв",
                "userDevision": "Відділення №44 (до 30 кг на одне місце): вул. Соборна (Радянська), 4а",
                "deliveryType": "НОВА ПОШТА - ВІДДІЛЕННЯ",
                "deliveryTime": "31.10.2024-02.11.2024",
                "paymentType": "Оплата при отриманні",
                "orderNumber": "",
                "orderTime": ""
            },
            totalPrice: 8878,
            discount: 20,
            forPayValue: 7102.4,
            confirmedAt: "31.10.2024, 16:34:15"
        }

    // const discountValue = Math.round((totalPrice * discount / 100)*100)/100;
    
    

    const OrdersQuantity = 1;
    const orderNumber = orderReference?.orderNumber || '';
    const orderTime = orderReference?.orderTime || '';
    const deliveryTime = orderConfirmedData?.dataUser?.deliveryTime || '';
    const deliveryType = orderConfirmedData?.dataUser?.deliveryType || '';
    const userDevision = orderConfirmedData?.dataUser?.userDevision || '';
    const userPostomat = orderConfirmedData?.dataUser?.userPostomat || '';
    const userStreet = orderConfirmedData?.dataUser?.userStreet || '';
    const userHouse = orderConfirmedData?.dataUser?.userHouse || '';
    const userAppartment = orderConfirmedData?.dataUser?.userAppartment || '';
    const userCity = orderConfirmedData?.dataUser?.userCity || '';
    const userFirstName = orderConfirmedData?.dataUser?.userFirstName || '';
    const userLastName = orderConfirmedData?.dataUser?.userLastName || '';
    const userEmail = orderConfirmedData?.dataUser?.userEmail || '';
    const userPhone = orderConfirmedData?.dataUser?.userPhone || '';
    const paymentType = orderConfirmedData?.dataUser?.paymentType || '';
    const totalPrice = orderConfirmedData?.totalPrice || 0;
    const discount = orderConfirmedData?.discount || 0;
    const forPayValue = orderConfirmedData?.forPayValue || 0;
    const cart = orderConfirmedData?.cart || {};

    const discountValue = Math.round((totalPrice * discount / 100)*100)/100;
    const paymentText = paymentType === 'Оплата при отриманні' ? 'Оплата при отриманні' : 'Оплачено';
    
    const orderInformation = [
        {
            description: 'Товарів на суму',
            amount: `${totalPrice} uah`,
        },
        {
            description: 'Промокод',
            amount: `-${discountValue} uah`,
        },
    ];
    

    return(
        <div className="border-[1px] border-[#212121] rounded-[4px] p-6 mob:p-4">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <div className="w-full flex mob:flex-col justify-start items-center mob:items-start gap-9 mob:gap-3 pb-2">
                            <div className="flex flex-col justify-start items-start"> 
                                <p className="text-base font-semibold"> №{orderNumber}</p>
                                <p className="text-sm font-medium"> {orderTime} </p>
                            </div>
                            <p className="text-base font-semibold uppercase"> {forPayValue} UAH </p>
                            <div className="flex gap-1 p-2 px-3 ml-10 mob:ml-0 text-[#0047FF] stroke-[#0047FF] bg-[#E2ECFF]  rounded-[4px] font-mont font-semibold text-sm">
                                <ClockIcon/>
                                оформлення
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='flex flex-col gap-6'>
                        <div className="flex flex-col gap-3 border-t-[1px] border-[#EDEDED] pt-6">
                            {cart.map((el, index) => (
                                <div key={index} className="mob:border-[1px] border-[#4D4D4D] rounded-[4px] mob:p-4">
                                    <CheckoutConfirmationCard el={el} />
                                </div>
                            ))}
                        </div>


{/* information about delivery and user */}
                        <div className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 gap-3">
                                <div>
                                    <div className="flex justify-between">
                                        <h4 className="uppercase font-semibold mob:text-base lap:text-base  text-lg">Адреса доставки</h4>
                                    </div>
                                    <div className="normal-case flex flex-col  mob:gap-[2px]">
                                        <p>{deliveryType}</p>
                                        <p>{userDevision}</p>
                                        <p>{userPostomat}</p>
                                        {userStreet && 
                                            <p>вул.{userStreet}, будинок:{userHouse},
                                            {userAppartment && 
                                                <span>кв.{userAppartment}</span> 
                                            }</p>
                                        }
                                        <p>{userCity}</p>
                                    </div>                          
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <h4 className="uppercase font-semibold mob:text-base lap:text-base  text-lg">Дані отримувача</h4>
                                    </div>
                                    <div className="normal-case flex flex-col mob:gap-[2px]">
                                        <p>{userFirstName} {userLastName}</p>
                                        <p>{userEmail}</p>
                                        <p>{userPhone }</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <h4 className="uppercase font-semibold mob:text-base lap:text-base  text-lg">Умови доставки</h4>
                                    </div>
                                    <div className="normal-case flex flex-col mob:gap-[2px]">
                                        <p>{deliveryTime} </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <h4 className="uppercase font-semibold mob:text-base lap:text-base  text-lg">Оплата</h4>
                                    </div>
                                    <div className="normal-case flex flex-col mob:gap-[2px]">
                                        <p>{paymentType} </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-[1px]  border-[#EDEDED] p-6 flex flex-col gap-6 text-sm">
                            <div className="flex flex-col gap-3">
                                {orderInformation.map((item, index) => (
                                    <div key={index} className="w-full flex justify-between font-normal">
                                        <p>{item.description}</p>
                                        
                                        <p className={`uppercase ${item.description === 'Промокод' ? 'text-[#D8001A]' : ''}`}>{item.amount}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="uppercase  font-semibold w-full flex justify-between items-center">
                                <p className="">{paymentText}</p>
                                
                                <p className="uppercase whitespace-nowrap">{forPayValue} Uah</p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            
        </div>
    )
}