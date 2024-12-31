import React from 'react'
import { bestSellerPageData } from '../../data/data'
import BestSallerPageCard from './BestSallerPageCard'


const BestSellerPage = () => {
  return (
    <>
    <div className='relative top-[100px] grid grid-cols-1  md:grid-cols-3 
    '>
        {bestSellerPageData.map((item) => (
<BestSallerPageCard key={item.id} id={item.id} image={item.image} img={item.img} title={item.title} price={item.price} ratingNum={item.ratingNum} reviews={item.reviews} />
))
        }
    </div>
    </>
  )
}

export default BestSellerPage