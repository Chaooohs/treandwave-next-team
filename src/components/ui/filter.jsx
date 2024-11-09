'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useGetCategoryListQuery } from "@/redux/api/goodsApi";
import { setColor } from "@/redux/features/filtersSlice";


export function Filter() {

  const { data: colors } = useGetCategoryListQuery("/color");
  let { color } = useSelector((state) => state.filters);

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedColors, setSelectedColors] = useState('');
  const [selectedPrice, setSelectedPrice] = useState([]);
  const dispatch = useDispatch()

  // console.log(selectedSizes);
  // console.log(selectedModels);
  // console.log(selectedPrice);
  // console.log(selectedColors);




  const sizes = ["34", "36", "38", "40", "XS", "S", "M", "L", "XL"];
  const models = ["Футболки", "Боді", "Сукні Міні", "Джинси", "Палаццо", "Штани", "Худі", "Класичні Костюми", "Спортивні Костюми"];
  const prices = ['до 750 UaH', 'до 1000 UaH', 'до 1500 UaH', 'до 1750 UaH', 'до 2000 UaH', 'до 2500 UaH']
  // const colors = ['#336cff', '#e03348', '#4d4d4d'];

  const toggleSelection = (item, setSelected, selected) => {
    setSelected(selected.includes(item) ? selected.filter(i => i !== item) : [...selected, item]);
  };


  useEffect(() => {
    setSelectedColors(color)
  }, [color])

  
  const clearFilters = () => {
    // dispatch(setColor(''))
    setSelectedSizes([]);
    setSelectedModels([]);
    setSelectedColors('');
    setSelectedPrice([]);
  };

  const applyFilters = () => {
    dispatch(setColor(selectedColors))
    const filters = {
      sizes: selectedSizes,
      models: selectedModels,
      prices: selectedPrice,
      // colors: selectedColors
    };
    // onApplyFilters(filters);
  }


  return (
    <>
      <Accordion type="single" collapsible className="w-full px-6 overflow-y-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>Розмір</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2 mt-2">
              {sizes.map(size => (
                <Button
                  key={size}
                  variant='tag'
                  onClick={() => toggleSelection(size, setSelectedSizes, selectedSizes)}
                  className={`w-[58px] ${selectedSizes.includes(size) ? 'bg-[#121212] text-[#FDFDFD]' : ''}`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Модель</AccordionTrigger>
          <AccordionContent>
            <div className="text-[#BABABA] font-medium text-sm lowercase text-left">
              Щоб швидше знайти потрібні товари, оберіть категорію. Це допоможе відфільтрувати асортимент і заощадить ваш час.
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {models.map(model => (
                <Button
                  key={model}
                  variant='tag'
                  onClick={() => toggleSelection(model, setSelectedModels, selectedModels)}
                  className={`${selectedModels.includes(model) ? 'bg-[#121212] text-[#FDFDFD]' : ''}`}
                >
                  {model}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>колір</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-4 mt-2 p-2">
              {colors?.map((color, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name="color"
                    value={color.colorName}
                    id={`color${index}`}
                    className="hidden input-color"
                    checked={selectedColors === color.colorName ? true : false}
                    onChange={(e) => setSelectedColors(e.target.value)}
                  />
                  <label
                    htmlFor={`color${index}`}
                    className='cursor-pointer rounded-full relative'
                    style={{ border: color.colorName === 'white' ? '1px solid #E7E7E7' : `1px solid ${color.colorName}`, backgroundColor: color.colorName, width: '24px', height: '24px' }}
                  >
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className='border-b-0'>
          <AccordionTrigger>Ціна</AccordionTrigger>
          <AccordionContent >
            <div className="flex flex-wrap gap-2 mt-2">
              {prices.map(price => (
                <Button
                  key={price}
                  variant='tag'
                  onClick={() => toggleSelection(price, setSelectedPrice, selectedPrice)}
                  className={`${selectedPrice.includes(price) ? 'bg-[#121212] text-[#FDFDFD]' : ''}`}
                >
                  {price}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>


      <div className="border-t border-[#121212] px-6 py-8 flex">
        <Button onClick={clearFilters} variant="outline" className='font-semibold uppercase w-36 h-11 mr-2'>очистити</Button>
        <Button onClick={applyFilters} type="submit" className='uppercase w-60 h-11 mob:w-full'>застосувати</Button>
      </div>
    </>
  )
}