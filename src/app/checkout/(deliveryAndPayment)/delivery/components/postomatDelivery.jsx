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


export function PostomatDelivery({setDeliveryInfo}) {

  const [search, setSearch] = useState('');
  const [cities, setCities] = useState([]);
  const [devisions, setDevisions] = useState([]);
  const [searchPostomat, setSearchPostomat] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPostomat, setSelectedPostomat] = useState('');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isPostomatDropDownOpen, setIsPostomatDropDownOpen] = useState(false);

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
  //   setIsDropDownOpen(true);
  // };

  const handleSelectedAddress = (address) => {
    setSearch(address);
    setSelectedCity(address);
    setIsDropDownOpen(false);
  };

  const handleSelectedPostomat = (postomat) => {
    setSearchPostomat(postomat);
    setSelectedPostomat(postomat);
    setIsPostomatDropDownOpen(false);
  };

  const handleFocusPostomat = () => {
    setIsPostomatDropDownOpen(true);
  };

  useEffect(() => {
    fetchCities().then(setCities);
}, []);

  useEffect(() => {
    if (search.length >= 1) {
      fetchCities(search).then(setCities);
    } else {fetchCities('').then(setCities);}
  }, [search]);

  useEffect(() => {
    if (selectedCity) {
      fetchPostomat(selectedCity).then(setDevisions);
    }
  }, [selectedCity]);

  useEffect(() => {
    if(selectedCity) {
      const deliveryInfo = {
        selectedCity,
        selectedPostomat
      };
      setDeliveryInfo(deliveryInfo);
    }
  }, [selectedCity, selectedPostomat, setDeliveryInfo]);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-10">


        {/*  address  */}
        <div className="flex flex-col gap-5 w-full">
          <h3 className="uppercase font-semibold text-base">Адреса поштомату</h3>
          <div>
            <div className="relative">
              <input 
                type="text" 
                value={search}
                onChange={handleInputChange}
                // onFocus={handleFocus}
                className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
              />
              <label htmlFor="city" className={`absolute normal-case left-3 bg-white px-1 text-[#BABABA] ${search ? '-top-3' : 'top-1/2 -translate-y-1/2'}`}>
                  Місто
              </label>
            </div>
    
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

          <div>
            <div className="relative">
              <input
                  type="text"
                  value={selectedPostomat}
                  onChange={(e) => setSelectedPostomat(e.target.value)}
                  onFocus={handleFocusPostomat}
                  className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                />
              <label htmlFor="city" className={`absolute normal-case left-3 bg-white px-1 text-[#BABABA] ${selectedPostomat ? '-top-3' : 'top-1/2 -translate-y-1/2'}`}>
                Поштомат
              </label>
            </div>
              {isPostomatDropDownOpen &&
                <div className="border-[1px] pb-4 ">
                  <div className=" flex flex-col gap-2 max-h-96 overflow-auto p-2 pt-4 text-sm font-medium">
                  {devisions
                      .filter(item => item.Description.toLowerCase().includes(selectedPostomat.toLowerCase())) // Фильтрация списка
                      .map((item, index) => (
                        <div key={index} onClick={() => handleSelectedPostomat(item.Description)}
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
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
              "apiKey": "692fdef2615463a4b951f6bb0754ec97",
              "modelName": "AddressGeneral",
              "calledMethod": "getCities",
              "methodProperties": {
                  "FindByString" : search || '',
                  "Limit" : "1000"
              }
                  })
  });

  const data = await res.json();
  return data.data;
}

async function fetchPostomat(params) {
  const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
              "apiKey": "692fdef2615463a4b951f6bb0754ec97",
              "modelName": "AddressGeneral",
              "calledMethod": "getWarehouses",
              "methodProperties": {
                  "CityName" : params,
                  "CategoryOfWarehouse": "Postomat"
              }
                  })
  });

  const data = await res.json();
  return data.data;
}