'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export const SwiperDemo = ({imgOne, imgTwo}) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      effect={'fade'}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      className="w-full"
    >
      <SwiperSlide >
        <Image src={imgOne} alt='img' />
      </SwiperSlide>
      <SwiperSlide >
        <Image src={imgTwo} alt='img' />
      </SwiperSlide>
    </Swiper>
  )
}