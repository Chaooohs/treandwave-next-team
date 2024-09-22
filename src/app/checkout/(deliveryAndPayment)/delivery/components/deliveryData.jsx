// 'use client'
import * as React from "react"

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { Input } from '../../../../../components/ui/input.jsx';
import { useState, useEffect } from 'react';
import { BranchDelivery } from "./branchDelivery.jsx";
import { PostomatDelivery } from "./postomatDelivery.jsx";
import { CourierDelivery } from "./courierDelivery.jsx";

import { useRef } from 'react';
import { IMaskInput } from 'react-imask';


export function DeliveryData({ selectedDelivery, setClientData, setDeliveryInfo }) {

  const [isFirstName, isSetFirstName] = useState('');
  const [isLastName, isSetLastName] = useState('');
  const [isEmail, isSetEmail] = useState('');
  const [isPhone, isSetPhone] = useState('');

  const inputRef = useRef(null);


  useEffect(() => {
    if(isFirstName && isLastName && isEmail && isPhone) {

      const clientInfo = {
        isFirstName,
        isLastName,
        isEmail,
        isPhone,
      };

      setClientData(clientInfo);
    }

  }, [isFirstName, isLastName, isEmail, isPhone]);


  function regEmail(email) {
    let rgx = /^[a-z0-9_.-]+@[a-z]+\.[a-z]+[a-z.]*$/ig;
    return rgx.test(email);
  }

  function regPhone(tel) {
    let rgx = /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/;
    return rgx.test(tel);
  }

  function checkEmail(value) {
    if (regEmail(value)) {
      isSetEmail(value)
    }
  }

  function checkPhone(value) {
    if (regPhone(value)) {
      isSetPhone(value)
    }
  }

  
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-10">
        <div className="bg-[#EDEDED] h-[1px] w-full"></div>

        {/*  address  */}
        {selectedDelivery === 1 && <BranchDelivery setDeliveryInfo={setDeliveryInfo} />} {/* Отделения */}
        {selectedDelivery === 2 && <PostomatDelivery setDeliveryInfo={setDeliveryInfo} />} {/* Поштоматы */}
        {selectedDelivery === 3 && <CourierDelivery setDeliveryInfo={setDeliveryInfo} />} {/* Курьер */}


        {/*  name  */}
        <form className="flex flex-col gap-5 w-full">
          <h3 className="uppercase font-semibold text-base">Особисті дані</h3>
          <div className="grid grid-cols-2 gap-5">
            {/* <Input
              type="text"
              placeholder={`Ім’я`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={` border-[1px]  rounded-none border-[#BABABA]  `}
            /> */}
            {/* <Input
              type="text"
              placeholder={`Прізвище`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={` border-[1px] rounded-none border-[#BABABA] `}
            /> */}
            {/* <Input
              type="email"
              placeholder={`Email`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={` border-[1px] rounded-none border-[#BABABA] `}
            /> */}
            {/* <Input
              ref={ref}
              inputRef={inputRef}
              type="tel"
              placeholder={`Телефон`}
              value={phone}
              // onChange={(e) => setPhone(e.target.value)}
              className={` font-mont border-[1px] rounded-none border-[#BABABA] font-medium  `}
            /> */}

            <IMaskInput
              mask={/^[a-zA-Z а-щА-ЩЬьЮюЯяЇїІіЄє ]+$/g}
              radix="."
              value={isFirstName}
              unmask={false}
              inputRef={inputRef}
              onAccept={
                (value, mask) => isSetFirstName(value)
              }
              placeholder='Ім’я'
              style={{ padding: '2px 0 0 12px' }}
              className="rounded outline-none h-[42px] bg-transparent border border-[#bababa] pl-3"
            />

            <IMaskInput
              mask={/^[a-zA-Z а-щА-ЩЬьЮюЯяЇїІіЄє ]+$/g}
              radix="."
              value={isLastName}
              unmask={false}
              inputRef={inputRef}
              onAccept={
                (value, mask) => isSetLastName(value)
              }
              placeholder='Прізвище'
              style={{ padding: '2px 0 0 12px' }}
              className="rounded outline-none h-[42px] bg-transparent border border-[#bababa] pl-3"
            />

            <IMaskInput
              mask={/^\S*@?\S*$/}
              radix="."
              value={isEmail}
              unmask={false}
              inputRef={inputRef}
              onAccept={checkEmail}
              placeholder='Email'
              style={{ padding: '2px 0 0 12px' }}
              className="rounded outline-none h-[42px] bg-transparent border border-[#bababa] pl-3"
            />

            <IMaskInput
              mask={'+{38}(000)000-00-00'}
              radix="."
              value={isPhone}
              unmask={false}
              inputRef={inputRef}
              onAccept={checkPhone}
              placeholder='+38(0__)___-__-__'
              style={{ padding: '2px 0 0 12px' }}
              className="rounded outline-none h-[42px] bg-transparent border border-[#bababa] pl-3"
            />


          </div>
        </form>
      </div>
    </div>
  )
}
