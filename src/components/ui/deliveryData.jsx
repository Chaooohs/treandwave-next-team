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
import { Button } from '../ui/button.jsx';
import { Input } from '../ui/input.jsx';
import { useState } from 'react';
import { Tag } from 'lucide-react';

export function DeliveryData({cities}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  console.log(cities);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-10">
        <div className="bg-[#EDEDED] h-[1px] w-full"></div>

        {/*  address  */}
        <div className="flex flex-col gap-5 w-full">
          <h3 className="uppercase font-semibold text-base">Адреса відділення</h3>
          <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Місто" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Населений пункт</SelectLabel>
                  {cities.map((item, index) => (
                    <SelectItem key={index} value={item.CityID}>{item.Description}</SelectItem>
                  ))} 
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Відділення" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Відділення</SelectLabel>
                  {/* {cities.map((item, index) => ( */}
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                  {/* ))} */}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

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
