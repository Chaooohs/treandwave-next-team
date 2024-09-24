import * as React from "react"
import { useState, useEffect } from 'react';
import { IMaskInput } from 'react-imask';


export function CourierDelivery({ setDeliveryInfo }) {

  const inputRef = React.useRef(null);

  const [search, setSearch] = useState('');
  const [cities, setCities] = useState([]);
  const [searchStreet, setSearchStreet] = useState('');
  const [streets, setStreets] = useState([]);

  const [selectedCityRef, setSelectedCityRef] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStreet, setSelectedStreet] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('');
  const [selectedAppartment, setSelectedAppartment] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isStreetDropDownOpen, setStreetIsDropDownOpen] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearch(value);
    if (value === '') {
      setIsDropDownOpen(false);
    } else {
      setIsDropDownOpen(true);
    }
  };

  const handleInputChangeStreet = (e) => {
    setSearchStreet(e.target.value);
  };

  // const handleFocus = () => {
  //   setIsDropDownOpen(true);
  // };

  const handleFocusStreet = () => {
    setStreetIsDropDownOpen(true);
  };

  const handleSelectedAddress = (address, ref) => {
    setSearch(address);
    setSelectedCity(address);
    setSelectedCityRef(ref);
    setIsDropDownOpen(false);
  };

  const handleSelectedStreet = (address) => {
    setSearchStreet(address);
    setSelectedStreet(address);
    setStreetIsDropDownOpen(false);
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
    if (selectedCityRef) {
      fetchStreet(selectedCityRef, searchStreet).then(setStreets);
    }
  }, [selectedCityRef, searchStreet]);

  useEffect(() => {
    if (selectedCity && selectedStreet) {
      const deliveryInfo = {
        selectedCity,
        selectedStreet,
        selectedHouse,
        selectedAppartment,
        selectedHour,
      };
      setDeliveryInfo(deliveryInfo);
    }
  }, [selectedCity, selectedStreet, selectedHouse, selectedAppartment, selectedHour]);


  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-10">

        {/*  address  */}
        <div className="flex flex-col gap-5 mob:gap-3 w-full">
          <h3 className="uppercase font-semibold text-base">Адреса</h3>
          <div>
            <input
              type="text"
              value={search}
              placeholder="Введіть назву міста"
              onChange={handleInputChange}
              // onFocus={handleFocus}
              className={`w-full py-2 px-3 border-[1px] text-black rounded-sm border-[#BABABA] outline-none bg-transparent `}
            />
            {isDropDownOpen &&
              <div className="border-[1px] pb-4 ">
                <div className=" flex flex-col gap-2 max-h-96 overflow-auto p-2 pt-4 ">
                  {cities.map((item, index) => (
                    <div key={index} onClick={() => handleSelectedAddress(item.Description, item.Ref)}
                      className=" cursor-pointer">
                      {item.Description}
                    </div>
                  ))}
                </div>
              </div>
            }
          </div>
          <div>
            <div>
              <input
                type="text"
                value={searchStreet}
                placeholder="Вулиця"
                onChange={handleInputChangeStreet}
                onFocus={handleFocusStreet}
                className={`w-full py-2 px-3 border-[1px] text-black rounded border-[#BABABA] outline-none bg-transparent `}
              />
              {isStreetDropDownOpen &&
                <div className="border-[1px] pb-4 ">
                  <div className=" flex flex-col gap-2 max-h-96 overflow-auto p-2 pt-4 ">
                    {streets.map((item, index) => (
                      <div key={index} onClick={() => handleSelectedStreet(item.Description)}
                        className=" cursor-pointer">
                        {item.Description}
                      </div>
                    ))}
                  </div>
                </div>
              }
            </div>
          </div>

          {/* ввод для дома и квартир */}
          <div className="grid grid-cols-2 gap-5 mob:gap-3">
            <input 
                  type="text" 
                  value={selectedHouse}
                  placeholder="Будинок"
                  onChange={(e) => setSelectedHouse(e.target.value)}
                  className={`w-full py-2 px-3 border-[1px] text-black rounded border-[#BABABA] outline-none bg-transparent `}
                  />

            <input
              type="text"
              value={selectedAppartment}
              placeholder="Квартира"
              onChange={(e) => setSelectedAppartment(e.target.value)}
              className={`w-full py-2 px-3 border-[1px] text-black rounded border-[#BABABA] outline-none bg-transparent `}
            />
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

async function fetchStreet(params, searchStreet) {
  const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "apiKey": "692fdef2615463a4b951f6bb0754ec97",
      "modelName": "AddressGeneral",
      "calledMethod": "getStreet",
      "methodProperties": {
        "CityRef": params,
        "FindByString": searchStreet || '',
      }
    })
  });

  const data = await res.json();
  return data.data;
}