"use client";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";

import { Price } from "../ui";
import HeartIcon from "/public/image/svg/heart.svg";
import { addToWishList } from "@/redux/features/wishlistSlice";
import { setColorCardIndex, setColorCardColor } from "@/redux/features/choiseCardColorSlice";
import { addColor } from "@/redux/features/textureSlice";

export const Card = ({ el }) => {
  const path = usePathname();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const color = useSelector((state) => state.filters.color);

  const handleColor = (colorId, colorName) => {
    dispatch(setColorCardIndex(colorId));
    dispatch(setColorCardColor(colorName));
    dispatch(addColor(colorName));
  };

  const handleDefaultColor = () => {
    dispatch(setColorCardColor(el?.colors[0]?.colorName));
    dispatch(setColorCardIndex(0));
    dispatch(addColor(el?.colors[0]?.colorName));
  };

  const fillHeart = wishlist?.find((card) => card.id === el?.id);

  return (
    <div className={`${path.substring(1) === "" ? "lap:w-[224px] mob:w-[162px]" : null}`}>
      <Link href={`/catalog/by-slug/${el.slug}`} className="grid grid-rows-[0fr_60px_0fr]" onClick={handleDefaultColor}>
        <div className="card-img">
          <Image
            src={el?.colors[0]?.images[0]?.imageUrl}
            alt={el.title}
            width={322}
            height={400}
            className="card-img-top"
          />
          <Image
            src={el?.colors[0]?.images[1]?.imageUrl}
            alt={el.title}
            width={322}
            height={400}
            className="card-img-hide lap:hidden"
          />
        </div>

        <div className=" card-font-size font-semibold uppercase mt-3 lap:text-base mob:text-xs">{el.title}</div>

        <Price
          price={el.price}
          discount={Math.floor(el.discountPercentage)}
          className="card-font-size mt-2 lap:text-sm mob:flex-col mob:items-start mob:text-sm"
        />

        <div className="absolute top-4 left-4 flex gap-x-1">
          {el.discountPercentage > 1 && (
            <div className=" py-1 px-2 bg-black flex items-center text-center justify-center">
              <span className="text-base font-medium text-white lap:text-xs">{`${Math.floor(
                el.discountPercentage
              )}%`}</span>
            </div>
          )}
          {el.bestseller === true && (
            <div className=" w-28 h-9	bg-black flex items-center text-center justify-center lap:w-20 lap:h-7">
              <span className="text-base font-medium text-white lap:text-xs	">Bestseller</span>
            </div>
          )}
        </div>
      </Link>

      <div className="relative z-30 flex gap-x-5 mt-4">
        {el.colors?.map((item, index) => {
          return (
            <Link href={`/catalog/by-slug/${el.slug}`} key={index}>
              <input
                type="checkbox"
                id={`color${index}`}
                value={item.colorName}
                className="hidden input-color"
                checked={color?.includes(item.colorName)}
              />
              <label
                onClick={() => handleColor(index, item.colorName)}
                htmlFor={`color${index}`}
                className='cursor-pointer rounded-full relative'
                style={{ border: item.colorName === 'white' ? '1px solid #E7E7E7' : `1px solid ${item.colorName}`, backgroundColor: item.colorName, width: '24px', height: '24px' }}
              >
              </label>
            </Link>
          );
        })}
      </div>

      <button
        className="absolute top-3 right-4 w-[52px] h-[52px] bg-[#21212114] rounded-full flex items-center justify-center lap:w-9 lap:h-9"
        onClick={() => dispatch(addToWishList(el))}>
        <HeartIcon className={`${fillHeart?.id === el.id && "card-heart"} w-6 h-6 lap:w-5 lap:h-5`} />
      </button>
    </div>
  );
};
