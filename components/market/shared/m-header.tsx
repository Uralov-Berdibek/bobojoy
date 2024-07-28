import Link from 'next/link';
import Image from 'next/image';
import { header__logo,header__search } from '@/public/assets'

const MHeader = () => {
  return (
    <header className='absolute top-[50px] bottom-0 left-0 right-0'>
      <div className='container'>
        <div className='max-w-full flex justify-between items-cente'>
          <Link href={'/market'}>
          <div>
          <Image
           src={header__logo}
           alt='logo'
           />
           </div>
           </Link>
          <nav className='flex justify-between items-center space-x-[33px] font-mons font-light text-[18px]'>
            <Link href={'/market'}className='hover:font-medium'>Home</Link>
            <Link href={'/market'}className='hover:font-medium'>Catalog</Link>
            <Link href={'/market/card'}className='hover:font-medium'>Card</Link>
            <Link href={'/market'}className='hover:font-medium'>Massage</Link>
            <Link href={'/market'}className='hover:font-medium'>Accaunt</Link>
            <Image
            src={header__search}
            alt='search'
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MHeader;
