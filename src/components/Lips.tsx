import React from 'react'
import LipsCard from './LipsCard'
import { lipsData } from '../../data/data'
const Lips = () => {
  return (
    <>
    <div className='relative top-[100px] grid grid-cols-1  md:grid-cols-3
    '>
        {lipsData.map((item) => (
<LipsCard key={item.id} id={item.id} image={item.image}  title={item.title} price={item.price} ratingNum={item.ratingNum} reviews={item.reviews} />
))
        }
    </div>
    </>
  )
}

export default Lips