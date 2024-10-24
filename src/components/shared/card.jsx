'use client'
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Price, Title } from "../ui"
import HeartIcon from '/public/image/svg/heart.svg'
import { addToWishList } from "@/redux/features/wishlistSlice"


export const Card = ({ el }) => {
  const path = usePathname();
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.wishlist);
  const [selectedColor, setSelectedColor] = useState(0);

  const handleColor = (colorId) => {
    setSelectedColor(colorId);
  }

  const fillHeart = wishlist?.find((card) => card.id === el?.id)

  return (
    <div className={`${path.substring(1) === '' ? 'lap:w-[224px] mob:w-[162px]' : null}`}>
      <Link href={`/catalog/by-slug/${el.slug}`} className="grid grid-rows-[0fr_60px_0fr]">

        <div className="card-img">
          <Image src={el?.colors[selectedColor]?.images[0]?.imageUrl} alt={el.title} width={322} height={400} className="card-img-top" />
          <Image src={el?.colors[selectedColor]?.images[1]?.imageUrl} alt={el.title} width={322} height={400} className="card-img-hide lap:hidden" />
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

      <div className="relative z-30 flex gap-x-2 mt-4">
        {
          el.colors?.map((el,index) => {
            return (
              <div
                key={index}
                className="w-6 h-6 cursor-pointer rounded"
                style={{ border: '1px solid #121212', backgroundColor: `${el.colorName}` }}
                onClick={() => handleColor(index)}
              >
              </div>
            )
          })
        }
      </div>

      <button
        className="absolute top-3 right-4 w-[52px] h-[52px] bg-[#21212114] rounded-full flex items-center justify-center lap:w-9 lap:h-9"
        onClick={() => dispatch(addToWishList(el))}
      >
        <HeartIcon className={`${fillHeart?.id === el.id && 'card-heart'} w-6 h-6 lap:w-5 lap:h-5`} />
      </button>
    </div>
  )
}