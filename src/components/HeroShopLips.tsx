'use client';

import Image from 'next/image';

const ShopLips = () => {
    return (
      <section className='w-full h-[810px]  relative top-[-110px] flex justify-between items-center '>
  {/* Left side */}
      <div className='bg-black h-[810px] w-1/2'>
         <div className='w-[300px] h-[480px]   relative left-[220px] top-[200px] flex flex-col justify-between'>
          <span className='text-[16px] font-lato text-white tracking-[2px] uppercase relative '>Hot & Spicy</span>
          <h1 className=' relative  top-[-50px] font-playfair font-bold text-[48px] text-white w-[285px] h-[129px] whitespace-nowrap'>Most <span className='italic font-normal'>Vibrant</span> <br /> Lips in Town </h1>
          <p className='relative top-[-65px] text-[18px] font-lato text-white'>I'm a paragraph. Click here to add your own text and edit me. I am a great place for you to tell a story and let your users know a little more about you.</p>
          <button className='w-[150px] h-[50px] relative top-[-90px] left-[5px] px-4 py-2 bg-white text-black  rounded-sm hover:bg-black hover:text-white hover:border-[1px] hover:border-white hover:scale-105 transition-all whitespace-nowrap ease-in-out duration-300 font-lato '>shop Lips</button>
  
          </div> 
  
      </div>
  
  

      {/* Right Side */}
      <div className=" h-[600px] w-1/2 top-[-70px] relative overflow-hidden flex items-center justify-center">
        
          <Image
            src="/lipstickbigimage.webp"
            alt="lipstick-image"
            height={579}
            width={400}
            quality={100}
            className="h-[450px] w-auto"
          />
        </div>
     
    </section>
  );
};

export default ShopLips;
