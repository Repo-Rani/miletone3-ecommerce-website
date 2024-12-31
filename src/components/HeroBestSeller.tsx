import React from 'react'
import BestSellerCard from './BestSellerCard'
import Link from 'next/link'

const HeroBestSeller = () => {
  return (
    <>
    <div className='bg-white flex flex-col items-center justify-center relative top-[-210px] py-[50px]'>
        <span className='text-center font-lato text-[16px] text-black tracking-wider'>Must Have</span>
        <h2 className='text-center text-black text-[48px] font-bold font-playfair'>
          Best <span className='font-normal italic'>Sellers</span>
        </h2>
      </div>

    <div className="">
      <BestSellerCard/>
    </div>
    
    <button className='w-[200px] h-[50px] relative top-[-200px] left-[660px] px-9 py-2 bg-transparent text-black border-[1px] border-black rounded hover:bg-black hover:text-white hover:scale-105 transition-all whitespace-nowrap ease-in-out duration-300 '>
      <Link href="/bestsellers">Shop Best Sellers</Link></button>

    </>
  )
}

export default HeroBestSeller