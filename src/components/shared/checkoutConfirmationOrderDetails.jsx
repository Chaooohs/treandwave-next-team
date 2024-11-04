'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ClockIcon from '/public/image/svg/clock.svg';
import { Button } from '../ui';
import ShoppingBagIcon from '/public/image/svg/shopping-bag.svg';
import DeliveryIcon from '/public/image/svg/deliveryBuscet.svg';
import CheckMark from '/public/image/svg/checkMark.svg';
import Link from 'next/link';


export default function CheckoutConfirmationOrderDetails({orderNumber, orderTime, deliveryType, userDevision, userPostomat, userStreet,userHouse, userAppartment, userCity, userFirstName, userLastName, userEmail, userPhone, paymentType }) {
    const [comlettedSteps, setComlettedSteps] = useState([0]);
    const [orderConfirmedData, setOrderConfirmedData] = useState({});
    const [deliveryData, setDeliveryData] = useState(null);
    const dataUser = useSelector(state => state.order.dataUser)

    
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
      
        return (`${day}.${month}.${year}`);
      }

    const generateDeliveryTime = () => {
        const today = new Date();
        const deliveryStart = new Date(today); 
        const deliveryEnd = new Date(today);
        
        deliveryEnd.setDate(today.getDate() + 2); 
      
        return `${formatDate(deliveryStart)}-${formatDate(deliveryEnd)}`;
      }
      const deliveryTime = generateDeliveryTime();

    const mainDetails = [
        { title: 'Номер замовлення:', detail: orderNumber },
        { title: 'Час оформлення замовлення:', detail: orderTime},
        { title: 'Очікуваний час доставки:', detail: deliveryTime}
    ];

    const buttons = [
        { icon: <ClockIcon/>, text:'оформлення', strokeWidth:2 },
        { icon:<ShoppingBagIcon/>, text:'Пакування', strokeWidth:0 },
        { icon:<DeliveryIcon/>, text:'Відправлено', strokeWidth:0 },
        { icon: <CheckMark/>, text:'Доставлено' }
    ]
    return(
        <div className="w-full border-[1px] border-[#212121] rounded-[4px] mob:p-4 lap:p-4 p-8 flex flex-col mob:gap-6 gap-8 text-[#121212] text-sm font-normal">
            <div className='flex flex-col gap-3'>
                {mainDetails.map((item, index) => (
                    <div key={index} className="flex mob:flex-col gap-1">
                        <p>{item.title}</p>
                        <p className="uppercase font-semibold text-[#212121]">{item.detail}</p>
                    </div>
                ))}
            </div>
            <div className='flex mob:flex-col mob:gap-6 lap:gap-6 gap-20'>
                {buttons.map((buttonItem, index) => (
                    <div key={index}>
                        <Button variant="checkoutOrderButton" size="lg" className={`h-full min-w-[166px] py-2 mob:text-xs gap-1 cursor-default ${comlettedSteps.includes(index) ? 'text-[#0047FF] stroke-[#0047FF] bg-[#E2ECFF]' : 'text-[#999999]'}`}>
                            <div style={{ strokeWidth:buttonItem.strokeWidth, width: '20px'}}>{buttonItem.icon}</div>
                            {buttonItem.text}
                        </Button>
                    </div>
                ))}
            </div>
            
  {/* information about delivery and user */}
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-4 lap:grid-cols-2 mob:grid-cols-1 gap-3">
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

        </div>
    )
}