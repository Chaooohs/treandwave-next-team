import * as React from "react"
import { useState, useEffect } from 'react';


export function CourierDelivery({setDeliveryInfo}) {

  const [search, setSearch] = useState('');
  const [cities, setCities] = useState([]);
  const [searchStreet, setSearchStreet] = useState('');
  const [streets, setStreets] = useState([]);

  const [selectedCityRef, setSelectedCityRef] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStreet, setSelectedStreet] = useState('')
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isStreetDropDownOpen, setStreetIsDropDownOpen] = useState(false);

  const handleInputChange = (e) => {
      setSearch(e.target.value);
  };

  const handleInputChangeStreet = (e) => {
    setSearchStreet(e.target.value);
};

  const handleFocus = () => {
    setIsDropDownOpen(true);
  };

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
    } else {fetchCities('').then(setCities);}
  }, [search]);

  useEffect(() => {
    if (selectedCityRef) {
      fetchStreet(selectedCityRef, searchStreet).then(setStreets);
    }
  }, [selectedCityRef, searchStreet]);

  useEffect(() => {
    if(selectedCity) {
      const deliveryInfo = {
        selectedCity,
        // selectedStreet,
      };
      setDeliveryInfo(deliveryInfo);
    }
  }, [selectedCity, selectedStreet]);


  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-10">
        <div className="bg-[#EDEDED] h-[1px] w-full"></div>

        {/*  address  */}
        <div className="flex flex-col gap-5 w-full">
          <h3 className="uppercase font-semibold text-base">Адреса</h3>
          <div>
            <input 
              type="text" 
              value={search}
              placeholder="Місто"
              onChange={handleInputChange}
              onFocus={handleFocus}
              className={`w-full p-2 font-mont border-[1px] text-black rounded-sm border-[#BABABA] font-medium  `}
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
                className={`w-full p-2 font-mont border-[1px] text-black rounded-sm border-[#BABABA] font-medium  `}
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

async function fetchStreet(params, searchStreet) {
  const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
              "apiKey": "692fdef2615463a4b951f6bb0754ec97",
              "modelName": "AddressGeneral",
              "calledMethod": "getStreet",
              "methodProperties": {
                  "CityRef" : params,
                  "FindByString": searchStreet || '',
              }
                  })
  });

  const data = await res.json();
  return data.data;
}