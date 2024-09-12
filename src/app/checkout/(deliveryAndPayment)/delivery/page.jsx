'use client';
import { useEffect, useState } from "react";
import Stepper from "@/components/ui/stepper";
import Nova from '/public/image/svg/delivery.svg';
import NovaPoshta from '/public/image/svg/novaposhta.svg';
import { Button } from "@/components/ui";
import CheckoutSummary from "@/components/shared/checkoutSummary";
import CheckoutInput from "@/components/shared/checkoutInput";
import { setTotalPrice } from "@/redux/features/cartSlice";
import { DeliveryData } from "@/components/ui/deliveryData";

export default function Page() {
    const [selectedDelivery, setSelectedDelivery] = useState(null);
    const [name, setName] = useState([]);
    const [address, setAddress] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchCities().then(setCities);
    }, []);

    const deliveryOptions = [
        { id: 1, name: 'НОВА ПОШТА - ВІДДІЛЕННЯ', cost: 79 },
        { id: 2, name: 'НОВА ПОШТА - ПОШТОМАТ', cost: 79 },
        { id: 3, name: `НОВА ПОШТА - КУР'ЄР`, cost: 99 },
      ];

    // console.log(cities);
    console.log(selectedDelivery);

    return(
                    <div className="flex flex-col gap-10 w-full">
                        <div className="flex flex-col gap-3 ">
                            {deliveryOptions.map((item) => (
                                <div key={item.id} className="w-full items-center justify-between border-[1px] border-[#4D4D4D] p-6 flex flex-col gap-5">
                                    <div className="w-full items-center justify-between  flex gap-5">
                                        {item.id === 3 ? (<div> <Nova className=' '/> </div>) : 
                                        (<div> <NovaPoshta className=' '/> </div>)}

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
                                    
                                        {selectedDelivery === item.id && <DeliveryData cities={cities}/>}

                                </div>
                            ))}
                        </div>
                        <div>
                            <Button
                                variant='default'
                                className='font-mont font-semibold text-base uppercase px-5 py-8'
                               
                                
                            >
                                Продовжити оформлення
                            </Button>
                        </div>
                    </div>//
    )
}

async function fetchCities(params) {
    const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
                "apiKey": "692fdef2615463a4b951f6bb0754ec97",
                "modelName": "AddressGeneral",
                "calledMethod": "getCities",
                "methodProperties": {
                    "Limit" : "500"
                }
                    })
    });

    const data = await res.json();
    return data.data;
}