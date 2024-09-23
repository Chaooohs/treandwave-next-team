'use client';
import { usePathname } from 'next/navigation';

export default function Stepper({ }) {
    const pathname = usePathname();

    const steps = ['Кошик', 'Доставка', 'Оплата', 'Замовлення оформлено'];

    const getCurrentStep = () => {
        if (pathname.includes('checkout/delivery')) return 2;
        if (pathname.includes('checkout/payment')) return 3;
        if (pathname.includes('confirmation')) return 4;
        if (pathname.includes('checkout')) return 1;
    };

    const currentStep = getCurrentStep();

    return (
        <div className="flex items-center gap-5 text-sm">
            {steps.map((step, index) => (
                <div key={index} className={`flex gap-2 items-center ${index >= 3 ? 'mob:hidden' : ''}`}>
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full ${
                        currentStep === index + 1
                            ? 'bg-[#0047FF] text-white'
                            : currentStep > index 
                            ? 'bg-[#212121] text-white'
                            : 'bg-[#BABABA] text-white'
                        }`
                    }>
                        {index + 1}
                    </div>
                    <div className={`uppercase ${
                        currentStep === index + 1
                            ? 'text-[#0047FF]'
                            : currentStep > index 
                            ? 'text-[#212121]'
                            : 'text-[#BABABA]'
                        }`}>
                        {step}
                    </div>
                </div>
            ))}
        </div>
    );
}