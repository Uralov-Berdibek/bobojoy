"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MIntro,MIntroB,MBestSells, MBestSellsB, MContent, MFooter } from "@/components/market/shared/m-pages";


const Home = () => {

  const [product,setProduct] = useState([])


  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetch();
  }, []);


  return(
   <>
   <MIntro/>
    <MIntroB/>
    <MBestSells/>
    <MBestSellsB/>
    <MContent product={product}/>
    <MFooter/>
   </>
  )
};

export default Home;
