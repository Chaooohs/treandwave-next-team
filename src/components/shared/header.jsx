'use client'
import { usePathname } from "next/navigation"

import Link from "next/link"


export const Header = () => {
  const pathname = usePathname()

  return (
    <header>
      <div className="flex align-center h-20 border-b items-center gap-x-8 px-8 box-border">

        <Link href='/'
          className={`${pathname === '/' && 'text-[#D8001A]'} font-mont`}
        >
          home
        </Link>

        <Link href='/pageone'
          className={`${pathname === '/pageone' && 'text-[#D8001A]'} font-mul`}
        >
          one
        </Link>

        <Link href='/pagetwo'
          className={`${pathname === '/pagetwo' && 'text-[#D8001A]'} font-adi`}
        >
          two
        </Link>

      </div>
    </header>
  )
}