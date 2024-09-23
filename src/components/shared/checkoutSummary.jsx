'use client';
import { useDispatch, useSelector } from "react-redux";
import CheckoutInput from "@/components/shared/checkoutInput";
import { useState } from "react";

export default function CheckoutSummary({}) {
    const [discount, setDiscount] = useState(null);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const discountAmount = Math.round((totalPrice * discount / 100)*100)/100;
    const forPay = totalPrice - discountAmount;

    return(
        <div className="flex flex-col gap-10 mob:gap-3 ">
            <div className="border-[1px] font-medium text-base text-[#121212] border-[#EDEDED] p-6 flex flex-col gap-6 rounded">
                <h3 className="uppercase font-semibold mob:text-lg lap:text-lg  text-2xl">Ваше замовлення</h3>
                <div className="flex justify-between">
                    <p>Товарів на суму</p>
                    <p>{totalPrice.toLocaleString('ru')} uah</p>
                </div>
                {discount && 
                    <div className="flex justify-between">
                        <p className="uppercase">Промокод</p>
                        <p className="text-[#D8001A] uppercase">-{discountAmount.toLocaleString('ru')} uah</p>
                    </div>
                }
                <div className="flex justify-between uppercase">
                    <h3>До сплати</h3>
                    <h3 className="text-2xl mob:text-base lap:text-base">{forPay.toLocaleString('ru')} uah</h3>
                </div>
            </div>
            <CheckoutInput setDiscount={setDiscount}/>
        </div>
    )
}