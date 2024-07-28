"use client"
import React from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MCard from './m-card';
import useFetch from '@/app/(root)/market/store/fetch';
  

const MSimllar = () => {

  const {categories} = useFetch()

  return (
    <section className='pt-[50px]'>
        <div className="container">
        <div className='flex flex-col justify-between items-center gap-[30px]'>
        <span className='font-mons font-normal text-[28px] underline'>Similar products</span>
        <div className='max-w-[1160px]'>

        <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        // spaceBetween={35}
        breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='max-w-full'
        >
            {
                categories.map((item:any,i)=>(
                  <Link href={`market/product/${item.id}`} key={i}>
                    <SwiperSlide className='min-w-[262px]'><MCard item={item}/></SwiperSlide>
                  </Link>
                ))
            }
      </Swiper>
      </div>

        </div>
        </div>
        </section>
  )
}

export default MSimllar