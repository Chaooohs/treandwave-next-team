"use client"
import { useEffect, useRef, useState } from 'react'

import Cross from '../../../public/image/svg/cross.svg'
import { Title } from '../ui'

export const Accordion = ({ text }) => {
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
                  Комплект з трикотажу світло-сірого кольору, що складається зі шортів і худі. Шорти з високою посадкою, мають м'яку гумку на поясі та зав'язки для регулювання. Завдяки закругленому краю на шортах створюється легкий спортивний стиль. Худі з блискавкою на всю довжину, має капюшон та широкі рукави, що забезпечують комфорт і свободу рухів. Ідеально підходить для активного відпочинку або повсякденних справ.
                  Матеріал: 80% бавовна, 20% поліестер.
                </li>
                }
                {
                text === "оплата та доставка" &&
                <li className='p-2 hover:bg-color-divider tracking-[1px] '>
                  Усі замовлення, які виконуються на нашому сайті, можна оплатити за допомогою банківських карт. Підтримуємо VISA, MasterCard та інші платіжні системи. Або сплачуйте післяплатою при отриманні.
                </li>
                }
              </ul>
            </div>
          </div>
        </div>
      }
    </div >
  )
}
