import React from 'react'
import Image from 'next/image';
import New from '@/components/New';
import MenuSidebar from '@/components/MenuSidebar';
const NewPage = () => {

   
  return (
    <>
      <section className="h-[2900px] md:h-[2000px]  xsm:h-[3050px] lg:h-[1750px] xl:h-[1820px] w-full">
      <MenuSidebar/>
   
      <div className=' absolute xl:left-[320px] xl:top-[182px] lg:top-[180px] left-[250px] hidden lg:flex '>
   
<Image src='/new-image.webp' alt='best seller' quality={100}  priority height={400} width={1100} className='h-[400px] w-[1100px]'/>


 </div>
   <div className=' relative    md:top-[160px] top-[100px] lg:hidden '>

   
   <Image src='/new-image.webp' alt='best seller' 
    quality={100}  priority height={400} width={1400} className=' md:w-[550px] h-[250px] relative  md:left-[200px] '/>


    </div>
    
    <div className='absolute top-[420px] md:top-[650px] md:left-[380px] left-[20px] '>

   

    <div className='lg:relative lg:w-full w-0'>
    <h2 className='relative xl:top-[-50px] w-[250px] xxxl:left-[-60px] xxxl:top-[-50px] xl:left-[-40px] md:left-[-170px] md:top-[-210px] lg:left-[-120px] lg:top-[-60px] lg:text-[48px] sm:top-[-50px] top-[-60px] xsm:text-[32px] text-[30px] text-black font-bold font-playfair xsm:top-[-70px] whitespace-nowrap'>New</h2>
    <div className="flex justify-between relative xl:top-[-30px] lg:top-[-40px] xxxl:top-[-20px] xxxl:left-[-80px] xl:left-[-60px] lg:left-[-80px] md:top-[-180px] xsm:top-[-30px] sm:top-[-30px]  md:left-[-160px] top-[-50px] lg:space-x-[450px] whitespace-nowrap xl:space-x-[300px]  md:space-x-[300px] xsm:space-x-[200px] sm:space-x-[120px] space-x-[50px]">
    <div className=' relative xl:left-[50px] font-lato text-black text-[14px]'>6 Products</div>
    <div className='font-lato text-black text-[14px] flex flex-row md:items-start items-center gap-[10px]'><span>Sort By: Recommended</span>
    <Image src='/DropDownvector.svg' alt='side-vector' width={14} height={14}
    className='w-[14px] h-[14px] rotate-90' /></div>
    
  </div>
</div>


<div className="relative xxxl:top-[-100px] xl:top-[-80px]  xl:left-[-85px] xxxl:left-0 lg:top-[-30px] md:top-[-180px] xsm:top-[-150px] top-[-100px] sm:top-[-140px] md:left-0 xsm:left-[50px] sm:left-[20px]">
<New/>
</div>
    </div>
  
   </section>
    </>
   
  )
}

export default NewPage;