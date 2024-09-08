'use client'
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

import { BurgerMobile } from "./BurgerMobile"
import Search from '/public/image/svg/search.svg'
import BurgerIcon from '/public/image/svg/burger.svg'
import Logo from '/public/image/svg/logo.svg'
import Cart from '/public/image/svg/cart.svg'
import { setOpenBurger } from "@/redux/features/openSlice"



export const HeaderMobile = () => {
  const dispatch = useDispatch()
  const burger = useSelector(state => state.open.burger)
  const cart = useSelector(state => state.cart.cart)

  const counter = cart?.reduce((sum, el) => el.count + sum, 0);

  return (
    <header className="sticky z-40 top-12 bg-[#fdfdfd] hidden lap:block">
      <div className="wrap">
        <div className="h-14 grid grid-cols-3 items-center">

          {
            burger &&
            <BurgerMobile />
          }

          <div className="justify-self-start row-span-1 flex items-center gap-x-5">
            <button onClick={() => dispatch(setOpenBurger(true))}>
              <BurgerIcon />
            </button>
            <Link href='/search' className="header-link transit">
              <Search className='header-icon' />
            </Link>
          </div>

          <Link href='/' className="justify-self-center row-span-1">
            <Logo />
          </Link>

          <Link href='/checkout' className="header-link justify-self-end">
            <Cart className='header-icon-cart' />
            <div className="flex gap-x-1 uppercase font-semibold">
              (<span className="w-4 inline-block text-center">{counter}</span>)
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}