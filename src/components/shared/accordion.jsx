"use client"
import { useEffect, useRef, useState } from 'react'

import Cross from '../../../public/image/svg/cross.svg'
import { Title } from '../ui'

export const Accordion = ({text}) => {
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
      <div className='flex justify-between mb-3 h-[52px]'>
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
                <li className='p-3 hover:bg-color-divider tracking-[1px] '>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui laudantium eligendi maiores earum excepturi. Harum excepturi labore enim omnis, distinctio, esse amet quas, in libero vero doloremque officia reprehenderit similique!
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
    </div >
  )
}
