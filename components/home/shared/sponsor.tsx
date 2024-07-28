import React from 'react';
import { sponsorData } from '../../../data/home/sponsor-data';
import MyTypography from '../ui/my-typography';

const Sponsor = () => {
  return (
    <div className='bg-white w-full py-7'>
      <div className='max-w-[1280px] w-full mx-auto flex justify-between'>
        {sponsorData.map(({ id, name }) => (
          <MyTypography key={id} text={name} style='text-[24px]' />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
