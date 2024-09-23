'use client';
import { useState } from "react";
import { Button } from "@/components/ui";

export default function Page() {
  const [selectedPayment, setSelectedPayment] = useState(null); 

  const paymentOptions = [
    { id: 1, name: 'Оплата карткою онлайн', description: 'Ви оберете оплату за допомогою картки.' },
    { id: 2, name: 'Оплата при отриманні', description: `При отриманні замовлення у відділенні “Нова пошта“, а також при виборі кур'єрської доставки “Нова пошта”, можна оплатити карткою або готівкою.  Додаткова комісія за грошовий переказ: 20 грн. + 2% від суми переказу.` },
  ];


  const handlePaymentSelection = (id) => {
    setSelectedPayment(id === selectedPayment ? null : id); 
  };

  return (
    <div className="flex flex-col gap-[24px] w-full text-[#121212]">
      {paymentOptions.map((option) => (
        <div
          key={option.id}
          className="w-full items-center justify-between border-[1px] border-[#4D4D4D] p-6 flex flex-col gap-5 rounded"
        >
          <div className="w-full items-center justify-between flex gap-5">
            <div className="flex flex-col gap-3 w-full">
              <h2>{option.name}</h2>
            </div>
            <div>
              <input
                type="radio"
                name="payment"
                value={option.name}
                checked={selectedPayment === option.id}
                onChange={() => handlePaymentSelection(option.id)}
                className={`w-6 h-6 appearance-none rounded-full border-[1px] border-gray-600 checked:border-[#0047FF]
                            checked:ring-[1px] checked:ring-[#0047FF] checked:bg-[#0047FF] checked:ring-offset-2 focus:ring-2
                            focus:ring-[#0047FF] cursor-pointer`}
              />
            </div>
          </div>

 {/* Аккордеон. Описание, когда опция выбрана */}
          {selectedPayment === option.id && (
            <div className="text-sm normal-case font-medium">
              <p>{option.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}