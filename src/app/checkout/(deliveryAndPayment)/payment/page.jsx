'use client';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import VisaIcon from '/public/image/svg/visa-logo.svg';
import MasterIcon from '/public/image/svg/mastercard-logo.svg';
import AppleIcon from '/public/image/svg/applepay-logo.svg';
import CashIcon from '/public/image/svg/cash.svg';


export default function Page() {
  const [selectedPayment, setSelectedPayment] = useState(null); 
  const [signature, setSignature] = useState(null);
  const router = useRouter();

  const paymentOptions = [
    { id: 1, name: 'Оплата карткою онлайн', 
      description: 'Ви обираєте оплату за допомогою картки.',
      images: [<VisaIcon/>, <MasterIcon/>, <AppleIcon/>] 
    },
    { id: 2, name: 'Оплата при отриманні', 
      description: `При отриманні замовлення у відділенні “Нова пошта“, а також при виборі кур'єрської доставки “Нова пошта”, можна оплатити карткою або готівкою.  Додаткова комісія за грошовий переказ: 20 грн. + 2% від суми переказу.`,
      images: [<CashIcon/>] 
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://secure.wayforpay.com/server/pay-widget.js";
    script.id = "widget-wfp-script";
    script.type = "text/javascript";

    document.body.appendChild(script);
}, []);

  const handlePaymentSelection = (id) => {
    setSelectedPayment(id === selectedPayment ? null : id); 
  };

  const handlePay = async () => {

    if (selectedPayment === 1) {
      const orderReference = `order_${new Date().getTime()}`;

      const paymentData = {
        merchantAccount: "test_merch_n1",
        merchantDomainName: "www.market.ua",
        orderReference,
        orderDate: Math.floor(Date.now() / 1000),
        amount: "5.00",
        currency: "UAH",
        productName: ["гарна сукня"],
        productCount: ["1"],
        productPrice: ["5"],

      };

      const response = await fetch('/api/signature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(paymentData)
      });

      const { signature } = await response.json();
      setSignature(signature);

      console.log(signature);

      const wayforpay = new Wayforpay(); 		
      wayforpay.run({ 				
        merchantAccount : paymentData.merchantAccount, 				
        merchantDomainName : paymentData.merchantDomainName, 				
        authorizationType : "SimpleSignature", 				
        merchantSignature : signature, 				
        orderReference : paymentData.orderReference, 				
        orderDate : paymentData.orderDate, 				
        amount : paymentData.amount, 				
        currency : paymentData.currency, 				
        productName : paymentData.productName, 				
        productPrice : paymentData.productPrice, 				
        productCount : paymentData.productCount, 				
        clientFirstName : "Вася", 				
        clientLastName : "Васечкин", 				
        clientEmail : "some@mail.com", 				
        clientPhone: "380631234567", 				
        language: "UA" 			
      }, 			
      function (response) {
      // on approved	
      console.log("Payment Approved:", response);

      // сообщение пользователю
      alert("Оплата пройшла успішно!");
      // обновить данные о заказе в базе 
      // и перенаправить на страницу успешной оплаты
      router.push('/checkout/confirmation');
      // Возможно, отправить уведомление на email 
      }, 

      function (response) {
      // on declined 			
      console.log("Payment Declined:", response);

      // Уведомление пользователя
      alert("Оплата була відхилена. Будь-ласка, спробуйте знову або оберіть інший спосіб оплати.");
      // Логирование для дальнейшего анализа в какойто базе?

      }, 

      function (response) {
      // on pending or in processing 	
      console.log("Payment Pending or In Processing:", response);

      // Уведомить пользователя о том, что оплата в обработке
      alert("Ваш платіж в обрабці.");

      }); 

      } else if (selectedPayment === 2) {
        console.log('переходимо на сторінку оформлення замовлення');
        router.push('/checkout/confirmation');
      }
    }

  return (
    <div className="flex flex-col gap-[24px] w-full text-[#121212]">
      {paymentOptions.map((option) => (
        <div
          key={option.id}
          className="w-full items-start justify-between border-[1px] border-[#4D4D4D] p-6 flex flex-col gap-5 rounded"
        >
          <div className="w-full items-center justify-between flex gap-5">
            <div className="flex flex-col gap-3 w-full">
              <h2>{option.name}</h2>
            </div>
            <div className="flex gap-5 items-center">
              {option.images.map((item, index) => (
                <div key={index} className="flex">{item}</div>
              ))}
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
            <div className="text-sm normal-case font-medium flex justify-start items-start">
              <p>{option.description}</p>
            </div>
          )}
        </div>
      ))}

      {selectedPayment &&
        <div className="w-full">
          <button onClick={handlePay} className="w-full bg-[#0047FF] text-[#FDFDFD] text-base font-semibold p-3 uppercase">
              {selectedPayment === 1 ? 'Оплатити замовлення' : 'Оформити замовлення'}
          </button>
        </div>
      }
    </div>
  );
}