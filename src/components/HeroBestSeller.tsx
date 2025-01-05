import React from 'react'
import BestSellerCard from './BestSellerCard'
import Link from 'next/link'

const HeroBestSeller = () => {
  return (
    <>
    <div className='bg-white flex flex-col items-center justify-center relative top-[-350px] md:top-[-210px] py-[50px] '>
        <span className='text-center font-lato text-[16px] text-black tracking-wider'>Must Have</span>
        <h2 className='text-center text-black md:text-[48px] text-[32px] font-bold font-playfair'>
          Best <span className='font-normal italic'>Sellers</span>
        </h2>
      </div>

    <div className="">
      <BestSellerCard/>
    </div>
    
    <button className='lg:w-[200px] w-[160px] h-[50px] relative xl:top-[-170px]  md:top-[-150px] md:left-[325px] sm:left-[120px]  xsm:left-[135px] xsm:top-[-330px] top-[-340px] left-[80px]
    sm:top-[-335px] lg:left-[420px]  lg:top-[-150px] xl:left-[620px] xxxl:left-[660px] lg:px-9 lg:py-2 bg-transparent text-black border-[1px] border-black rounded hover:bg-black hover:text-white hover:scale-105 transition-all whitespace-nowrap ease-in-out duration-300 '>
      <Link href="/bestsellers">Shop Best Sellers</Link></button>

    </>
  )
}

export default HeroBestSeller