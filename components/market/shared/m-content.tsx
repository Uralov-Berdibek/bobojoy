"use client"
import React, { useEffect, useState } from 'react'
import MCard from './m-card'
import Pagination from '@mui/material/Pagination';
import Link from 'next/link';
import useFetch from '@/app/(root)/market/store/fetch';


interface Product {
  id:number;
}

const MContent:React.FC <Product> = () => {

  const {data,loading,hasErrors,fetch} = useFetch();

  useEffect(()=>{
    fetch()
  },[fetch])

  const [currentPage,setCurrentPage]=useState(1)
  const [productPerPage] = useState(8)


  const lastIndex = currentPage * productPerPage
  const firstIndex = lastIndex - productPerPage
  const currentProduct = data.slice(firstIndex,lastIndex)

  const pageCount = Math.ceil(data.length / productPerPage);

  const handlePageChange = (even:any, value:any) => {
    setCurrentPage(value);
  };

  if (loading) return <p>Loading...</p>;
  if (hasErrors) return <p>Something went wrong!</p>;

  return (
    <section className='bg-[#f5f5f5] pt-[50px]'>
        <div className="container">
            <div className='flex flex-col justify-between items-center space-y-[30px]'>
                <span className='text-center underline font-mons font-normal text-[28px]'>Our pruduct</span>
                <div className='flex flex-wrap justify-between items-start gap-y-[29px]'>
                 {
                  currentProduct?.map((item:any,i)=>(
                    <Link href={`market/product/${item.id}`} key={i} passHref>
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