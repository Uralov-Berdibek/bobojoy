"use client";
import React from 'react'
import MInnerCard from '@/components/market/shared/m-inner-card'
import useAddBin from '../store/addbin'

interface ItemType {
    id: number;
    title: string;
    price: number;
  }
  

const Card: React.FC = () => {    

    const { data } = useAddBin()


    if (!data || !Array.isArray(data)) {
        return <div>Loading...</div>;
    }

  return (
    <section className='pt-[132px] bg-[#f5f5f5]'>
        <div className="cotainer">
            <div className='flex flex-col justify-between items-center gap-[30px]'>
                <div className='w-[1160px] flex justify-between items-center'>
                    <span className='font-mons font-normal text-[18px]'>Product</span>
                    <div className='w-[60%] flex justify-around items-center'>
                    <span className='font-mons font-normal text-[18px]'>Price</span>
                    <span className='font-mons font-normal text-[18px]'>QTY</span>
                    <span className='font-mons font-normal text-[18px]'>Total</span>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-start gap-[20px]'>
                {data.map((item:any) => (
                <MInnerCard item={item} key={item.id}/>
                 ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Card