'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import { CardYou } from '.';

export default function SwiperYou() {
  return (
    <div className='flex'>
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        freeMode={true}
        centeredSlides={false}
        navigation={false}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, FreeMode, Pagination]}
        className="w-[100cqi] h-[45cqi] mb-14 swiper-pd mob:h-[280px] mob:mb-4"
      >
        <SwiperSlide><CardYou/></SwiperSlide>
        <SwiperSlide><CardYou/></SwiperSlide>
        <SwiperSlide><CardYou/></SwiperSlide>
        <SwiperSlide><CardYou/></SwiperSlide>
        <SwiperSlide><CardYou/></SwiperSlide>
      </Swiper>
    </div>
  );
}