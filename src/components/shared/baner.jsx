'use client'

import 'swiper/css';
import 'swiper/css/effect-fade';

import BanerOne from '../../../public/image/jpg/baner-one.jpg'
import BanerTwo from '../../../public/image/jpg/baner-two.jpg'
import { Button, SwiperDemo, Title } from '../ui';

export const Baner = () => {
  return (
    <section>
      <div className='baner'>

        <SwiperDemo imgOne={BanerOne} imgTwo={BanerTwo} />

        <div className='absolute top-2/4 left-2/4 z-10 text-center translate-y-[-50%] translate-x-[-50%]'>

          <Title text='sale' size='2xl' className='font-mul font-extrabold uppercase text-white' />

          <p className='font-mont text-2xl font-semibold text-white mt-3'>до 50% знижки</p>

          <Button
            variant='default'
            className='w-48 h-14 font-mont font-semibold text-base uppercase mt-12'>
            Переглянути
          </Button>

        </div>
      </div>
    </section>
  )
}