'use client'
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

import Search from '/public/image/svg/search.svg'
import Heart from '/public/image/svg/heart.svg'
import Man from '/public/image/svg/man.svg'
import Logo from '/public/image/svg/logo.svg'
import Cart from '/public/image/svg/cart.svg'
import ArrowDown from '/public/image/svg/arrow-down.svg'
import { setOpenBurger, setOpenCart } from "@/redux/features/openSlice"
import { CartRight } from "./CartRight"
import { BurgerLeft } from "./BurgerLeft"
import { Filters } from "../../filters"


export const HeaderDesk = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)
  const CartSide = useSelector(state => state.open.cart)
  const burger = useSelector(state => state.open.burger)
  let filters = useSelector((state) => state.open.filters);


  const counter = cart?.reduce((sum, el) => el.count + sum, 0);


  return (
    <header className="sticky z-40 top-12 bg-[#fdfdfd] lap:hidden">
      <div className="wrap">
        <div className="flex align-center justify-between items-center h-20 gap-x-8 text-header">

          <Link href='/' className="lg:justify-self-center lg:row-span-1">
            <Logo />
          </Link>

          <nav className="flex items-center gap-x-6">
            <div
              className="flex items-center gap-x-1 header-link"
              onClick={() => dispatch(setOpenBurger(true))}
            >
              <span className="uppercase">каталог</span>
              <ArrowDown className='header-icon' />
            </div>
            <Link className="header-link text-red-500 hover:text-red-400 hover:border-red-400" href='/sale'>Sale</Link>
            <Link className="header-link" href='/collections'>Колекції</Link>
            <Link className="header-link" href='/about'> Про нас</Link>
          </nav>

          <nav className="flex gap-x-6 lg:justify-self-end lg:row-span-1">
            <Link href='#!' className="header-link transit">
              <Man className='header-icon' />
            </Link>

            <Link href='/search' className="header-link transit">
              <Search className='header-icon' />
            </Link>

            <Link href='/wishlist' className="header-link">
              <Heart className='header-icon w-[26px] h-[26px]' />
            </Link>

            <div
              className="header-link"
              onClick={() => dispatch(setOpenCart(true))}
            >
              <Cart className='header-icon-cart' />
              <div className="flex gap-x-1 uppercase">
                <span>Кошик</span>
                (<span className="w-4 inline-block text-center">{counter}</span>)
              </div>
            </div>
          </nav>
        </div>
      </div>
      {
        burger &&
        <BurgerLeft />
      }
      {
        CartSide &&
        <CartRight counter={counter} />
      }
      {
        filters &&
        <Filters />
      }
    </header>
  )
}