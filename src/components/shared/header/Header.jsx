'use client'
import Link from "next/link"
import { useSelector } from "react-redux"

import Search from '../../../../public/image/svg/search.svg'
import Heart from '../../../../public/image/svg/heart.svg'
import Man from '../../../../public/image/svg/man.svg'
import Logo from '../../../../public/image/svg/logo.svg'
import { PopoverBurger } from "./PopoverBurger"
import { PopoverCart } from "./PopoverCart"


export const Header = () => {
  const cart = useSelector(state => state.cart.cart)

  const counter = cart?.reduce((sum, el) => el.count + sum, 0);

  return (
    <header className="sticky z-40 top-12 bg-[#fdfdfd]">
      <div className="wrap">
        <div className="flex align-center justify-between items-center h-20 gap-x-8 text-header">

          <Link href='/'>
            <Logo />
          </Link>

          <nav className="flex items-center gap-x-6">
            <PopoverBurger />
            <Link className="header-link text-red-500 hover:text-red-400 hover:border-red-400" href='/sale'>Sale</Link>
            <Link className="header-link" href='/colections'>Колекції</Link>
            <Link className="header-link" href='/about'> Про нас</Link>
          </nav>

          <nav className="flex gap-x-6">

            <Link href='#!' className="header-link transit">
              <Man className='header-icon' />
            </Link>

            <Link href='/search' className="header-link transit">
              <Search className='header-icon' />
            </Link>

            <Link href='/wishlist' className="header-link">
              <Heart className='header-icon' />
            </Link>

            <PopoverCart counter={counter}/>
            
          </nav>
        </div>
      </div>
    </header>
  )
}