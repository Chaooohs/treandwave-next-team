import Image from "next/image"
import { Title } from "."
import avatar from '../../../public/image/jpg/avatar.jpg'
import laura from '../../../public/image/jpg/laura.jpg'
import Dots from '../../../public/image/svg/dots.svg'



export const CardYou = () => {
  return (
    <div className="w-full lap:w-[340px] mob:w-[182px]">
      <header>
        <div className="p-4 box-border flex items-center justify-between lap:p-3 mob:p-2">
          <div className="flex items-center gap-x-2">
            <Image src={avatar} alt="avatar" width={32} height={32} className="w-8 h-8 rounded-full lap:w-8 lap:h-68 mob:w-6 mob:h-6"/>
            <Title text='laura_perez' className='font-mont text-sm font-semibold leading-5 mob:text-xs'/>
          </div>
          <button>
            <Dots width={24} height={24}/>
          </button>
        </div>
      </header>
      <main>
        <Image src={laura} alt="img" width={340} height={340} className="w-full lap:w-[340px] mob:w-[182px]"/>
      </main>
    </div>
  )
}