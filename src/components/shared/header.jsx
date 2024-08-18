'use client'
import { usePathname } from "next/navigation"

import Link from "next/link"
import { Button } from "../ui"


export const Header = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <header>
      <div className="flex align-center h-20 border-b items-center gap-x-8 px-8 box-border">
        <Link href='/' className={`${pathname === '/' && 'bg-red-500 text-white'}`}>
          <Button variant='outline' size='lg'>
            main
          </Button>
        </Link>
        <Link href='/pageone' className={`${pathname === '/pageone' && 'bg-red-500 text-white'}`}>
          <Button variant='outline' size='lg'>
            pageone
          </Button>
        </Link>
        <Link href='/pagetwo' className={`${pathname === '/pagetwo' && 'bg-red-500 text-white'}`}>
          <Button variant='outline' size='lg'>
            pagetwo
          </Button>
        </Link>
      </div>
    </header>
  )
}