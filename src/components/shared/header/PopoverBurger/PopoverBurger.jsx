import { Popover, PopoverContent, PopoverTrigger, PopoverArrow, PopoverClose } from "@/components/ui/popover"

import CloseIcon from '../../../../../public/image/svg/close.svg'
import ArrowDown from '../../../../../public/image/svg/arrow-down.svg'
import { BurgerMenu } from "./BurgerMenu"

export const PopoverBurger = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <div
          className="flex items-center gap-x-1 header-link"
        >
          <span className="uppercase">каталог</span>
          <ArrowDown className='header-icon' />
        </div>
      </PopoverTrigger>
      <PopoverContent align='end' alignOffset={0} sideOffset={19} className='bg-[#f7f7f7] w-[596px]'>
        <PopoverClose
          className="z-50 border-none h-[24px] w-[24px] absolute top-[38px] right-[38px] outline-none cursor-pointer"
          aria-label="Close"
        >
          <CloseIcon />
        </PopoverClose>
        <BurgerMenu />
      </PopoverContent>
    </Popover>
  )
}