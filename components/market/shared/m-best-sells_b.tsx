import React from 'react'
import Image from 'next/image'
import { content__image } from '@/public/assets'

const MBestSellsB = () => {
  return (
    <section className='bg-[#f5f5f5] pt-[110px]'>
        <div className="container">
            <div className='max-h-[350px] flex justify-between items-center bg-white px-[60px]'>
                <div className='mb-[50px]'>
                <Image src={content__image} alt='content__image'/>
                </div>
                   <div className='flex flex-col  justify-between items-end space-y-[35px]'>
                     <div className='flex flex-col justify-between items-end'>
                        <span className='text-right font-mons font-normal text-[40px]'>Headphone</span>
                        <p className='text-right font-mons font-normal test-[32px]'>Lorem ipsum is simply</p>
                     </div>
                     <span className='underline font-mons font-normal text-[22px] text-right'>View more</span>
                   </div>
            </div>
        </div>
    </section>
  )
}

export default MBestSellsB