"use client"
import React, { useState } from 'react'
import MCard from './m-card'
import Pagination from '@mui/material/Pagination';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  price: number;
}

interface MContentProps {
  product: Product[];
}

const MContent: React.FC<MContentProps>  = ({product}) => {

  const [currentPage,setCurrentPage]=useState(1)
  const [productPerPage] = useState(8)


  const lastIndex = currentPage * productPerPage
  const firstIndex = lastIndex - productPerPage
  const currentProduct = product.slice(firstIndex,lastIndex)

  const pageCount = Math.ceil(product.length / productPerPage);

  const handlePageChange = (even:unknown, value:number) => {
    setCurrentPage(value);
  };



  return (
    <section className='bg-[#f5f5f5] pt-[50px]'>
        <div className="container">
            <div className='flex flex-col justify-between items-center space-y-[30px]'>
                <span className='text-center underline font-mons font-normal text-[28px]'>Our pruduct</span>
                <div className='flex flex-wrap justify-between items-start gap-y-[29px]'>
                 {
                  currentProduct.map((item)=>(
                    <Link href={`market/product/${item.id}`} key={item.id} passHref>
                    <MCard item={item}/>
                    </Link>
                  ))
                 }
                 <div className='min-w-full flex justify-center ' >
                    <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={handlePageChange}
                    />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MContent