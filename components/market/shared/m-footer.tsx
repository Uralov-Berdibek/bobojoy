import Image from 'next/image'
import { facebook,instagram,twitter,oval } from '@/public/assets'

const MFooter = () => {
  return (
      <section className='bg-[#f5f5f5] py-[70px]'>
        <div className="container">
            <div className="max-w-full flex-col justify-center items-center space-y-[50px]">
            <div className='flex flex-wrap justify-between items-center'>
              <div className='flex flex-col'>
                <span className='font-dm font-semibold'>Product</span>
                 <p className='font-dm font-medium'>Autocapture</p>
                 <p className='font-dm font-medium'>Data Governance</p>
                 <p className='font-dm font-medium'>Virtual Events</p>
                 <p className='font-dm font-medium'>Virtual Users</p>
                 <p className='font-dm font-medium'>Behavioral Analytics</p>
                 <p className='font-dm font-medium'>Connect</p>
                 
              </div>
              <div className='flex flex-col'>
                <span className='font-dm font-semibold'>Explore</span>
                 <p className='font-dm font-medium'>Resources</p>
                 <p className='font-dm font-medium'>Blog</p>
                 <p className='font-dm font-medium'>Documents</p>       
              </div>
              <div className='flex flex-col'>
                <span className='font-dm font-semibold'>Community</span>
                 <p className='font-dm font-medium'>Community Central</p>
                 <p className='font-dm font-medium'>Support</p>
                 <p className='font-dm font-medium'>Help</p>
                 <p className='font-dm font-medium'>My info</p>
              </div>
              <div className='flex flex-col'>
                <span className='font-dm font-semibold'>Company</span>
                 <p className='font-dm font-medium'>About us</p>
                 <p className='font-dm font-medium'>Partners</p>
                 <p className='font-dm font-medium'>Customers</p>
                 <p className='font-dm font-medium'>Contact us</p>
              </div>
            </div>
            <div className='flex flex-col justify-between items-center gap-[20px]'>
              <div className='border-dashed border-[1px] border-black font-dm font-semibold text-[14px] py-[11px] px-[26px] cursor-pointer'>
                Logo
              </div>
              <span className='font-dm font-normal text-center color-[#0A142F]'>© 2022 ABC. All rights reserved.</span>
              <div className='flex justify-between items-center gap-[20px]'>
                <Image src={facebook} alt='facebook'/>
                <Image src={twitter} alt='twitter'/>
                <Image src={instagram} alt='instagram'/>
                <Image src={oval} alt='oval'/>
              </div>
            </div>
            </div>
        </div>
      </section>
  )
}

export default MFooter