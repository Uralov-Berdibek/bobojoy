"use client"
import React from 'react'

const MPagination = ({productPerPage,totalProducts, paginate}) => {

    const pageNumbers = []

    for(let i =1 ; i < Math.ceil(totalProducts / productPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <section>
        <div>
            {
                pageNumbers.map(number=>(
                    <li key={number}>
                        <span onClick={()=> paginate(number)}>
                            {number}
                        </span>
                    </li>
                ))
            }
            </div>  
    </section>
  )
}

export default MPagination