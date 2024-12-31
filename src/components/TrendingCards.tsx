import React from 'react'
import { trendingData } from '../../data/data'
import Trending from './Trending'
const TrendingCards = () => {
  return (
    <>
    <div className='relative top-[-200px] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-[3px]
    '>
        {
trendingData.map((item) => (
<Trending key={item.id} id={item.id} image={item.image}  title={item.title} price={item.price} ratingNum={item.ratingNum} reviews={item.reviews} />
))
        }
    </div>
    </>
  )
}

export default TrendingCards