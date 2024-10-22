'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import ConfirmationIcon from '/public/image/svg/confirmationIcon.svg';
import CheckoutConfirmationOrderDetails from "@/components/shared/checkoutConfirmationOrderDetails";
import CheckoutConfirmationOrderItemsList from "@/components/shared/checkautConfirmationOrderItemsList";


export default function Page() {

    const [orderConfirmedData, setOrderConfirmedData] = useState({});
    const [orderReference, setOrderReference] = useState({});

    useEffect(() => {
        const orderConfirmedDataFromStorage = localStorage.getItem('orderConfirmedData');
        const orderReferenceFromStorage = localStorage.getItem('orderReference');
        if (orderConfirmedDataFromStorage) {
            const parseInf = JSON.parse(orderConfirmedDataFromStorage);
            console.log('parseinf', parseInf);
            setOrderConfirmedData(parseInf);

            setOrderReference(JSON.parse(orderReferenceFromStorage));
            
        };

    }, [])

    useEffect(() => {
    }, [orderConfirmedData]);

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
    

    return(
        <div className="wrap min-h-screen gap-[56px] mob:gap-8 lap:gap-8 flex flex-col mob:pt-2 py-5">
            <div className="text-[#BABABA] text-sm flex items-center justify-start">
                <Link href={'/search'} className="flex gap-2 items-center">
                    <ArrowLeft size={15}/>
                    Продовжити покупки
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 mob:gap-2">
                <ConfirmationIcon/>
                <h3 className="text-lg uppercase font-semibold">
                    Дякуємо за ваше замовлення!
                </h3>
                <p className="text-center">
                    Ми обробляємо ваше замовлення і надішлемо вам сповіщення, коли воно буде відправлене. 
                    Статус замовлення можна відстесжити у своєму 
                    <Link href={'/login'} className='underline underline-offset-4 decoration-1 ml-1'>особистому кабінеті</Link> або в електронному 
                    листі, який ми надіслали на вашу  адресу.
                </p>
            </div>
            <CheckoutConfirmationOrderDetails  orderNumber={orderNumber} orderTime={orderTime} deliveryTime={deliveryTime} deliveryType={deliveryType} userDevision={userDevision} userPostomat={userPostomat} userStreet={userStreet} userHouse={userHouse} userAppartment={userAppartment} userCity={userCity} userFirstName={userFirstName} userLastName={userLastName} userEmail={userEmail} userPhone={userPhone} paymentType={paymentType} />

            <CheckoutConfirmationOrderItemsList totalPrice={totalPrice} discount={discount} paymentType={paymentType} cart={cart} forPayValue={forPayValue}/>


        </div>
    )
}