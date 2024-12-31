import React from 'react'
import ShopAllCard from './ShopAllCard'
import { shopallData } from '../../data/data'
const ShopAll = () => {
  return (
    <>
    <div className='relative top-[100px] grid grid-cols-1  md:grid-cols-3
    '>
        {shopallData.map((item) => (
<ShopAllCard key={item.id} id={item.id} image={item.image}  title={item.title} price={item.price} ratingNum={item.ratingNum} reviews={item.reviews} />
))
        }
    </div>
    </>
  )
}

export default ShopAll