import React from 'react'
import EyesCard from './EyesCard'
import { eyesData } from '../../data/data'
const Eyes = () => {
  return (
    <>
    <div className='relative top-[100px] grid grid-cols-1  md:grid-cols-3 
    '>
        {eyesData.map((item) => (
<EyesCard key={item.id} id={item.id} image={item.image}  title={item.title} price={item.price} ratingNum={item.ratingNum} reviews={item.reviews} />
))
        }
    </div>
    </>
  )
}

export default Eyes