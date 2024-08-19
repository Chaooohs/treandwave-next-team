'use client'
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

import Link from "next/link"
import { Button } from "../ui"


export const Header = () => {
  const pathname = usePathname()

  return (
    <header>
      <div className="flex align-center h-20 border-b items-center gap-x-8 px-8 box-border">
        <Link href='/'>
          <Button
            variant='default'
            size='lg'
            className={`
              bg-blue-500 hover:bg-blue-400  rounded text-white 
              ${pathname === '/' && 'bg-blue-400'}
              `}
          >
            main
          </Button>
        </Link>
        <Link href='/pageone' >
          <Button
            variant='default'
            size='lg'
            className={`
              bg-blue-500 hover:bg-blue-400  rounded text-white 
              ${pathname === '/pageone' && 'bg-blue-400'}
              `}
          >
            pageone
          </Button>
        </Link>
        <Link href='/pagetwo'>
          <Button
            variant='default'
            size='lg'
            className={`
            bg-blue-500 hover:bg-blue-400  rounded text-white 
            ${pathname === '/pagetwo' && 'bg-blue-400'}
            `}
          >
            pagetwo
          </Button>
        </Link>
      </div>
    </header>
  )
}