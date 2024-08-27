import { useDispatch } from 'react-redux'

import { openBurger } from '@/redux/features/openSlice'
import ArrowDown from '../../../public/image/svg/arrow-down.svg'

export const BurgerMenu = () => {
  const dispatch = useDispatch()
  return (
    <div className="absolute top-0 left-0  bg-white w-[590px] h-screen box-border pt-5">

      <div className="wrap">
        {/* <div
          className="flex items-center gap-x-1 header-link border-none"
          onClick={() => dispatch(openBurger(false))}
        >
          <span className="font-semibold">каталог</span>
          <ArrowDown className='header-icon rotate-180' />
        </div> */}
      </div>

    </div>
  )
}