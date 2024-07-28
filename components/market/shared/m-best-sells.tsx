import React from 'react'
import MCard from './m-card'

const mockItems = [
  { title: 'Product 1', price: 29.99 },
  { title: 'Product 2', price: 39.99 },
  { title: 'Product 3', price: 49.99 },
  { title: 'Product 4', price: 59.99 },
];

const MBestSells = () => {
  return (
    <section className='bg-[#f5f5f5] pt-[178px]'>
        <div className="container">
          <div className='flex flex-col gap-[30px]'>
            <span className='underlane font-mons font-normal text-[28px] text-center'>Best sellers</span>
            <div className='flex  justify-center items-center space-x-[35px]'>
            {mockItems.map((item, index) => (
              <MCard key={index} item={item} />
            ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default MBestSells