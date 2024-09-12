'use client'
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"

import { Price, Title } from "../ui"
import HeartIcon from '../../../public/image/svg/heart.svg'
import { addToWishList } from "@/redux/features/wishlistSlice"
import Link from "next/link"


export const Card = ({ el }) => {
  const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist.wishlist)

  const fillHeart = wishlist?.find((card) => card.id === el?.id)

  return (
    <>
      <Link href={`/products/${el.id}`} >

        <div className="card-img">
          <Image src={el.images[0]} alt={el.title} width={322} height={400} className="card-img-top" />
          <Image src={el.images[1]} alt={el.title} width={322} height={400} className="card-img-hide lap:hidden" />
        </div>

        <Title text={el.title} size="xs" className="font-mont font-semibold uppercase mt-3 lap:text-base mob:text-xs" />

        <Price
          price={el.price}
          discount={Math.floor(el.discountPercentage)}
          sizeP='text-lg'
          sizeD='text-base'
          className='mt-2 lap:text-sm mob:flex-col mob:items-start mob:text-sm'
        />

        <div className="absolute top-4 left-4 flex gap-x-1">
          {
            el.discountPercentage > 1 &&
            <div className=" py-1 px-2 bg-black flex items-center text-center justify-center">
              <span className="text-base font-medium text-white lap:text-xs">{`${Math.floor(el.discountPercentage)}%`}</span>
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
        className="absolute top-3 right-4 w-[52px] h-[52px] bg-[#21212114] rounded-full flex items-center justify-center lap:w-9 lap:h-9"
        onClick={() => dispatch(addToWishList(el))}
      >
        <HeartIcon className={`${fillHeart?.id === el.id && 'card-heart'} w-6 h-6 lap:w-5 lap:h-5`} />
      </button>
    </>
  )
}