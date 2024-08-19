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
            className={`${pathname === '/' && 'text-[#D8001A]'}`}
          >
            main
          </Button>
        </Link>
        <Link href='/pageone' >
          <Button
            variant='default'
            size='lg'
            className={`${pathname === '/pageone' && 'text-[#D8001A]'}`}
          >
            pageone
          </Button>
        </Link>
        <Link href='/pagetwo'>
          <Button
            variant='default'
            size='lg'
            className={`${pathname === '/pagetwo' && 'text-[#D8001A]'}`}
          >
            pagetwo
          </Button>
        </Link>
      </div>
    </header>
  )
}