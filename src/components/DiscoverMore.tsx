import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DiscoverMore = () => {
  return (

    <>

   <section className='h-[1500px]'>
   <div className='bg-white flex flex-col items-center justify-center relative top-[-150px] py-[50px]'>
   <span className='text-center font-lato text-[16px] text-black tracking-wider'>Must Visit</span>

        <h2 className='text-center text-black text-[48px] font-bold font-playfair'>
          Discover <span className='font-normal italic'></span>More
        </h2>
      </div>

   <div className='bg-black w-full h-[300px] relative flex justify-between top-[150px] '>
        <div className=' h-[500px] w-full flex justify-evenly  absolute '>
        <div className="relative">

<Image src="/eyes.avif" alt="eye-image" height={450} width={400} className='relative top-[-320px]'/>
<div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
      <span className="text-white text-[18px] font-bold font-lato">Shop</span>
      <h2 className="text-white text-[75px] font-semibold  tracking-normal font-playfair">Eyes</h2>
    </div>
    </div>
    <div className="relative">
    <Image src="/face.avif" alt="face-image" height={450} width={400} className='relative top-[-320px]'/>
<div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
      <span className="text-white text-[18px] font-bold font-lato">Shop</span>
      <h2 className="text-white text-[75px] font-semibold  tracking-normal font-playfair">Face</h2>
    </div>
    </div>

    <div className="relative">
<Image src="/lips.avif" alt="lips-image" height={450} width={400} className='relative top-[-320px]'/>
<div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
      <span className="text-white text-[18px] font-bold font-lato">Shop</span>
      <h2 className="text-white text-[75px] font-semibold  tracking-normal font-playfair">Lips</h2>
    </div>
    </div>
</div>


</div>
  

<div className='w-full h-[450px] relative top-[100px]'>
<Image
  src="/new-image.webp?updated=1"
  alt="makeup-image"
  quality={100}
  height={450}
  width={400}
  className="h-[450px] w-full  "
/>

<div className='flex justify-center gap-[150px] relative '>
<span className='relative left-[100px]  top-[-400px] tracking-wider font-lato text-[16px] text-white uppercase'>we believe</span>
          <h1 className=" relative left-[-150px]  top-[-370px] tracking-normal text-white text-[48px]  font-playfair font-bold leading-[60px]">Your <span className=' font-normal italic'>Skin</span><br /> Comes First </h1>
        
         

         <div className='relative  top-[-440px] flex flex-col justify-between '>
            <p className='font-lato text-[18px] text-white tracking-normal  w-[500px] h-[180px] relative'>I'm a paragraph. Click here to add your own text and edit me. It is easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I am a great place for you to tell a story and let your users know a little more about you.</p>
            <p className='font-lato text-[18px] tracking-normal text-white w-[500px] h-[180px]'>
            This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
            </p>
            <span><Link href="/contact"  className='font-lato text-white text-[18px] font-normal underline relative top-[20px]'>Join Us</Link></span>
          
         </div>
    </div>
    </div>

   </section>
</>
  )
}

export default DiscoverMore