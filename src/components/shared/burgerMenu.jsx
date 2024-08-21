import { useDispatch } from 'react-redux'

import { openBurger } from '@/redux/features/openSlice'
import ArrowDown from '../../../public/image/svg/arrow-down.svg'

export const BurgerMenu = () => {
  const dispatch = useDispatch()
  return (
    <div className="absolute top-0 left-0 z-50 bg-red-300 w-[590px] h-screen box-border pt-5 pl-[3cqi] ">

      <div
        className="flex items-center gap-x-1 header-link border-none"
        onClick={() => dispatch(openBurger(false))}
      >
        <span className="">каталог</span>
        <ArrowDown className='header-icon rotate-180' />
      </div>

    </div>
  )
}