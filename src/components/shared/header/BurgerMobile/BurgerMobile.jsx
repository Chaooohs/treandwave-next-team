'use client'
import Link from 'next/link'
import Logo from '/public/image/svg/logo.svg'

export const BurgerMobile = () => {
  return (
    <>
      <Logo className='ml-auto' />
      <nav>
        <div className="font-semibold uppercase text-base inline-flex gap-y-4 flex-col mt-12">
          <Link href='/catalog' className="header-link">Усі</Link>
          <Link href='/sale' className="header-link">Sale</Link>
          <Link href='/collections' className="header-link">Колекції</Link>
          <Link href='#!' className="header-link">Бестселери</Link>
          <Link href='#!' className="header-link">Сукні</Link>
          <Link href='#!' className="header-link">Костюми</Link>
          <Link href='#!' className="header-link">футболки та Топи</Link>
        </div>
      </nav>
    </>
  )
}