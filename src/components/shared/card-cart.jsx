import { useDispatch } from "react-redux"

import { Counter } from "."
import Image from "next/image"
import { Colors, Sizes, Title, PriceCart } from "../ui"
import Trash from '../../../public/image/svg/trash.svg'
import { removeFromCart } from "@/redux/features/cartSlice"



export const CardForCart = ({ el }) => {
  const dispatch = useDispatch()

  return (
    <>
      <div className="w-32">
        <Image src={el.images[0]} alt={el.title} width={124} height={180} />
      </div>
      <div className="w-[11rem]">

        <Title text={el.title} className="text-base font-semibold uppercase" />

        <PriceCart price={el.price} discount={el.discount} sizeP='16px' sizeD='18px' count={el.count} />

        <div className="h-[36px] mt-4 flex items-center gap-x-2" >
          <span className="font-medium text-sm mb-2">Колір:</span>
          <Colors colors={el.color} width='24px' height='24px' />
        </div>

        <div className="h-[36px] flex items-center gap-x-2">
          <span className="font-medium text-sm">Розмір:</span>
          <Sizes sizes={el.size} />
        </div>

        <div className="h-[36px] flex items-center gap-x-2">
          <span className="font-medium text-sm">Кількість:</span>
          <Counter card={el} />
        </div>
      </div>

      <div className="header-icon">
        <button className="w-9 h-9 header-link" onClick={() => dispatch(removeFromCart(el.id))}>
          <Trash className='header-icon-shopping-cart' />
        </button>
      </div>
    </>
  )
}