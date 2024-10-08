"use client"
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link';

import Cross from '/public/image/svg/cross.svg'
import VisaLogoIcon from '/public/image/svg/visa-logo.svg';
import MasterCardIcon from '/public/image/svg/mastercard-logo.svg';
import ApplepayIcon from '/public/image/svg/applepay-logo.svg';
import { Title } from '../ui'

export const Accordion = ({ text, description }) => {
  const [isToggle, setIsToggle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    setIsOpen(true)

    if (isToggle) {
      setTimeout(() => {
        ref.current.classList.add("accordion-open")
      }, 50)
    }

    else if (!isToggle && ref.current) {
      ref.current.classList.remove("accordion-open")
      setTimeout(() => {
        setIsOpen(false)
      }, 550)
    }

  }, [isToggle])

  return (
    <div
      onClick={() => setIsToggle(!isToggle)}
      className='relative max-w-xl w-full cursor-pointer'
    >
      <div className='flex justify-between mt-3 h-[36px]'>
        <Title
          text={text}
          size='xs'
          className='uppercase font-semibold'
        />
        <Cross style={isToggle ? { transform: 'rotate(45deg)' } : null} />
      </div>
      {
        isOpen &&
        <div className="accordion" ref={ref} >
          <div className="accordion-hidden">
            <div className='bg-white' >
              <ul className='list-none m-0 p-0'>
                {
                  text === "опис товару" &&
                  <li className='p-2 hover:bg-color-divider tracking-[1px] '>
                    {description}
                  </li>
                }
                {
                  text === "оплата та доставка" &&
                  <li className='p-2 hover:bg-color-divider tracking-[1px] '>
                    <p>
                      Усі замовлення, які виконуються на нашому сайті, можна оплатити за допомогою банківських карт. Підтримуємо VISA, MasterCard та інші платіжні системи. Або сплачуйте післяплатою при отриманні.
                    </p>
                    <div className='mt-3 flex items-center gap-x-5 border-b pb-6'>
                      <VisaLogoIcon />
                      <MasterCardIcon />
                      <ApplepayIcon />
                    </div>
                    <p className='mt-6'>
                      Ми доставляємо товари по всій Україні  за допомогою служби «Нова Пошта». Відправка замовлення здійснюється  протягом 1-2 днів, за наявності товару на складі. У разі відсутності  товару в наявності, наш менеджер повідомить вам срок виготовлення виробу  та доставки.
                    </p>
                  </li>
                }
                {
                  text === "повернення та обмін" &&
                  <p>
                    Протягом 14 днів з моменту покупки ви можете обміняти або повернути товар, який не підійшов. Більш детально ознайомитися з умовами можна у розділі&#160;
                    <Link
                      href='/about/exchange-and-return'
                      className='underline hover:text-[#6a6a6a] duration-300'
                    >
                      «Повернення та обмін».
                    </Link>
                  </p>
                }
              </ul>
            </div>
          </div>
        </div>
      }
    </div >
  )
}
