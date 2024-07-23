import React from 'react'
import Image from 'next/image'
import { content_image, card_bin,card_starts } from '@/public/assets'

const MCard = () => {
  return (
<div className='flex-col justify-start items-center space-y-3'>
    <div className='h-[280px] w-[262px] flex justify-center items-center bg-[#FFFFFF] py-[56px] px-[33px]'>
        <Image
        src={content_image}
        alt='content_image'
        />
    </div>
    <span className='font-mons  text-[22px] font-normal'>Brend Headphone</span>
    <span>
        <Image
        src={card_starts}
        alt='card_starts'
        />
    </span>
    <div className='flex justify-between items-center'>
       <span className='font-mons font-normal text-[22px]'>$49.999</span>
       <Image
        src={card_bin}
        alt='card_bin'
        className='bg-white'
        />
    </div>
</div>
  )
}

export default MCard