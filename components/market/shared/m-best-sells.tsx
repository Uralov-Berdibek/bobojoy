"use client"
import React from 'react'
import MCard from './m-card'
import useFetch from '@/app/(root)/market/store/fetch';
import Link from 'next/link';


const MBestSells = () => {

  const { filtered } = useFetch()
  


  return (
    <section className='bg-[#f5f5f5] pt-[178px]'>
        <div className="container">
          <div className='flex flex-col gap-[30px]'>
            <span className='underlane font-mons font-normal text-[28px] text-center'>Best sellers</span>
            <div className='flex  justify-center items-center space-x-[35px]'>
            {filtered?.map((item:any, index) => (
              <Link href={`market/product/${item.id}`} key={index} passHref>
              <MCard item={item} />
              </Link>
            ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default MBestSells