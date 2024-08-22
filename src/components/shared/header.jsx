'use client'
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { openBurger } from "@/redux/features/openSlice"

import Search from '../../../public/image/svg/search.svg'
import Heart from '../../../public/image/svg/heart.svg'
import Cart from '../../../public/image/svg/cart.svg'
import ArrowDown from '../../../public/image/svg/arrow-down.svg'
import { BurgerMenu } from "."


export const Header = () => {
  const dispatch = useDispatch()
  const burger = useSelector(state => state.open.burger)


  return (
    <header className="relative">
      <div className="px-[3cqi]">
        <div className="flex align-center justify-between items-center h-20 gap-x-8 text-header">

          <nav className="flex items-center gap-x-6">

            <div
              className="flex items-center gap-x-1 header-link"
              onClick={() => dispatch(openBurger(!false))}
            >
              <span className="">каталог</span>
              <ArrowDown className='header-icon' />
            </div>

            {
              burger &&
              <BurgerMenu />
            }


            <Link className="header-link text-red-500 hover:text-red-400 hover:border-red-400" href='/sale'>Sale</Link>
            <Link className="header-link" href='/colections'>Колекції</Link>
            <Link className="header-link" href='/about'> Про нас</Link>

          </nav>

          <Link href='/'>
            <div className="font-mont font-semibold uppercase text-2xl">Logo</div>
          </Link>

          <nav className="flex gap-x-6">

            <Link href='/search' className="header-link transit">
              <Search className='header-icon' />
              <span className="transit">Пошук</span>
            </Link>

            <Link href='/wishlist' className="header-link">
              <Heart className='header-icon' />
              <span >Вішліст</span>
            </Link>

            <Link href='/cart' className="header-link">
              <Cart className='header-icon-cart' />
              <div>
                <span>Кошик</span>
                <span> (0)</span>
              </div>
            </Link>

          </nav>
        </div>
      </div>
    </header>
  )
}