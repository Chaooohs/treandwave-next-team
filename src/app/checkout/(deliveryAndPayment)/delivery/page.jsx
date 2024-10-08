'use client';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';

import Nova from '/public/image/svg/delivery.svg';
import NovaPoshta from '/public/image/svg/novaposhta.svg';
import { Button } from "@/components/ui";
import { DeliveryData } from "./components/deliveryData";
import { setAddressUserOrder, setDataUserOrder, setDeliveryUserOrder} from "@/redux/features/orderSlice";

export default function Page() {
  const dispatch = useDispatch()
  const [selectedDeliveryType, setSelectedDeliveryType] = useState(null);
  const [clientData, setClientData] = useState({});
  const [deliveryInfo, setDeliveryInfo] = useState({});
  const router = useRouter();

  const deliveryOptions = [
    { id: 1, name: 'НОВА ПОШТА - ВІДДІЛЕННЯ', cost: 79 },
    { id: 2, name: 'НОВА ПОШТА - ПОШТОМАТ', cost: 79 },
    { id: 3, name: `НОВА ПОШТА - КУР'ЄР`, cost: 99 },
  ];

  const emptyOrder = !Object.keys(clientData).length || !Object.keys(deliveryInfo).length;

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // месяцы в JS начинаются с 0
    const year = date.getFullYear();
  
    return (`${day}.${month}.${year}`);
  }
  
  // Функция для генерации периода доставки
  const generateDeliveryTime = () => {
    const today = new Date();
    const deliveryStart = new Date(today); 
    const deliveryEnd = new Date(today);
    
    deliveryEnd.setDate(today.getDate() + 2); 
  
    return `${formatDate(deliveryStart)}-${formatDate(deliveryEnd)}`;
  }
  

  const handleSendingInfo = () => {
    const deliveryTime = generateDeliveryTime();
    
    dispatch(setDataUserOrder(clientData));
    dispatch(setAddressUserOrder(deliveryInfo));
    dispatch(setDeliveryUserOrder({
      selectedDeliveryType: (deliveryOptions[selectedDeliveryType - 1].name),
      selectedDeliveryTime: deliveryTime
    }));

    localStorage.setItem('clientData', JSON.stringify(clientData));
    localStorage.setItem('deliveryData', JSON.stringify(deliveryInfo));
    router.push('/checkout/payment');
  }

  

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-3 ">
        {deliveryOptions.map((item) => (
          <div key={item.id} className="rounded-[4px] w-full items-center justify-between border-[1px] border-[#4D4D4D] mob:p-3 p-6 lap:p-6 flex flex-col gap-5">
            <div className="w-full items-center justify-between  flex gap-5">
                <div className="w-full flex justify-between mob:gap-3 gap-5 lap:gap-5 mob:flex-col lap:flex ">
                    {item.id === 3 ? (<div> <Nova className=' ' /> </div>) :
                        (<div> <NovaPoshta className=' ' /> </div>)}

                    <div className="flex flex-col mob:gap-1  lap:gap-3 w-full">
                        <div className="flex items-center justify-between">
                        <h3 className="">{item.name}</h3>
                        </div>
                        <div>
                        <p className="text-sm font-medium normal-case">Безкоштовна доставка при замовленні від 2500 грн.</p>
                        </div>
                    </div>
                    {/* <p>{item.cost} uah</p> */}

                </div>
              <div>
                <input
                  type="radio"
                  name="delivery"
                  value={item.id}
                  checked={selectedDeliveryType === item.id}
                  onChange={() => setSelectedDeliveryType(item.id)}
                  className={`w-6 h-6 appearance-none rounded-full border-[1px] border-gray-600 checked:border-[#0047FF] 
                                                    checked:ring-[1px] checked:ring-[#0047FF] checked:bg-[#0047FF] checked:ring-offset-2 focus:ring-2 
                                                    focus:ring-[#0047FF] cursor-pointer`}

                />
              </div>
            </div>

            {selectedDeliveryType === item.id && <DeliveryData selectedDelivery={selectedDeliveryType} setClientData={setClientData} setDeliveryInfo={setDeliveryInfo} />}

          </div>
        ))}
      </div>
      <div className="w-full">
        <Button
          variant='default'
          className='font-mont mob:w-full lap:w-full font-semibold text-base uppercase px-5 py-8'
          onClick={handleSendingInfo}
          disabled={emptyOrder}
        >
          Продовжити оформлення
        </Button>
      </div>
    </div>
  )
}

