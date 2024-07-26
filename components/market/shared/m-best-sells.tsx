import React from 'react'
import MCard from './m-card'

const MBestSells = () => {
  return (
    <section className='bg-[#f5f5f5] pt-[178px]'>
        <div className="container">
          <div className='flex flex-col gap-[30px]'>
            <span className='underlane font-mons font-normal text-[28px] text-center'>Best sellers</span>
            <div className='flex  justify-center items-center space-x-[35px]'>
               <MCard/>
               <MCard/>
               <MCard/>
               <MCard/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default MBestSells