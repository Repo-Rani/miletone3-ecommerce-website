import React from 'react'
import TrendingCards from './TrendingCards'


const HeroTrending = () => {
  return (
  <>
  <div className='bg-white flex flex-col items-center justify-center relative top-[-190px] py-[50px]'>
        <span className='text-center font-lato text-[16px] text-black tracking-widest'>Dont Miss Out</span>
        <h2 className='text-center text-black text-[48px] font-bold font-playfair'>
          Now <span className='font-normal italic'>Trending</span>
        </h2>
      </div>

    <div className="">
      <TrendingCards/>
    </div>
  </>
  )
}

export default HeroTrending