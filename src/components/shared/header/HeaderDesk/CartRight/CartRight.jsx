import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import CloseIcon from '/public/image/svg/close.svg'
import { setOpenCart } from "@/redux/features/openSlice";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { Title } from "@/components/ui";


export const CartRight = ({ counter }) => {
  const ref = useRef()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.open.cart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (cart && !isOpen) {
      setTimeout(() => {
        ref.current.classList.add('cart-open');
        document.body.classList.add('no-scroll')
      }, 50);
    }
    else if (isOpen) {
      ref.current.classList.remove('cart-open');
      setTimeout(() => {
        dispatch(setOpenCart(false))
      }, 350);
    }
  }, [isOpen, cart]);

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
        className="cart absolute w-[708px] h-screen top-0 bottom-0 right-0 z-50 bg-white box-border pt-[5px] pb-16 overflow-auto">

        <div className="flex px-6 my-6">
          <Title text='Кошик' className='text-2xl uppercase font-semibold box-border leading-none' />
          <button
            className="block ml-auto"
            onClick={handleClick}>
            <CloseIcon />
          </button>
        </div>

        <ShoppingCart counter={counter} setIsOpen={setIsOpen} />

      </div>

    </>
  )
}