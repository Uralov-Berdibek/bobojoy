"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { inner_image,inner_small_image,minus,plus } from '@/public/assets';
import MSimllar from '@/components/market/shared/m-simllar-product';
import useAddBin from '../../store/addbin';
import useFetch from '../../store/fetch';
import useCount from '../../store/counter';

interface ProductProps {
  params: {
    id: string;
  };
}

interface ProductData {
  title: string;
  price: number;
  description: string;
  category: string;
}

const Product: React.FC<ProductProps> = ({ params }) => {

  const [data, setData] = useState<ProductData | null>(null);
  const {addBin}   = useAddBin()
  const { filterByCategory } = useFetch(state => ({
    filterByCategory: state.filterByCategory,
  }));
  const {count,increment,decrement}= useCount()

  const fetchInner = async () => {
    try {
      const res = await axios.get<ProductData>(`https://fakestoreapi.com/products/${params.id}`);
      setData(res.data);
      filterByCategory(res.data.category);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };


  useEffect(()=>{
    fetchInner()
  },[params.id])

  

  const handleAddToCart = (data:any) => addBin(data);

  return(
    <section className='bg-[#f5f5f5] pt-[142px]'>
     <div className="container">
      <div className='flex justify-between items-start gap-[27px]'>
        <div className='flex flex-col justify-between items-start gap-[40px]'>
        <div className='flex justify-between items-center gap-[12px]'>
          <div className='flex flex-col justify-between items-start gap-[12px]'>
            <div className='py-[10px] px-[27px] bg-white'><Image src={inner_small_image} alt='inner_small_image'/></div>
            <div className='py-[10px] px-[27px] bg-white'><Image src={inner_small_image} alt='inner_small_image'/></div>
            <div className='py-[10px] px-[27px] bg-white'><Image src={inner_small_image} alt='inner_small_image'/></div>
            <div className='py-[10px] px-[27px] bg-white'><Image src={inner_small_image} alt='inner_small_image'/></div>
          </div>
          <div className='py-[40px] px-[115px] bg-white'><Image src={inner_image} alt='inner_image'/></div>
        </div>    
        <div className='flex flex-col justify-between items-start gap-[30px] '>
          <div className='flex flex-col justify-between items-start gap-[8px]'>
            <h4 className='font-mons font-normal text-[24px]'>Size</h4>
            <span className='font-mons font-light text-[24px] w-[268px]'>(V*SH*G), mm 66 * 160 * 106 Height, 280 g</span>
          </div>
          <div className='flex flex-col justify-between items-start gap-[8px]'>
            <h4 className='font-mons font-normal text-[24px]'>Trip</h4>
            <span className='font-mons font-light text-[20px]'>Material, plastic, titan</span>
          </div>
          <div className='flex flex-col justify-between items-start gap-[8px]'>
            <h4 className='font-mons font-normal text-[24px]'>Instructions</h4>
            <p className='w-[525px] font-mons font-light text-[20px]'>Не трогайте поврежденные или протекающие литий-ионные батареи. В случае утечки жидкости из внутренней батареи немедленно прекратите использование продукта и обратитесь за помощью в службу технической поддержки. Если жидкость попадет на вашу одежду, кожу или в глаза, немедленно промойте пораженный участок чистой водой и обратитесь к врачу. Аккумуляторная жидкость может вызвать слепоту.</p>
          </div>
        </div>
        </div>
        <div className='flex flex-col justify-between items-start gap-[25px]'>
          <div className='flex flex-col justify-between items-start gap-[30px]'>
            <h3 className='font-mons font-normal text-[38px]'>{data?.title}</h3>
            <span className='flex flex-col justify-between items-start gap-[12px]'>
              <span className='font-mons font-normal text-[28px]'>Description</span>
              <p className='w-[487px] font-mons font-light text-[22px]'>{data?.description}</p>

            </span>
          </div>
          <div className='flex justify-between items-center gap-[8px]'>
            <span className='w-[30px] h-[30px] bg-[#9867D0] rounded-[4px]'></span>
            <span className='w-[30px] h-[30px] bg-[#140095] rounded-[4px]'></span>
            <span className='w-[30px] h-[30px] bg-[#6A544C] rounded-[4px]'></span>
            <span className='w-[30px] h-[30px] bg-[#C36252] rounded-[4px]'></span>
            <span className='w-[30px] h-[30px] bg-[#6B7CFE] rounded-[4px]'></span>
          </div>
          <div className='flex flex-col justify-between items-start gap-[30px]'>
            <div className='flex flex-col justify-between items-start' >
              <div className='w-[115px] h-[39px] flex justify-around items-center bg-white rounded-[8px]'>
                <span className='w-[25px] h-[25px] flex justify-center items-center' onClick={decrement}><Image src={minus} alt='minus'/></span>
                <span className='w-[25px] h-[25px] flex justify-center items-center font-mons font-normal text-[24px]'>{count}</span>
                <span className='w-[25px] h-[25px] flex justify-center items-center' onClick={increment}><Image src={plus} alt='plus'/></span>
              </div>
              <span className='font-mons font-light text-[12px]'>В наличи 54</span>
            </div>
            <div className='flex flex-col justify-between items-start'>
              <h4 className='font-mons font-normal text-[28px]'>Price</h4>
              <div className='flex justify-between items-center gap-[40px]'>
               <div className='flex justify-between items-center gap-[20px]'>
               <span className='font-mons font-normal text-[28px]'>${data?.price}</span>
               <span className='font-mons font-normal text-[22px] text-[#FF0000]'>$150</span>
               </div>
               <span className='bg-[#00A72F] rounded-[50px] py-[8px] px-[18px] font-mons font-normal text-[18px] text-[#FFFFFF]'>50% Offer</span>
              </div>
            </div>
            <div className='flex flex-col justify-between items-start gap-[30px]'>
              <div className='flex justify-between items-center gap-[22px]'>
              <button className='py-[10px] px-[18px] font-mons font-normal text-[24px] text-[#140095] border-[#140095] border-[2px] rounded-[6px] hover:bg-[#140095] hover:text-[#FFFFFF]'>Buy 1 now</button>
              <button className='py-[10px] px-[18px] font-mons font-normal text-[24px] bg-[#140095] text-[#FFFFFF] border-[#140095] border-[2px] rounded-[6px] hover:bg-[#FFFFFF] hover:text-[#140095]' onClick={handleAddToCart}>Add to card</button>
              </div>
              <span className='py-[12px] px-[28px] bg-[#e5d9f6] rounded-[6px] font-mons font-light text-[24px]'>35 people bought on this week</span>
            </div>
          </div>
        </div>
      </div>
        <MSimllar/>
     </div>
    </section>
  )
};

export default Product;
