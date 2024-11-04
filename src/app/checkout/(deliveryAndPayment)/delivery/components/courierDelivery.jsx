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
  }, [selectedCity, selectedStreet, selectedHouse, selectedAppartment, selectedHour, setDeliveryInfo]);


  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-10">

        {/*  address  */}
        <div className="flex flex-col gap-5 mob:gap-3 w-full">
          <h3 className="uppercase font-semibold text-base">Адреса - кур’єр</h3>
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
              <div className="border-[1px] pb-4 text-sm font-medium normal-case ">
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
              <div className="relative">
                <input
                  type="text"
                  value={searchStreet}
                  onChange={handleInputChangeStreet}
                  onFocus={handleFocusStreet}
                  className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                />
                <label htmlFor="city" className={`absolute normal-case left-3 bg-white px-1 text-[#BABABA] ${searchStreet ? '-top-3' : 'top-1/2 -translate-y-1/2'}`}>
                  Вулиця
                </label>
              </div>
            
              {isStreetDropDownOpen &&
                <div className="border-[1px] pb-4 text-sm font-medium normal-case ">
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
            <div className="relative">
              <input 
                type="text" 
                value={selectedHouse}
                onChange={(e) => setSelectedHouse(e.target.value)}
                className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
                />
              <label htmlFor="city" className={`absolute normal-case left-3 bg-white px-1 text-[#BABABA] ${searchStreet ? '-top-3' : 'top-1/2 -translate-y-1/2'}`}>
                Будинок
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                value={selectedAppartment}
                onChange={(e) => setSelectedAppartment(e.target.value)}
                className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
              />
              <label htmlFor="city" className={`absolute normal-case left-3 bg-white px-1 text-[#BABABA] ${searchStreet ? '-top-3' : 'top-1/2 -translate-y-1/2'}`}>
                Квартира
              </label>
            </div>
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