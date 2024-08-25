import { useDispatch } from "react-redux"

import Minus from '../../../public/image/svg/minus.svg'
import Plus from '../../../public/image/svg/plus.svg'
import { setDecrement, setIncrement } from "@/redux/features/cartSlice"



export const Counter = ({card}) => {
  const dispatch = useDispatch()

  return (
    <div className=''>
      <div className='flex items-center'>
        <button
          className='w-9 h-9 p-2 box-border'
          onClick={() => dispatch(setDecrement(card.id))}
        >
          <Minus />
        </button>
        <span
          className='w-9 h-9 flex items-center justify-center text-sm font-medium font-mont'
        >
          {
            card.count
          }
        </span>
        <button
          className='w-9 h-9 p-2 box-border'
          onClick={() => dispatch(setIncrement(card.id))}
        >
          <Plus />
        </button>
      </div>
    </div>
  )
}