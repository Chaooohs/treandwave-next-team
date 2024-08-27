'use client'
import { Popover, PopoverContent, PopoverTrigger, PopoverArrow, PopoverClose } from "@/components/ui/popover"

import CloseIcon from '../../../../../public/image/svg/close.svg'
import ArrowDown from '../../../../../public/image/svg/arrow-down.svg'
import { BurgerMenu } from "./BurgerMenu"
import { useEffect, useRef, useState } from "react"


export const PopoverBurger = () => {
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
  // }, [click])

  const a = ref.current.dataset.state
  if (a === 'open') {
    setIsOpen(true)
  } else if (a === 'closed') {
    setIsOpen(false)
  }

  return (
    <>
      {
        isOpen &&
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-[#00000052] z-40"></div>
      }
      <Popover>
        <PopoverTrigger ref={ref}>
          <div
            className="flex items-center gap-x-1 header-link"
            onClick={() => setClick(!false)}
          >
            <span className="uppercase">каталог</span>
            <ArrowDown className='header-icon' />
          </div>
        </PopoverTrigger>
        <PopoverContent align='end' sideOffset={19} className='w-[586px] bg-[#f7f7f7] rounded-none'>
          <BurgerMenu />
          <PopoverClose
            className="z-50 border-none h-[24px] w-[24px] absolute top-[38px] right-[38px] outline-none cursor-pointer"
            aria-label="Close"
            onClick={() => setClick(!false)}
          >
            <CloseIcon />
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </>
  )
}