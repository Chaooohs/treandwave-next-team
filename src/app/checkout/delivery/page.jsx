'use client';
import { useState } from "react";
import Stepper from "@/components/ui/stepper";
import Nova from '/public/image/svg/delivery.svg';
import NovaPoshta from '/public/image/svg/novaposhta.svg';
import { Button } from "@/components/ui";
import CheckoutSummary from "@/components/shared/checkoutSummary";
import CheckoutInput from "@/components/shared/checkoutInput";

export default function Page() {
    const [selectedDelivery, setSelectedDelivery] = useState(null);

    const deliveryOptions = [
        { id: 1, name: 'НОВА ПОШТА - ВІДДІЛЕННЯ', cost: 79 },
        { id: 2, name: 'НОВА ПОШТА - ПОШТОМАТ', cost: 79 },
        { id: 3, name: `НОВА ПОШТА - КУР'ЄР`, cost: 99 },
      ];

    return(
        <div className="p-10 text-base text-[#121212] font-semibold  uppercase flex gap-5">
            <div className="flex flex-col gap-10 w-full">
                <Stepper currentStep={2}/>
                <div className="flex gap-10 w-full justify-between">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3 ">
                            {deliveryOptions.map((item) => (
                                <div key={item.id} className="w-full items-center justify-between border-[1px] border-[#4D4D4D] p-6 flex gap-5">
                                    
                                    {item.id === 3 ? (<div>
                                        <Nova className=' '/>
                                    </div>) : (<div>
                                        <NovaPoshta className=' '/>
                                    </div>)}

                                    <div className="flex flex-col gap-3 w-full">
                                        <div className="flex items-center justify-between">
                                            <h3 className="">{item.name}</h3>
                                            <p>{item.cost} uah</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium normal-case">Безкоштовна доставка при замовленні від 2500 грн.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="delivery"
                                            value={item.id}
                                            checked={selectedDelivery === item.id}
                                            onChange={() => setSelectedDelivery(item.id)}
                                        />
                                        </div>

                                </div>
                            ))}
                        </div>
                        <div>
                            <Button
                                variant='default'
                                className='font-mont font-semibold text-base uppercase px-5 py-8'
                                onClick={''}
                                
                            >
                                Продовжити оформлення
                            </Button>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-5">
                        <CheckoutSummary total={3000} discount={500} forPay={2500}/>
                        <CheckoutInput/>
                    </div>
                </div>
            </div>
        </div>
    )
}