import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
  <> 
    <div className="relative w-full h-screen top-[100px]">
  <Image
    src="/hero-image.avif" 
    alt="hero-image"
    layout="fill" 
    objectFit="cover" 
    quality={100} 
    priority 
  
  />
</div>



<span className='relative left-[170px] top-[-520px] tracking-wide font-lato text-[16px] text-white'>NEW RELEASE</span>
          <h1 className=" relative  top-[-510px] tracking-normal text-white text-[75px] ml-[165px] font-playfair font-bold leading-[80px]">Metallics <br />
          <span className=' font-normal italic'>Shine</span> on </h1>
          <p className="text-[18px] font-lato text-white relative left-[170px] top-[-480px] leading-[30px] w-[305px] h-[84px] ">Get to know our new eyeshadow palettes with a glossy finish, smooth lightweight feel and 10 hour stay-on.</p>
          <button className="w-[130px] h-[45px] relative left-[170px] top-[-440px] hover:bg-white hover:text-[#735555] hover:scale-105 duration-300 transition-all ease-in-out border-[2px] border-white bg-transparent text-white rounded-sm">
           <Link href="/shopall"> Shop</Link>
          </button>
         
            </>   

  )
}

export default Banner