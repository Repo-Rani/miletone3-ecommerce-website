import React from 'react'
import NewCard from './NewCards'
import { newData } from '../../data/data'

const New = () => {
  return (
    <>
    <div className='relative top-[100px] grid grid-cols-1  md:grid-cols-3 
    '>
        {newData.map((item) => (
<NewCard key={item.id} id={item.id} image={item.image}  title={item.title} price={item.price} ratingNum={item.ratingNum} reviews={item.reviews} />
))
        }
    </div>
    </>
  )
}

export default New