import React from 'react'
import { bestSellerData } from '../../data/data'
import BestSeller from './BestSeller'
const BestSellerCard = () => {
  return (
    <>
    <div className='relative top-[-220px] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-[3px]
    '>
        {
bestSellerData.map((item) => (
<BestSeller key={item.id} id={item.id} image={item.image} img={item.img} title={item.title} price={item.price} ratingNum={item.ratingNum} reviews={item.reviews} />
))
        }
    </div>
    </>
  )
}

export default BestSellerCard