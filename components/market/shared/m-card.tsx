import Image from 'next/image'
import { card, card_bin,card_starts } from '@/public/assets'

interface MCardProps {
  item: {
    title: string;
    price: number;
  };
}

const MCard: React.FC<MCardProps>= ({item}) => {
  return (
<div className='flex-col justify-start items-center space-y-3'>
    <div className='h-[280px] w-[262px] flex justify-center items-center bg-[#FFFFFF] py-[56px] px-[33px]'>
        <Image
        src={card}
        alt='content_image'
        />
    </div>
    <span className='font-mons  text-[22px] font-normal'>{item?.title.length > 10 ? item.title.slice(0,10) : item?.title }</span>
    <span>
        <Image
        src={card_starts}
        alt='card_starts'
        />
    </span>
    <div className='flex justify-between items-c  enter'>
       <span className='font-mons font-normal text-[22px]'>${item?.price}</span>
       <Image
        src={card_bin}
        alt='card_bin'
        className='bg-white'
        />
    </div>
</div>
  )
}

export default MCard