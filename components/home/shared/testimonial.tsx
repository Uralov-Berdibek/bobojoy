import React from 'react';
import MyTypography from '../ui/my-typography';
import Image from 'next/image';
import { TestimonialData } from '../../../data/home/testimonial-data';

const Testimonial = () => {
  return (
    <div className='grid grid-cols-3 gap-1 mt-14 max-w-[1020px] w-full mx-auto'>
      {TestimonialData.map((item) => (
        <div key={item.id} className='bg-white p-[26px] rounded-[15px]'>
          <MyTypography text={item.text} style='text-[12px] text-[#272727] mb-4' />
          <Image src={item.raiting} alt='image' width={68} height={11} />
          <MyTypography text={item.name} style='text-[12px] text-[#272727] mt-1' />
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
