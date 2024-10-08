'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ClockIcon from '/public/image/svg/clock.svg';
import { Button } from '../ui';
import ShoppingBagIcon from '/public/image/svg/shopping-bag.svg';
import DeliveryIcon from '/public/image/svg/deliveryBuscet.svg';
import CheckMark from '/public/image/svg/checkMark.svg';
import Link from 'next/link';


export default function CheckoutOrderDetails({orderNumber, orderTime, deliveryTime}) {
    const [comlettedSteps, setComlettedSteps] = useState([0]);
    const [clientData, setClientData] = useState({});
    const [deliveryData, setDeliveryData] = useState({});
    const dataUser = useSelector(state => state.order.dataUser)


    useEffect(() => {
        const storedClientData = localStorage.getItem('clientData');
        if (storedClientData) {
            setClientData(JSON.parse(storedClientData))
        };
        const storedDeliveryData = localStorage.getItem('deliveryData');
        if (storedDeliveryData) {
            setDeliveryData(JSON.parse(storedDeliveryData))
        };
    }, [])
   
    console.log(dataUser);
    // console.log(deliveryData);

    const mainDetails = [
        { title: 'Номер замовлення:', detail: orderNumber },
        { title: 'Час оформлення замовлення:', detail: orderTime },
        { title: 'Очікуваний час доставки:', detail: deliveryTime }
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
                            <p>{dataUser.deliveryType}</p>
                            <p>{dataUser.userDevision}</p>
                            <p>{dataUser.userPostomat}</p>
                            {dataUser.userStreet && 
                                <p>вул.{dataUser.userStreet}, будинок:{dataUser.userHouse},
                                {dataUser.userAppartment && 
                                    <span>кв.{dataUser.userAppartment}</span> 
                                }</p>
                            }
                            <p>{dataUser.userCity}</p>
                        </div>                          
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h4 className="uppercase font-semibold mob:text-base lap:text-base  text-lg">Дані отримувача</h4>
                        </div>
                        <div className="normal-case flex flex-col mob:gap-[2px]">
                            <p>{dataUser.userFirstName} {dataUser.userLastName}</p>
                            <p>{dataUser.userEmail}</p>
                            <p>{dataUser.userPhone }</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h4 className="uppercase font-semibold mob:text-base lap:text-base  text-lg">Умови доставки</h4>
                        </div>
                        <div className="normal-case flex flex-col mob:gap-[2px]">
                            <p>{dataUser.deliveryTime} </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h4 className="uppercase font-semibold mob:text-base lap:text-base  text-lg">Оплата</h4>
                        </div>
                        <div className="normal-case flex flex-col mob:gap-[2px]">
                            <p>{dataUser.paymentType} </p>
                        </div>
                    </div>
                </div>

          </div>

        </div>
    )
}