'use client';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { useRouter } from 'next/navigation';

export default function Page() {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [clientData, setClientData] = useState({});
    const [deliveryInfo, setDeliveryInfo] = useState({});
    const router = useRouter();

    const paymentOptions = [
        { id: 1, name: 'Оплата карткою онлайн'},
        { id: 2, name: 'Оплата при отриманні' },
      ];
    


    return(
        <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-3 ">
  {/* Оплата карткою онлайн */}
                    <div className="w-full items-center justify-between border-[1px] border-[#4D4D4D] p-6 flex flex-col gap-5">
                        <div className="w-full items-center justify-between  flex gap-5">
                            <div className="flex flex-col gap-3 w-full">
                                <h2>Оплата карткою онлайн</h2>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="delivery"
                                    value='byCard'
                                    className={`w-6 h-6 appearance-none rounded-full border-[1px] border-gray-600 checked:border-[#0047FF] 
                                        checked:ring-[1px] checked:ring-[#0047FF] checked:bg-[#0047FF] checked:ring-offset-2 focus:ring-2 
                                        focus:ring-[#0047FF] cursor-pointer`}
                                />
                            </div>
                        </div>
                    </div>

    {/* Оплата при отриманні */}
                    <div className="w-full items-center justify-between border-[1px] border-[#4D4D4D] p-6 flex flex-col gap-5">
                        <div className="w-full items-center justify-between  flex gap-5">
                            <div className="flex flex-col gap-3 w-full">
                                <h2>Оплата при отриманні</h2>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="delivery"
                                    value='byCard'
                                    className={`w-6 h-6 appearance-none rounded-full border-[1px] border-gray-600 checked:border-[#0047FF] 
                                        checked:ring-[1px] checked:ring-[#0047FF] checked:bg-[#0047FF] checked:ring-offset-2 focus:ring-2 
                                        focus:ring-[#0047FF] cursor-pointer`}
                                />
                            </div>
                        </div>
                    </div>
            </div>
            {/* <div>
                <Button
                    variant='default'
                    className='font-mont font-semibold text-base uppercase px-5 py-8'
                    onClick={handleSendingInfo}
                >
                    Продовжити оформлення
                </Button>
            </div> */}
        </div>
    )
}

