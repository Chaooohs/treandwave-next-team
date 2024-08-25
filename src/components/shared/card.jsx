'use client'
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"

import { Price, Title } from "../ui"
import HeartCard from '../../../public/image/svg/heart-card.svg'
import { addToWishList } from "@/redux/features/wishlistSlice"
import Link from "next/link"


export const Card = ({ el }) => {
  const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist.wishlist)



  const fillHeart = wishlist?.find((card) => card.id === el?.id)
  return (
    <>
      <Link href={`${el.title}`}>

        <div className="card-img">
          <Image src={el.images[0]} alt={el.title} width={"100%"} height={"auto"} />
          <Image src={el.images[1]} alt={el.title} width={"100%"} height={"auto"} className="card-img-hide" />
        </div>

        <Title text={el.title} size="xs" className="font-mont font-semibold uppercase mt-3" />

        <Price
          price={el.price}
          discount={el.discount}
          sizeP='text-lg'
          sizeD='text-base'
          className='mt-2'
        />

        <div className="absolute top-4 left-4 flex gap-x-1">
          {
            el.discoutn > 0 &&
            <div className=" w-16 h-9	bg-black flex items-center text-center justify-center">
              <span className="text-base font-medium text-white">{`${el.discoutn}%`}</span>
            </div>
          }
          {
            el.best === true &&
            <div className=" w-28 h-9	bg-black flex items-center text-center justify-center">
              <span className="text-base font-medium text-white">Bestseller</span>
            </div>
          }
        </div>

      </Link>
      <button
        className="absolute top-3 right-4 w-[52px] h-[52px] bg-[#21212114] rounded-full flex items-center justify-center"
        onClick={() => dispatch(addToWishList(el))}
      >
        <HeartCard className={`${fillHeart?.id === el.id && 'card-heart'}`} />
      </button>
    </>
  )
}