"use client";
import Link from 'next/link'
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { intro__image} from '@/public/assets'

const MIntro = () => {
  
return (
    <section>
        <div className="container">
            <div className="max-w-full flex justify-between items-center pt-[64px]">
             <div className='max-w-[471px] flex flex-col justify-center items-start space-y-[50px]'>
               <div>
              <h1 className='font-mons font-normal text-[48px]'>Blue Headphone</h1>
               <p className="font-mons font-normal text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus illum modi.</p>
               </div>
               <Link href={'/'} className='underline font-mons font-normal text-[22px]'>view now</Link>
             </div>
             <div className='max-w-[425px] pt-[50px]'>
             
            <Swiper 
           autoplay={{
             delay: 4500,
             disableOnInteraction: false,
            }}
            spaceBetween={20}
            modules={[Autoplay]}
            className="max-w-full"
            >
        <SwiperSlide className=''><Image src={intro__image} alt='intro_image' /></SwiperSlide>
        <SwiperSlide className=''><Image src={intro__image} alt='intro_image' /></SwiperSlide>
        <SwiperSlide className=''><Image src={intro__image} alt='intro_image' /></SwiperSlide>
        </Swiper>
        </div>
            </div>
            </div>
    </section>
  )
}

export default MIntro    