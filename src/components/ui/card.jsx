'use client'
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"

import { Title } from "."
import HeartCard from '../../../public/image/svg/heart-card.svg'
import { addToWishList } from "@/redux/features/wishlistSlice"


export const Card = ({ el }) => {
  const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist.wishlist)

  const fillHeart = wishlist?.find((card) => card.id === el?.id)

  return (
    <>
      <div className="wrapper-img">
        <Image src={el.imageOne} alt={el.title} width={"100%"} height={"auto"} />
        <Image src={el.imageTwo} alt={el.title} width={"100%"} height={"auto"} className="img-hide" />
      </div>

      <Title text={el.title} size="xs" className="font-mont font-semibold uppercase mt-3" />

      <div className="flex items-center gap-x-2 mt-2">
        {
          el.discoutn > 0
            ?
            <>
              <span
                className="font-mont font-medium text-base uppercase line-through text-gray-400">
                {`${el.price} uah`}
              </span>
              <span className="font-mont font-medium text-lg uppercase">
                {`${(el.price / 100) * el.discoutn} uah`}
              </span>
            </>
            :
            <span className="font-mont font-medium text-lg uppercase">
              {`${el.price} uah`}
            </span>
        }
      </div>

      <div className="absolute top-4 left-4 flex gap-x-1">
        {
          el.discoutn > 0 &&
          <div className=" w-16 h-9	bg-black flex items-center text-center justify-center">
            <span className="font-mont text-base font-medium text-white">{`${el.discoutn}%`}</span>
          </div>
        }
        {
          el.best === true &&
          <div className=" w-28 h-9	bg-black flex items-center text-center justify-center">
            <span className="font-mont text-base font-medium text-white">Bestseller</span>
          </div>
        }
      </div>

      <button
        className="absolute top-6 right-8"
        onClick={() => dispatch(addToWishList(el))}
      >
        <HeartCard className={`${fillHeart?.id === el.id && 'fill-black'}`} />
      </button>
    </>
  )
}