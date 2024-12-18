'use client';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { setPaymentUserOrder, selectedOrderNumber, clearOrderDetails } from "@/redux/features/orderSlice";
import VisaIcon from '/public/image/svg/visa-logo.svg';
import MasterIcon from '/public/image/svg/mastercard-logo.svg';
import AppleIcon from '/public/image/svg/applepay-logo.svg';
import CashIcon from '/public/image/svg/cash.svg';
import { clearCart } from '@/redux/features/cartSlice';


export default function Page() {
  const dispatch = useDispatch()
  const [selectedPayment, setSelectedPayment] = useState(null); 
  const [signature, setSignature] = useState(null);
  const router = useRouter();
  const { cart, totalPrice, discount, forPayValue } = useSelector(state => state.cart);
  const dataUser = useSelector(state => state.order.dataUser);

  const paymentOptions = [
    { 
      id: 1, 
      name: 'Оплата карткою онлайн', 
      description: 'Ви обираєте оплату за допомогою картки.',
      images: [ 
        { id: 'visa', icon: <VisaIcon/> },
        { id: 'mastercard', icon: <MasterIcon/> },
        { id: 'applepay', icon: <AppleIcon/> }
      ] 
    },
    { 
      id: 2, 
      name: 'Оплата при отриманні', 
      description: `При отриманні замовлення у відділенні “Нова пошта“, а також при виборі кур'єрської доставки “Нова пошта”, можна оплатити карткою або готівкою.  Додаткова комісія за грошовий переказ: 20 грн. + 2% від суми переказу.`,
      images: [
        { id: 'cash', icon: <CashIcon/> }
      ]
    }
  ];

  // const orderNumber = `order_${new Date().getTime()}`;
  const orderTime = `${new Date().toLocaleString()}`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://secure.wayforpay.com/server/pay-widget.js";
    script.id = "widget-wfp-script";
    script.type = "text/javascript";
    // script.onload = () => {
    //   console.log("Wayforpay script loaded successfully");
    // };
    // script.onerror = () => {
    //   console.error("Failed to load Wayforpay script");
    // };
    document.body.appendChild(script);
    window.addEventListener('message', handleWidgetEvents, false );
    return () => {
      window.removeEventListener('message', handleWidgetEvents, false);
    }
}, []);

  

  const handlePaymentSelection = (id) => {
    setSelectedPayment(id === selectedPayment ? null : id); 
    const paymentMethod = (paymentOptions[id - 1].name) ;

    dispatch(setPaymentUserOrder({
      selectedPaymentType: paymentMethod, }));
  };

  const handleConfirmOrder = () => {
    const orderConfirmedData = {
      cart,
      dataUser,
      totalPrice, discount, forPayValue,
      confirmedAt: new Date().toLocaleString(),
    };
    // Сохраняем данные в localStorage
    localStorage.setItem('orderConfirmedData', JSON.stringify(orderConfirmedData));

    // Очищаем корзину и данные заказа в редаксе
    dispatch(clearCart());
    dispatch(clearOrderDetails());
  };

  const handleWidgetEvents = (event) => {

    if (event.data == 'WfpWidgetEventApproved') {
        alert('Оплата успішна');
        handleConfirmOrder();
        router.push('/checkout/confirmation')
        
      } else if ( event.data === 'WfpWidgetEventDeclined') {
        alert('Оплата відхилена');
      } else if ( event.data === 'WfpWidgetEventPending') {
        alert('Ваш платіж в обробці');
      } else if ( event.data === 'WfpWidgetEventClose') {
        alert('Ви закрили віджет');
      }
  }


  const handlePay = async () => {
    const orderReference = `order_${new Date().getTime()}`;
      dispatch(setPaymentUserOrder({
         selectedOrderNumber: orderReference, selectedOrderTime: orderTime}));
         
    if (selectedPayment === 1) {
      const paymentData = {
        merchantAccount: "test_merch_n1",
        merchantDomainName: "www.market.ua",
        orderReference,
        orderDate: Math.floor(Date.now() / 1000),
        amount: "1.00",
        currency: "UAH",
        productName: ["гарна сукня"],
        productCount: ["1"],
        productPrice: ["5"],

      };

      try {
        const response = await fetch('/api/signature', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(paymentData)
        });
        const { signature } = await response.json();
        setSignature(signature);

        if (signature) {
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
            language: "UA",
            straightWidget: true 			
          }, 			
        function (response) {
        // on approved	
        localStorage.setItem('approved', JSON.stringify(response))

        // обновить данные о заказе в базе 
        // и перенаправить на страницу успешной оплаты
        router.push('/checkout/confirmation');
        // Возможно, отправить уведомление на email 
        }, 
  
        function (response) {
        // on declined 			
        console.log("Payment Declined:", response);
        localStorage.setItem('declined', JSON.stringify(response))
  
        // Уведомление пользователя
        alert("Оплата була відхилена. Будь-ласка, спробуйте знову або оберіть інший спосіб оплати.");
        // Логирование для дальнейшего анализа в какойто базе?
  
        }, 
  
        function (response) {
        // on pending or in processing 	
        console.log("Payment Pending or In Processing:", response);
        localStorage.setItem('pending', JSON.stringify(response))
        // Уведомить пользователя о том, что оплата в обработке
        alert("Ваш платіж в обрабці.");
  
        }); } else {
          alert('Не вдалося отримати сигнатуру для оплати');
        }
      } catch (error) {
        console.error('Error fetching signature:', error);
        alert('Сталася помилка при отриманні даних для оплати');

      }
      } else if (selectedPayment === 2) {
        console.log('переходимо на сторінку оформлення замовлення');
        handleConfirmOrder();

        router.push('/checkout/confirmation');
      
      }
    }

    

  return (
    <div className="flex flex-col gap-[24px] w-full text-[#121212]">
      {paymentOptions.map((item, index) => (
        <div
          key={index}
          className="w-full items-start justify-between border-[1px] border-[#4D4D4D] p-6 flex flex-col gap-5 rounded"
        >
          <div key={index} className="w-full items-center justify-between flex gap-5">
            <div className="flex justify-between mob:flex-col mob:items-start items-center w-full gap-2">
              <h2>{item.name}</h2>
              <div className="flex gap-5 items-center">
                {item.images.map((subitem, subindex) => (
                  <div key={subindex} className="">
                    <div key={subitem.id} className="">{subitem.icon} </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <input
                type="radio"
                name="payment"
                value={item.name}
                checked={selectedPayment === item.id}
                onChange={() => handlePaymentSelection(item.id)}
                className={`w-6 h-6 appearance-none rounded-full border-[1px] border-gray-600 checked:border-[#0047FF]
                            checked:ring-[1px] checked:ring-[#0047FF] checked:bg-[#0047FF] checked:ring-offset-2 focus:ring-2
                            focus:ring-[#0047FF] cursor-pointer`}
              />
            </div>
          </div>

 {/* Аккордеон. Описание, когда опция выбрана */}
          {selectedPayment === item.id && (
            <div className="text-sm normal-case font-medium flex justify-start items-start">
              <p>{item.description}</p>
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