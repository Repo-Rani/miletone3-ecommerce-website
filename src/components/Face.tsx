import React from 'react'
import FaceCard from './FaceCard'
import { faceData } from '../../data/data'
const Face = () => {
  return (
    <>
    <div className='relative top-[100px] grid grid-cols-1  md:grid-cols-3 
    '>
        {faceData.map((item) => (
<FaceCard key={item.id} id={item.id} image={item.image}  title={item.title} price={item.price} ratingNum={item.ratingNum} reviews={item.reviews} />
))
        }
    </div>
    </>
  )
}

export default Face