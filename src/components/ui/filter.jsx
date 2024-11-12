'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Slider from "@radix-ui/react-slider";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useGetCategoryListQuery } from "@/redux/api/goodsApi";
import { setColor, setMaxPrice, setMinPrice } from "@/redux/features/filtersSlice";


export function Filter() {

  const { data: colors } = useGetCategoryListQuery("/color");
  let { color, minPrice, maxPrice } = useSelector((state) => state.filters);

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedColors, setSelectedColors] = useState('');
  const [selectedPrice, setSelectedPrice] = useState([]);
  const dispatch = useDispatch()
  const [isSlider, setIsSlider] = useState([100, 10000])

  useEffect(() => {
    setIsSlider([minPrice, maxPrice])
  }, [])


  // console.log(selectedSizes);
  // console.log(selectedModels);
  // console.log(selectedPrice);
  // console.log(selectedColors);




  const sizes = ["34", "36", "38", "40", "XS", "S", "M", "L", "XL"];
  const models = ["Футболки", "Боді", "Сукні Міні", "Джинси", "Палаццо", "Штани", "Худі", "Класичні Костюми", "Спортивні Костюми"];
  // const prices = ['до 750 UaH', 'до 1000 UaH', 'до 1500 UaH', 'до 1750 UaH', 'до 2000 UaH', 'до 2500 UaH']
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
    setIsSlider([100, 10000])
  };

  const applyFilters = () => {
    dispatch(setColor(selectedColors))
    dispatch(setMinPrice(isSlider[0]))
    dispatch(setMaxPrice(isSlider[1]))
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
            <div className="flex flex-wrap gap-2 mt-2 p-2 flex flex-col">
              <div className="flex gap-x-10 text-base font-semibold mb-4 mx-auto">
                <div>
                  вiд:
                  <div className="w-[80px] h-8 border border-[#4d4d4d] rounded flex items-center justify-center">{isSlider[0]}</div>
                </div>
                <div>
                  до:
                  <div className="w-[80px] h-8 border border-[#4d4d4d] rounded flex items-center justify-center">{isSlider[1]}</div>
                </div>
              </div>
              <form>
                <Slider.Root
                  className="relative flex h-5 w-[200px] touch-none select-none items-center mx-auto"
                  value={isSlider}
                  min={100}
                  max={10000}
                  step={100}
                  onValueChange={(value) => setIsSlider(value)}
                >
                  <Slider.Track className="relative h-[3px] grow rounded-full bg-[#e5e7eb]">
                    <Slider.Range className="absolute h-full rounded-full bg-[#121212]" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block size-4 rounded-[10px] bg-black shadow-[0_2px_10px] shadow-blackA4  focus:outline-none"
                    aria-label="Volume"
                  />
                  <Slider.Thumb
                    className="block size-4 rounded-[10px] bg-black shadow-[0_2px_10px] shadow-blackA4  focus:outline-none"
                    aria-label="Volume"
                  />
                </Slider.Root>
              </form>
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