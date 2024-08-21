import Image from "next/image"
import { Title } from "."


export const Card = ({ el }) => {
  return (
    <>
      <Image src={el.imageOne} alt={el.title} width={"100%"} height={"auto"} />

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
    </>
  )
}