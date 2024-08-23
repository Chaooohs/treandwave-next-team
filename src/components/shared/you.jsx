import { Title } from "../ui"
import Heart from '../../../public/image/svg/heart2.svg'
import SwiperYou from "../ui/swiper-you"


export const YouSection = () => {
  return (
    <section>
      <div className="wrap">
        <div className="content">

          <div className="flex items-center gap-x-3">
            <Title text='Ви' size='xl' className='font-mul font-extrabold uppercase' />
            <Heart className='w-48' />
          </div>

        </div>
      </div>
      <SwiperYou />
    </section>
  )
}