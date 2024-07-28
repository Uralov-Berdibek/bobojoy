"use client"
import React from 'react'
import Image from 'next/image'
import { inner_card_image,inner_trash,plus,minus } from '@/public/assets'
import useCount from '@/app/(root)/market/store/counter';

interface Item {
  title: string;
  price: number;
}

interface MInnerCardProps {
  item: Item;
}

const MInnerCard: React.FC<MInnerCardProps> = ({item}) => {

  const {count,increment,decrement} = useCount()

  return (
    <div className='flex justify-between items-center gap-[20px]'>
     <div className='bg-[#FFFFFF] py-[17px] px-[27px]'>
        <Image src={inner_card_image} alt='inner_card_image'/>
     </div>
     <div className='flex justify-between items-center gap-[128px]'>
        <div className='flex flex-col justify-between items-start'>
            <h4 className='font-mons font-normal text-[22px]'>{item.title}</h4>
            <span className='font-mons font-normal text-[20px]'>#94667077715</span>
            <span className='font-mons font-normal text-[20px] text-[#a0a0a0]'>Color : white // extra full tire</span>
        </div>
        <div className='flex flex-col justify-between items-start gap-[12px]'>
            <span className='font-mons font-normal text-[20px]'>+25 charger</span>
            <span className='font-mons font-normal text-[20px]'>${item.price}</span>
        </div>
        <div className='w-[115px] h-[39px] flex justify-around items-center bg-white rounded-[8px]'>
                <span className='w-[25px] h-[25px] flex justify-center items-center' onClick={decrement}><Image src={minus} alt='minus'/></span>
                <span className='w-[25px] h-[25px] flex justify-center items-center font-mons font-normal text-[24px]'>{count}</span>
                <span className='w-[25px] h-[25px] flex justify-center items-center' onClick={increment}><Image src={plus} alt='plus'/></span>
         </div>
         <span className='font-mons font-normal text-[20px]'>86.999</span>
     </div>
     <span className='bg-[#140095] rounded-[4px] py-[10px] px-[10px]'><Image src={inner_trash} alt='inner_trash'/></span>
    </div>
  )
}

export default MInnerCard