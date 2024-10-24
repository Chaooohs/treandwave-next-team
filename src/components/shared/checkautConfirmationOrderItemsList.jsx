'use client';
import { useDispatch, useSelector } from "react-redux";
import CheckoutConfirmationCard from "./checkoutConfirmationCard";
import CheckoutConfirmationAlsoLikeBlock from "./checkoutConfirmationAlsoLikeBlock";
import useCartFromStorage from "@/hooks/useCartFromStorage";
import useOrderFromStorage from "@/hooks/useOrderFromStorage";
import { Description } from "@radix-ui/react-dialog";

export default function CheckoutConfirmationOrderItemsList({ totalPrice, discount, paymentType, forPayValue, cart }) {
    // useCartFromStorage();
    // useOrderFromStorage();
    // const goods = useSelector(state => state.goods.goods);
    // const { cart, totalPrice, discount, forPayValue } = useSelector(state => state.cart);
    // console.log(forPayValue);
    const counter = cart.length;
    const discountValue = Math.round((totalPrice * discount / 100)*100)/100;
    // const paymentType = useSelector(state => state.order.dataUser.paymentType);

    
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

    const paymentText = paymentType === 'Оплата при отриманні' ? 'Оплата при отриманні' : 'Оплачено'

    return(
        <div className="flex flex-col gap-6">
            <div className="uppercase flex flex-col gap-3">
                <h2 className="font-bold text-4xl mob:text-2xl">Ваше замовлення</h2>
                <p className="text-base">Усього ( {counter} { counter === 1 ? 'товар' : 'товари'})</p>
            </div>
            <div className="flex flex-col gap-3 ">
                {Array.isArray(cart) &&
                    cart.map((el) => {
                    return (
                        <div key={el.id} className="w-full rounded flex flex-col gap-3">
                            <CheckoutConfirmationCard el={el} />
                            <div className="hidden mob:block lap:block h-[1px] w-full bg-[#EDEDED]"></div>
                        </div>
                    );
                })}
            </div>
            <div className="border-[1px] border-[#EDEDED] p-6 flex flex-col gap-6 text-base">
                <div className="flex flex-col gap-3">
                    {orderInformation.map((item, index) => (
                        <div key={index} className="w-full flex justify-between font-normal">
                            <p>{item.description}</p>
                            
                            <p className={`uppercase ${item.description === 'Промокод' ? 'text-[#D8001A]' : ''}`}>{item.amount}</p>
                        </div>
                    ))}
                </div>
                <div className="uppercase font-semibold w-full flex justify-between">
                    <p className="">{paymentText}</p>
                    
                    <p className="uppercase text-xl">{forPayValue} Uah</p>
                </div>
                
            </div>
            <CheckoutConfirmationAlsoLikeBlock/>
        </div>
    )
}