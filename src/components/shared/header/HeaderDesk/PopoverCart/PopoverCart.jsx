import { Popover, PopoverContent, PopoverTrigger, PopoverArrow, PopoverClose } from "@/components/ui/popover"

import Cart from '/public/image/svg/cart.svg'
import CloseIcon from '/public/image/svg/close.svg'
import ShoppingCart from "./ShoppingCart/ShoppingCart"
import { useEffect, useRef, useState } from "react"

export const PopoverCart = ({ counter }) => {
  const ref = useRef()
  const [click, setClick] = useState(false)
  const [isOpen, setIsOpen] = useState()

  // useEffect(() => {
  //   const a = ref.current.dataset.state
  //   if (a === 'open') {
  //     setIsOpen(true)
  //   } else if (a === 'closed') {
  //     setIsOpen(false)
  //   }
  //   setClick(false)
  // }, [click, isOpen])

  return (
    <>
      {
        isOpen &&
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-[#00000026] z-40"></div>
      }
      <Popover>
        <PopoverTrigger ref={ref}>
          <div
            className="header-link"
            onClick={() => setClick(!false)}
          >
            <Cart className='header-icon-cart' />
            <div className="flex gap-x-1 uppercase">
              <span>Кошик</span>
              (<span className="w-4 inline-block text-center">{counter}</span>)
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent
          onPointerDownOutside={() => setClick(!false)}
          align='end'
          className='bg-white w-[440px]'
        >
          <PopoverArrow className="fill-white z-40 w-14 h-6" />
          <PopoverClose
            className="z-50 border-none h-[24px] w-[24px] absolute top-[38px] right-[38px] outline-none cursor-pointer"
            aria-label="Close"
            onClick={() => setClick(!false)}
          >
            <CloseIcon />
          </PopoverClose>
          <ShoppingCart counter={counter} />
        </PopoverContent>
      </Popover>
    </>
  )
}