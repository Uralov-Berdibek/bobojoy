"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MCard from './m-card';


const mockItems = [
    { title: 'Product 1', price: 29.99 },
    { title: 'Product 2', price: 39.99 },
    { title: 'Product 3', price: 49.99 },
    { title: 'Product 4', price: 59.99 },
    { title: 'Product 5', price: 29.99 },
    { title: 'Product 6', price: 39.99 },
    { title: 'Product 7', price: 49.99 },
    { title: 'Product 8', price: 59.99 }
  ];
  

const MSimllar = () => {
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
                mockItems.map((item,i)=>(
                    <SwiperSlide className='min-w-[262px]' key={i}><MCard item={item}/></SwiperSlide>
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