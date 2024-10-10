import { useDispatch } from "react-redux"

import { Counter } from "."
import Image from "next/image"
import { Title, PriceCart } from "../ui"
import Trash from '../../../public/image/svg/trash.svg'
import { removeFromCart } from "@/redux/features/cartSlice"


export const CardForCart = ({ el }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Image
        src={el.images}
        alt={el.title}
        width={124}
        height={180}
        className="w-[124px] h-[156px] object-cover"
      />

      <div>
        <Title text={el.title} className="text-base font-semibold uppercase" />

        <PriceCart
          price={el.price}
          discount={el.discount}
          sizeP='16px'
          sizeD='18px'
          count={el.count}
          className='mob:mt-1'
        />

        <div className=" mt-4 flex gap-x-2" >
          <span className="font-medium text-sm mb-2 lap:text-xs">Колір:</span>
          <div style={{width: '16px', height: '16px', backgroundColor: `${el.color}`, border: '1px solid #121212'}}></div>
        </div>

        <div className=" flex items-center gap-x-2">
          <span className="font-medium text-sm lap:text-xs">Розмір:</span>
          <div className="font-medium text-base uppercase">{el.size}</div>
        </div>

        <div className=" flex items-center gap-x-2">
          <span className="font-medium text-sm lap:text-xs">Кількість:</span>
          <Counter card={el} />
        </div>
      </div>

      <div className="header-icon">
        <button className="header-link" onClick={() => dispatch(removeFromCart(el))}>
          <Trash className='header-icon-shopping-cart' />
        </button>
      </div>
    </>
  )
}