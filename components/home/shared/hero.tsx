import React from 'react';
import MyButton from '../ui/my-button';
import MyTypography from '../ui/my-typography';
import Image from 'next/image';
import HeroImage from '../../../public/home-hero.png';

const Hero = () => {
  return (
    <div className='pt-[40px] flex justify-between flex-wrap max-w-[1020px] w-full mx-auto h-[100vh]'>
      <div>
        <MyButton
          text='Get started'
          style='text-white text-xl font-medium bg-blue-900 py-2 px-[18px] rounded-[5px]'
          link='#market'
        />
        <div className='mt-[200px]'>
          <div className='flex items-center'>
            <div className='border border-gray-400 w-[60px] h-[1px] mr-[20px]'></div>
            <MyTypography text='Lorem ipsum is simply' style='text-cyan-800 text-[18px]' />
          </div>
          <MyTypography
            text='Lorem ipsum is simply car other texts'
            style='text-[40px] font-medium w-[475px] mt-4'
          />
          <MyTypography
            text="I stumbled upon this tech store while searching for a new laptop, and I couldn't be"
            style='text-[21px] w-[475px] mt-4 text-[#272727]'
          />
        </div>
      </div>
      <Image
        className='w-[465px] h-[517px]'
        src='/home-hero.png'
        alt='image'
        width={200}
        height={100}
      />
    </div>
  );
};

export default Hero;
