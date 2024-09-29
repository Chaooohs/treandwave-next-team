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

import { useState, useEffect } from 'react';


export function BranchDelivery({ setDeliveryInfo }) {

  const [search, setSearch] = useState('');
  const [searchDevision, setSearchDevision] = useState('');
  const [cities, setCities] = useState([]);
  const [devisions, setDevisions] = useState([]);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('')
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDevisionDropDownOpen, setIsDevisionDropDownOpen] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      const deliveryInfo = {
        selectedCity,
        selectedDivision,
      };
      setDeliveryInfo(deliveryInfo);
    }
  }, [selectedCity, selectedDivision, setDeliveryInfo]);

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearch(value);
    if (value === '') {
      setIsDropDownOpen(false);
    } else {
      setIsDropDownOpen(true);
    }
  };

  // const handleFocus = () => {
  // setIsDropDownOpen(true);
  // };

  const handleFocusDevision = () => {
    setIsDevisionDropDownOpen(true);
  };

  const handleSelectedAddress = (address) => {
    setSearch(address);
    setSelectedCity(address);
    setIsDropDownOpen(false);
  }

  const handleSelectedDevision = (devision) => {
    setSearchDevision(devision);
    setSelectedDivision(devision);
    setIsDevisionDropDownOpen(false);
  }

  useEffect(() => {
    fetchCities().then(setCities);
  }, []);

  useEffect(() => {
    if (search.length >= 1) {
      fetchCities(search).then(setCities);
    } else { fetchCities('').then(setCities); }
  }, [search]);

  useEffect(() => {
    if (selectedCity) {
      fetchDevision(selectedCity).then(setDevisions);
    }
  }, [selectedCity]);

  console.log(devisions);
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-10">

  {/*  пошук населеного пункту  */}
        <div className="flex flex-col gap-5 mob:gap-3 w-full">
          <h3 className="uppercase font-semibold text-base pb-[6px]">Адреса відділення</h3>
          <div>
            <input
              type="text"
              value={search}
              placeholder="Введіть назву міста"
              onChange={handleInputChange}
              // onFocus={handleFocus}
              className={`w-full py-2 px-3 border-[1px] text-black rounded border-[#BABABA] outline-none bg-transparent `}
            />
            {isDropDownOpen &&
              <div className="border-[1px] pb-4 ">
                <div className=" flex flex-col gap-2 max-h-96 overflow-auto py-2 px-3 pt-4 text-sm font-medium normal-case ">
                  {cities.map((item, index) => (
                    <div key={index} onClick={() => handleSelectedAddress(item.Description)}
                      className=" cursor-pointer">
                      {item.Description}
                    </div>
                  ))}
                </div>
              </div>
            }
          </div>
{/* пошук відділень */}
           <div>
              <input
                type="text"
                value={selectedDivision}
                placeholder="Відділення"
                onChange={(e) => setSelectedDivision(e.target.value)}
                onFocus={handleFocusDevision}
                className={`w-full py-2 px-3 border-[1px] text-black rounded border-[#BABABA] outline-none bg-transparent `}
              />
              {isDevisionDropDownOpen &&
                <div className="border-[1px] pb-4 ">
                  <div className=" flex flex-col gap-2 max-h-96 overflow-auto p-2 pt-4 text-sm font-medium normal-case ">
                  {devisions
                      .filter(item => item.Description.toLowerCase().includes(selectedDivision.toLowerCase())) // Фильтрация списка
                      .map((item, index) => (
                        <div key={index} onClick={() => handleSelectedDevision(item.Description)}
                          className="cursor-pointer normal-case">
                          {item.Description}
                        </div>
                      ))}
                  </div>
                </div>
              }
            </div>
        </div>
      </div>
    </div>
  )
}

async function fetchCities(search) {
  const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "apiKey": "692fdef2615463a4b951f6bb0754ec97",
      "modelName": "AddressGeneral",
      "calledMethod": "getCities",
      "methodProperties": {
        "FindByString": search || '',
        "Limit": "1000"
      }
    })
  });

  const data = await res.json();
  return data.data;
}

async function fetchDevision(params) {
  const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "apiKey": "692fdef2615463a4b951f6bb0754ec97",
      "modelName": "AddressGeneral",
      "calledMethod": "getWarehouses",
      "methodProperties": {
        "CityName": params,
      }
    })
  });

  const data = await res.json();
  const filteredData = data.data.filter(item => item.CategoryOfWarehouse !== 'Postomat')
  return filteredData;
}