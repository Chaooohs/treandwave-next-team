'use client'
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"

import Cart from '/public/image/svg/cart.svg'
import Search from '/public/image/svg/search.svg'
import Heart from '/public/image/svg/heart.svg'
import Man from '/public/image/svg/man.svg'
import Logo from '/public/image/svg/logo.svg'
import BurgerIcon from '/public/image/svg/burger.svg'
import { PopoverBurger } from "./PopoverBurger"
import { PopoverCart } from "./PopoverCart"
import { BurgerMobile } from "./BurgerMobile"


export const Header = () => {
  const ref = useRef()
  const cart = useSelector(state => state.cart.cart)
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isMobile = useMediaQuery({ maxWidth: 1023 })
  const [isOpen, setIsOpen] = useState(false)

  const counter = cart?.reduce((sum, el) => el.count + sum, 0);

  useEffect(() => {
    if (isMobile && isOpen) {
      ref.current.classList.add('burger-open');
      // setTimeout(() => {
      // }, 50);
    } else if (isMobile && !isOpen) {
      ref.current.classList.remove('burger-open');
      // setTimeout(() => {
      // }, 350);
    }
  }, [isOpen]);

  return (
    <header className="sticky z-40 top-12 bg-[#fdfdfd]">
      <div className="wrap">
        <div className="flex align-center justify-between items-center h-20 lg:h-[50px] gap-x-8 text-header
        lg:grid lg:grid-cols-3
        ">

          {isMobile &&
            <div
              ref={ref}
              className="burger fixed top-0 right-0 bottom-0 left-0 z-50 bg-white box-border py-16 px-6 overflow-auto">
              <BurgerMobile />
            </div>
          }

          {isMobile &&
            <div className="justify-self-start row-span-1 flex items-center gap-x-5">
              <button
                className="fixed z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                <BurgerIcon />
              </button>
              <Link href='/search' className="header-link transit lg:ml-12">
                <Search className='header-icon' />
              </Link>
            </div>
          }

          <Link href='/' className="lg:justify-self-center lg:row-span-1">
            <Logo />
          </Link>

          {isDesktop &&
            <nav className="flex items-center gap-x-6">
              <PopoverBurger />
              <Link className="header-link text-red-500 hover:text-red-400 hover:border-red-400" href='/sale'>Sale</Link>
              <Link className="header-link" href='/collections'>Колекції</Link>
              <Link className="header-link" href='/about'> Про нас</Link>
            </nav>}

          <nav className="flex gap-x-6 lg:justify-self-end lg:row-span-1">

            {isDesktop &&
              <>
                <Link href='#!' className="header-link transit">
                  <Man className='header-icon' />
                </Link>

                <Link href='/search' className="header-link transit">
                  <Search className='header-icon' />
                </Link>
              </>
            }

            <Link href='/wishlist' className="header-link">
              <Heart className='header-icon' />
            </Link>

            {isMobile &&
              <div
                className="header-link"
              // onClick={() => setClick(!false)}
              >
                <Cart className='header-icon-cart' />
                <div className="flex gap-x-1 uppercase">
                  (<span className="w-4 inline-block text-center">{counter}</span>)
                </div>
              </div>}

            {isDesktop &&
              <PopoverCart counter={counter} />}
          </nav>
        </div>
      </div>
    </header>
  )
}