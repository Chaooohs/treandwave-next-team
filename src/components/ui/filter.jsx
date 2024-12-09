'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Slider from "@radix-ui/react-slider";
import { IMaskInput } from 'react-imask';
import { useDebounce } from 'use-debounce';

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useGetCategoryListQuery } from "@/redux/api/goodsApi";
import { setColor, setMaxPrice, setMinPrice, setSize } from "@/redux/features/filtersSlice";


export function Filter() {
  const dispatch = useDispatch()

  const { data: colors } = useGetCategoryListQuery("/color");
  const { data: sizes } = useGetCategoryListQuery("/size");
  let { size, color, minPrice, maxPrice } = useSelector((state) => state.filters);

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [isSlider, setIsSlider] = useState([100, 10000])
  const [isSliderClick, setIsSliderClick] = useState(false)
  const [isPriceOne, setIsPriceOne] = useState()
  const [isPriceTwo, setIsPriceTwo] = useState()
  const [valueOne] = useDebounce(isPriceOne, 2000);
  const [valueTwo] = useDebounce(isPriceTwo, 2000);


  useEffect(() => {
    size &&
    setSelectedSizes(size)
  }, [size])


  useEffect(() => {
    setIsSlider([valueOne, valueTwo])
  }, [valueOne, valueTwo])


  useEffect(() => {
    setIsSlider([minPrice, maxPrice])
    setIsPriceOne(minPrice)
    setIsPriceTwo(maxPrice)
  }, [minPrice, maxPrice])


  // console.log(selectedSizes);
  // console.log(selectedModels);
  // console.log(selectedPrice);
  // console.log(selectedColors);




  const models = ["Футболки", "Боді", "Сукні Міні", "Джинси", "Палаццо", "Штани", "Худі", "Класичні Костюми", "Спортивні Костюми"];

  const toggleSelection = (item) => {
    setSelectedSizes(selected => selected.includes(item) ? selected.filter(i => i !== item) : [...selected, item]);
  };


  useEffect(() => {
    color &&
      setSelectedColors(color)
  }, [color])


  const handleColorChange = (item) => {
    setSelectedColors((prevCheckedItems) => {
      if (prevCheckedItems?.includes(item)) {
        return prevCheckedItems.filter((el) => el !== item);
      } else {
        return [...prevCheckedItems, item];
      }
    });
  };

  const handleSliderChange = (value) => {
    setIsSlider(value)
    setIsSliderClick(true)
  }


  const handlePriceFieldChangeOne = (value) => {
    setIsPriceOne(value)
    setIsSliderClick(false)
  }


  const handlePriceFieldChangeTwo = (value) => {
    setIsPriceTwo(value)
    setIsSliderClick(false)
  }


  const clearFilters = () => {
    dispatch(setColor([]))
    dispatch(setSize([]))
    dispatch(setMinPrice(100))
    dispatch(setMaxPrice(10000))
    setSelectedSizes([]);
    setSelectedModels([]);
  };


  const applyFilters = () => {
    dispatch(setSize(selectedSizes))
    dispatch(setColor(selectedColors))
    dispatch(setMinPrice(isSlider[0]))
    dispatch(setMaxPrice(isSlider[1]))
    const filters = {
      sizes: selectedSizes,
      models: selectedModels,
    };
  }


  return (
    <>
      <Accordion type="single" collapsible className="w-full px-6 overflow-y-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>Розмір</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2 mt-2">
              {sizes?.map(size => (
                <Button
                  key={size.id}
                  variant='tag'
                  onClick={() => toggleSelection(size.size)}
                  className={`w-[58px] ${selectedSizes.includes(size.size) ? 'bg-[#121212] text-[#FDFDFD]' : ''}`}
                >
                  {size.size}
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
              {colors?.map((el, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`color${index}`}
                    value={el.colorName}
                    className="hidden input-color"
                    checked={selectedColors?.includes(el.colorName) || color?.includes(el.colorName)}
                    onChange={(e) => handleColorChange(e.target.value)}
                  />
                  <label
                    htmlFor={`color${index}`}
                    className='cursor-pointer rounded-full relative'
                    style={{ border: el.colorName === 'white' ? '1px solid #E7E7E7' : `1px solid ${el.hex}`, backgroundColor: el.hex, width: '24px', height: '24px' }}
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
            <div className="flex gap-2 mt-2 p-2 flex-col">

              <div className="flex gap-x-10 text-base font-semibold mb-4 mx-auto">
                <label>
                  вiд:
                  <IMaskInput
                    autoFocus={true}
                    mask={Number}
                    value={`${isSliderClick ? isSlider[0] : isPriceOne}`}
                    onAccept={
                      (value) => handlePriceFieldChangeOne(+value)
                    }
                    placeholder='100'
                    min={0}
                    max={10000}
                    className="bg-transparent w-[80px] h-8 border border-[#4d4d4d] rounded flex items-center justify-center pl-2"
                  />
                </label>
                <label>
                  до:
                  <IMaskInput
                    mask={Number}
                    value={`${isSliderClick ? isSlider[1] : isPriceTwo}`}
                    onAccept={
                      (value) => handlePriceFieldChangeTwo(+value)
                    }
                    placeholder='10000'
                    min={0}
                    max={10000}
                    className="bg-transparent w-[80px] h-8 border border-[#4d4d4d] rounded flex items-center justify-center pl-2"
                  />
                </label>
              </div>


              <form>
                <Slider.Root
                  className="relative flex h-5 w-[200px] touch-none select-none items-center mx-auto"
                  value={isSlider}
                  min={100}
                  max={10000}
                  step={100}
                  onValueChange={(value) => handleSliderChange(value)}
                >
                  <Slider.Track className="relative h-[3px] grow rounded-full bg-[#e5e7eb]">
                    <Slider.Range className="absolute h-full rounded-full bg-[#121212]" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block size-4 rounded-[10px] bg-black focus:shadow-[0_2px_10px] focus:shadow-blackA4  focus:outline-none"
                    aria-label="Volume"
                  />
                  <Slider.Thumb
                    className="block size-4 rounded-[10px] bg-black focus:shadow-[0_2px_10px] focus:shadow-blackA4  focus:outline-none"
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