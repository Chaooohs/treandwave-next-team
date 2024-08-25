import Image from "next/image"
import { Colors, Price, Sizes, Title } from "../ui"
import Trash from '../../../public/image/svg/trash.svg'



export const CardForCart = ({ el }) => {
  return (
    <>
      <div>
        <Image src={el.images[0]} alt={el.title} width={124} height={180} />
      </div>
      <div>
        <Title text={el.title} size="xs" className="font-semibold uppercase" />
        <Price price={el.price} discount={el.discount} sizeP='16px' sizeD='18px' />
        <div className="h-[36px] mt-4 flex items-center gap-x-2" >
          <span className="font-medium text-sm">Колір:</span>
          <Colors colors={el.color} width='24px' height='24px'/>
        </div>
        <div className="h-[36px] flex items-center gap-x-2">
          <span className="font-medium text-sm">Розмір:</span>
          <Sizes sizes={el.size} className='mt-3'/>
        </div>
      </div>
      <div className="header-icon">
        <button className="w-9 h-9 header-link">
          <Trash className='header-icon-shopping-cart'/>
        </button>
      </div>
    </>
  )
}