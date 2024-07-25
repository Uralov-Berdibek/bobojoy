"use client"
import React, { useEffect, useState } from 'react'
import MCard from './m-card'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MPaginatoin from './m-pagination';
import { log } from 'console';
import axios from 'axios';

const MContent = () => {

  const [product,setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage,setCurrentPage]=useState(1)
  const [productPerPage] = useState(4)

  useEffect(()=>{
    const fetch = async()=>{
      setLoading(true)
      const res = await axios.get('https://fakestoreapi.com/products')
      console.log(res.data);
      setProduct(res.data)
      setLoading(false)
    }
    fetch()
  },[])

  const lastIndex = currentPage * productPerPage
  const firstIndex = lastIndex - productPerPage
  const currentProduct = product.slice(firstIndex,lastIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <section className='bg-[#f5f5f5] pt-[50px]'>
        <div className="container">
            <div className='flex flex-col justify-between items-center space-y-[30px]'>
                <span className='text-center underline font-mons font-normal text-[28px]'>Our pruduct</span>
                <div className='flex flex-wrap justify-between items-start gap-y-[29px]'>
                 {
                  currentProduct?.map((item,index)=>(
                    <MCard item={item}/>
                  ))
                 }
                  {/* <Pagination count={10} /> */}
                 <MPaginatoin productPerPage={productPerPage} totalProducts={product.length} paginate={paginate}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MContent