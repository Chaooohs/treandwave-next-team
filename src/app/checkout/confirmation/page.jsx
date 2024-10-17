import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import ConfirmationIcon from '/public/image/svg/confirmationIcon.svg';
import CheckoutConfirmationOrderDetails from "@/components/shared/checkoutConfirmationOrderDetails";
import CheckoutConfirmationOrderItemsList from "@/components/shared/checkautConfirmationOrderItemsList";


export default function Page() {

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
                    <Link href={''}>особистому кабінеті</Link> або в електронному 
                    листі, який ми надіслали на вашу  адресу.
                </p>
            </div>
            <CheckoutConfirmationOrderDetails />

            <CheckoutConfirmationOrderItemsList/>


        </div>
    )
}