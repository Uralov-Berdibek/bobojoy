import Image from 'next/image';
import React from 'react';
import MyTypography from '../ui/my-typography';
import MyButton from '../ui/my-button';

const Link = () => {
  return (
    <div id='market' className='max-w-[1020px] w-full mx-auto mt-14 transition'>
      <div className='flex items-center'>
        <Image
          className='w-[510px] rounded-[15px] mr-14'
          src='/market.png'
          alt='Market'
          width={510}
          height={312}
        />
        <div>
          <div className='mb-6 text-start'>
            <MyTypography text='E-BOZOR' style='text-[32px] text-[#0C005B]' />
            <MyTypography
              text="I stumbled upon this tech store while searching for a new laptop, and I couldn't be "
              style='text-[21px] text-[#272727] font-[200]'
            />
          </div>

          <div className='flex justify-start'>
            <MyButton
              text='Get started'
              style='text-white text-xl font-medium bg-blue-900 py-2 px-[18px] rounded-[5px]'
              link='/market'
            />
          </div>
        </div>
      </div>
      <div className='flex items-center mt-6'>
        <div>
          <div className='mb-6 text-end'>
            <MyTypography text='E-Ticket' style='text-[32px] text-[#0C005B]' />
            <MyTypography
              text="I stumbled upon this tech store while searching for a new laptop, and I couldn't be "
              style='text-[21px] text-[#272727] font-[200]'
            />
          </div>
          <div className='flex justify-end'>
            <MyButton
              text='Get started'
              style='text-white text-xl font-medium bg-blue-900 py-2 px-[18px] rounded-[5px]'
              link='/ticket'
            />
          </div>
        </div>
        <Image
          className='w-[510px] rounded-[15px] ml-14 text-end'
          src='/market.png'
          alt='Market'
          width={510}
          height={312}
        />
      </div>
    </div>
  );
};

export default Link;
