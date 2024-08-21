import Link from "next/link"

import Search from '../../../public/image/svg/search.svg'
import Heart from '../../../public/image/svg/heart.svg'
import Cart from '../../../public/image/svg/cart.svg'
import { SelectHeader } from "./selectHeader"



export const Header = () => {

  return (
    <header>
      <div className="wrap">
        <div className="flex align-center justify-between items-center h-20 gap-x-8 text-header">

          <div className="flex items-center gap-x-6">

            <SelectHeader />

            <Link className="header-link text-red-500 hover:text-red-400 hover:border-red-400" href='/'>Sale</Link>
            <Link className="header-link" href='/colections'>Колекції</Link>
            <Link className="header-link" href='/about'> Про нас</Link>

          </div>

          <div className="font-mont font-semibold uppercase text-2xl">Logo</div>

          <div className="flex gap-x-6">

            <div className="header-link transit">
              <Search className='header-icon'/>
              <Link className="transit" href='/search'>Пошук</Link>
            </div>

            <div className="header-link">
              <Heart className='header-icon'/>
              <Link href='/list'>Вішліст</Link>
            </div>

            <div className="header-link">
              <Cart className='header-icon-cart'/>
              <Link href='/cart'>
                <span>Кошик</span>
                <span> (0)</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}