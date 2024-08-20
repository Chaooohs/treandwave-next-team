'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import search from '../../../public/image/svg/search.svg'
import heart from '../../../public/image/svg/heart.svg'
import cart from '../../../public/image/svg/cart.svg'
import { SelectHeader } from "./selectHeader"



export const Header = () => {
  const pathname = usePathname()

  return (
    <header>
      <div className="wrap">
        <div className="flex align-center justify-between h-20 items-center gap-x-8 text-header">

          <div className="flex items-center gap-x-6">

            <SelectHeader />

            <Link href='/'
              className={`${pathname === '/' && 'text-[#D8001A]'} hover:text-[#D8001A]`}
            >
              Sale
            </Link>

            <Link href='/colections'
              className={`${pathname === '/colections' && 'text-[#D8001A]'} hover:text-[#D8001A]`}
            >
              Колекції
            </Link>

            <Link href='/about'
              className={`${pathname === '/about' && 'text-[#D8001A]'} hover:text-[#D8001A]`}
            >
              Про нас
            </Link>

          </div>

          <div className="font-mont font-semibold uppercase text-2xl">Logo</div>

          <div className="flex gap-x-6">
            <div className="flex gap-x-2">
              <Image src={search} alt="" width={24} height={24} />
              <Link href='/search'
                className={`${pathname === '/search' && 'text-[#D8001A]'} hover:text-[#D8001A]`}
              >
                Пошук
              </Link>
            </div>
            <div className="flex gap-x-2">
              <Image src={heart} alt="" width={24} height={24} />
              <Link href='/list'
                className={`${pathname === '/list' && 'text-[#D8001A]'} hover:text-[#D8001A]`}
              >
                Вішліст
              </Link>
            </div>
            <div className="flex gap-x-2">
              <Image src={cart} alt="" width={20} height={20} />
              <Link href='/cart'
                className={`${pathname === '/cart' && 'text-[#D8001A]'} hover:text-[#D8001A]`}
              >
                Кошик
                <span> (0)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}