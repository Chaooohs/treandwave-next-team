import { Popover, PopoverContent, PopoverTrigger, PopoverArrow, PopoverClose } from "@/components/ui/popover"

import Cart from '../../../../../public/image/svg/cart.svg'
import CloseIcon from '../../../../../public/image/svg/close.svg'
import ShoppingCart from "./ShoppingCart/ShoppingCart"

export const PopoverCart = ({counter}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="header-link">
          <Cart className='header-icon-cart' />
          <div className="flex gap-x-1 uppercase">
            <span>Кошик</span>
            (<span className="w-4 inline-block text-center">{counter}</span>)
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent align='end' className='bg-[#f7f7f7] w-[440px]'>
        <PopoverArrow className="fill-[#f7f7f7] z-40 w-14 h-6" />
        <PopoverClose
          className="z-50 border-none h-[24px] w-[24px] absolute top-[38px] right-[38px] outline-none cursor-pointer"
          aria-label="Close"
        >
          <CloseIcon />
        </PopoverClose>
        <ShoppingCart counter={counter} />
      </PopoverContent>
    </Popover>
  )
}