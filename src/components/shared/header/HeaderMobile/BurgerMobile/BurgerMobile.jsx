'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '/public/image/svg/logo.svg'
import CloseIcon from '/public/image/svg/close.svg'
import { setOpenBurger } from '@/redux/features/openSlice'

export const BurgerMobile = () => {
  const ref = useRef();
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const burger = useSelector(state => state.open.burger)

  useEffect(() => {
    if (burger && !isOpen) {
      setTimeout(() => {
        ref.current.classList.add('burger-open');
        document.body.classList.add('no-scroll')
      }, 50);
    }
    else if (isOpen) {
      ref.current.classList.remove('burger-open');
      setTimeout(() => {
        dispatch(setOpenBurger(false))
      }, 350);
    }
  }, [isOpen, burger]);

  const handleClick = () => {
    setIsOpen(true)
    document.body.classList.remove('no-scroll')
  }

  return (
    <div
      ref={ref}
      className="burger absolute h-screen top-0 right-0 bottom-0 left-0 z-50 bg-white box-border pt-[20px] pb-16 px-6 overflow-auto"
    >
      <div className='burger-mobile-grid'>
        <Logo />
        <button onClick={handleClick}>
          <CloseIcon />
        </button>
      </div>
      <nav>
        <div className="font-semibold uppercase text-base inline-flex flex-col gap-y-4 mt-12 mob:text-sm mob:gap-y-3">
          <Link href='/catalog' className="header-link" onClick={handleClick}>Усі</Link>
          <hr></hr>
          <Link href='/sale' className="header-link" onClick={handleClick}>Sale</Link>
          <Link href='/collections' className="header-link" onClick={handleClick}>Колекції</Link>
          <Link href='/bestseller' className="header-link" onClick={handleClick}>Бестселери</Link>
          <hr></hr>
          <Link href='/about' className="header-link text-gray-700" onClick={handleClick}>Про нас</Link>
          <Link href='/about/contacts' className="header-link text-gray-700" onClick={handleClick}>Контакти</Link>
          <Link href='/wishlist' className="header-link text-gray-700" onClick={handleClick}>Ваш вішліст</Link>
          <hr></hr>
          <Link href='/login' onClick={handleClick} >Вхiд</Link>
        </div>
      </nav>
    </div>
  )
}