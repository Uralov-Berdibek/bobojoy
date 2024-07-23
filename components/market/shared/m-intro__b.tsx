import React from 'react'
import Image from 'next/image'
import {intro_b_image1,intro_b_image2,intro_b_image3} from '@/public/assets'

const MIntroB = () => {
  return (
    <section className='relative bottom-[-78px] left-0 right-0 '>
        <div className="container">
            <div className='flex justify-between py-5 px-5 space-x-[19px]  bg-[#FFFFFF;] drop-shadow-2xl'>
            <div>
            <Image
                src={intro_b_image1}
                alt='intro_image1'
                />
            </div>
            <div>
                <Image
                src={intro_b_image2}
                alt='intro_image1'
                />
            </div>
            <div>

                <Image
                width={360}
                height={240}
                src={intro_b_image3}
                alt='intro_image1'
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default MIntroB