import Link from "next/link";
import CheckoutSummary from "@/components/shared/checkoutSummary";
import Stepper from "@/components/ui/stepper";
import VisaIcon from '/public/image/svg/visa-logo.svg';
import MasterIcon from '/public/image/svg/mastercard-logo.svg';
import AppleIcon from '/public/image/svg/applepay-logo.svg';
import CheckoutStatus from "@/components/shared/checkoutStatus";

export default function Layout({ children }) {

  return (
    <main className="mob:p-5 p-10 lap:p-10 text-base text-[#121212] font-semibold  uppercase flex gap-5 min-h-screen">
      <div className="flex flex-col gap-10 w-full">
        <Stepper />
        <div className="flex mob:flex-col lap:flex-col flex-row  gap-16 mob:gap-10 lap:gap-10 w-full justify-between">
          <div className="w-full">
            {children}
          </div>
          <div className="min-w-[35%] flex flex-col gap-10">
            <CheckoutSummary />
            <CheckoutStatus />
            <div className=" normal-case">
              <div className="mt-16 text-lg font-semibold uppercase lap:mt-10">Потрібна допомога?</div>
              <div className="mt-3 flex flex-col text-base font-medium gap-y-2 underline underline-offset-4 decoration-1">
                <Link href='/about/payment-and-delivery' className="hover:text-[#6a6a6a] duration-300">Оплата і доставка</Link>
                <Link href='/about/exchange-and-return' className="hover:text-[#6a6a6a] duration-300">Обмін та повернення</Link>
                <Link href='/about/contacts' className="hover:text-[#6a6a6a] duration-300">Контакти</Link>
              </div>
              <div className="mt-10 text-lg font-semibold uppercase">Методи оплати</div>
              <div className="flex gap-x-6 items-center mt-6 lap:mb-10">
                <VisaIcon />
                <MasterIcon />
                <AppleIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}