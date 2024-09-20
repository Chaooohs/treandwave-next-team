import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from '../../../../../components/ui/input.jsx';
import { useState, useEffect } from 'react';
import { BranchDelivery } from "./branchDelivery.jsx";
import { PostomatDelivery } from "./postomatDelivery.jsx";
import { CourierDelivery } from "./courierDelivery.jsx";


export function DeliveryData({selectedDelivery, setClientData, setDeliveryInfo}) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const clientInfo = {
      firstName,
      lastName,
      email,
      phone,
    };
    setClientData(clientInfo);
  }, [firstName, lastName, email, phone]);



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
          <Input
                type="text"
                placeholder={`Ім’я`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={` font-mont border-[1px]  rounded-none border-[#BABABA] font-medium  `}
            />
            <Input
                type="text"
                placeholder={`Прізвище`}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={` font-mont border-[1px] rounded-none border-[#BABABA] font-medium  `}
            />
            <Input
                type="email"
                placeholder={`Email`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={` font-mont border-[1px] rounded-none border-[#BABABA] font-medium  `}
            />
            <Input
                type="tel"
                placeholder={`Телефон`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={` font-mont border-[1px] rounded-none border-[#BABABA] font-medium  `}
            />
          </div>             
        </form>  
      </div>
    </div>
  )
}
