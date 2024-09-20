import Link from "next/link";
import CheckoutSummary from "@/components/shared/checkoutSummary";
import Stepper from "@/components/ui/stepper";
import VisaIcon from '/public/image/svg/visa-logo.svg';
import MasterIcon from '/public/image/svg/mastercard-logo.svg';
import AppleIcon from '/public/image/svg/applepay-logo.svg';
import CheckoutStatus from "@/components/shared/checkoutStatus";

export default function Layout({ children }) {

  return (
    <main className="p-10 text-base text-[#121212] font-semibold  uppercase flex gap-5">
      <div className="flex flex-col gap-10 w-full">
        <Stepper />
        <div className="flex gap-16 w-full justify-between">
          <div className="w-full">
            {children}
          </div>
          <div className="w-[35%] flex flex-col gap-5">
            <CheckoutSummary total={3000} discount={500} forPay={2500} />
            <CheckoutInput />
          </div>
        </div>
      </div>
    </main>
  )
}