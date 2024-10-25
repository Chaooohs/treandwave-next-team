import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import CloseIcon from '/public/image/svg/close.svg'
import Logo from '/public/image/svg/logo.svg'
import { setOpenBurger } from "@/redux/features/openSlice";
import { BurgerMenu } from "./BurgerMenu";
import { setCategory, setSubCategory } from "@/redux/features/filtersSlice";


export const BurgerLeft = () => {
  const ref = useRef()
  const dispatch = useDispatch()
  const burger = useSelector(state => state.open.burger)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (burger && !isOpen) {
      setTimeout(() => {
        ref.current.classList.add('burger-open');
        document.body.classList.add('no-scroll')
      }, 50);
    }
    else if (isOpen) {
      ref.current.classList.remove('burger-open');
      setTimeout(() => {
        dispatch(setOpenBurger(false))
      }, 350);
    }
  }, [isOpen, burger]);

  const handleClick = () => {
    setIsOpen(true)
    document.body.classList.remove('no-scroll')
    dispatch(setCategory(''))
    dispatch(setSubCategory(''))
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
        className="burger absolute w-[596px] h-screen top-0 bottom-0 left-0 z-50 bg-white box-border pt-[5px] pb-16 lap:overflow-auto">

        <div className="grid grid-cols-3 items-center px-6 my-6">
          <button
            className="block mr-auto"
            onClick={handleClick}>
            <CloseIcon />
          </button>
          <Logo className='' />
        </div>
        <BurgerMenu handleClick={handleClick}/>
      </div>
    </>
  )
}