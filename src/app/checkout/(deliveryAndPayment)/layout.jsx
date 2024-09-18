
import CheckoutSummary from "@/components/shared/checkoutSummary";
import CheckoutInput from "@/components/shared/checkoutInput";
import Stepper from "@/components/ui/stepper";

export default function Layout({ children }) {

    return (
        <div className="p-10 text-base text-[#121212] font-semibold  uppercase flex gap-5 min-h-screen">
            <div className="flex flex-col gap-10 w-full">
                <Stepper />
                <div className="flex gap-16 w-full justify-between">
                    <div className="w-full">
                        {children}
                    </div>
                    <div className="w-[35%] flex flex-col gap-5">
                        <CheckoutSummary total={3000} discount={500} forPay={2500}/>
                        
                    </div>
                </div>
            </div>
        </div>
  )}