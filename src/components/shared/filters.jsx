'use client'
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import CloseIcon from '/public/image/svg/close.svg'
import { setOpenFilters } from "@/redux/features/openSlice";
import { Button, Title } from "@/components/ui";
import { Filter } from "../ui/filter";


export const Filters = () => {
  const ref = useRef()
  const dispatch = useDispatch()
  const filters = useSelector(state => state.open.filters)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (filters && !isOpen) {
      setTimeout(() => {
        ref.current.classList.add('cart-open');
        document.body.classList.add('no-scroll')
      }, 50);
    }
    else if (isOpen) {
      ref.current.classList.remove('cart-open');
      setTimeout(() => {
        dispatch(setOpenFilters(false))
      }, 350);
    }
  }, [isOpen, filters]);

  const handleClick = () => {
    setIsOpen(true)
    document.body.classList.remove('no-scroll')
  }


  return (
    <>
      {
        !isOpen &&
        <div
         className="fixed top-0 right-0 bottom-0 left-0 bg-[#00000026] z-40"
         onClick={handleClick}
         ></div>
      }

      <div
        ref={ref}
        className="cart absolute w-[440px] mob:w-full h-screen top-12 bottom-0 right-0 z-50 bg-white box-border pt-[5px] pb-16 overflow-auto">

        <div className="flex px-6 py-8 border-b border-[#121212] mb-6 mob:pt-14">
          <Title text='фільтрувати' className='text-2xl uppercase font-semibold box-border leading-none' />
          <button
            className="block ml-auto"
            onClick={handleClick}>
            <CloseIcon />
          </button>
        </div>
        <Filter/>
      </div>
    </>
  )
}