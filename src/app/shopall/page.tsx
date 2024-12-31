import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ShopAll from '@/components/ShopAll'; 
 
const ShopAllPage = () => {

  const sidebarItems = [
    { href: "/shopall", label: "All Products" },
    { href: "/bestseller", label: "Best Seller" },
    { href: "/eyes", label: "Eyes" },
    { href: "/face", label: "Face" },
    { href: "/lips", label: "Lips" },
    { href: "/new", label: "New" },
  ];
  
  return (
    <>
    <section className='h-[6000px] w-full'>
    <aside className='w-[271px] h-[344px] absolute left-[80px] top-[182px] flex flex-col gap-4'>
  <div className='flex flex-row items-start gap-[51px] w-[217px] h-[24px]'>
    <span className='font-playfair font-bold text-[26px]  text-center text-black '>Brows By</span>
    <div className='w-[1px] h-[250px]   absolute top-[-70px] left-[115px] rotate-90 border-black  border-[0.5px] opacity-50   '></div>

  </div>


  <div className="w-[100px] h-[400px] flex justify-between flex-col relative top-[30px]">
      {sidebarItems.map((item, index) => (
        <span key={index}>
          <Link
            href={item.href}
            className="font-lato font-normal text-[18px] text-black hover:underline hover:scale-110 transition-all duration-300 ease-in-out"
          >
            {item.label}
          </Link>
        </span>
      ))}
    </div>

   </aside>
   <div className=' absolute left-[380px] top-[182px] '>

   
   <Image src='/shopall.webp' alt='best seller' quality={100}  priority height={400} width={1100} className='h-[400px] w-[1100px]'/>


    </div>
    <div className='absolute top-[650px] left-[380px] '>

   

    <div className='relative w-full'>
  <h2 className='text-[48px] text-black font-bold font-playfair'>Shop All</h2>
  <div className="flex justify-between relative top-[30px] space-x-[800px]">
    <div className='font-lato text-black text-[14px]'>6 Products</div>
    <div className='font-lato text-black text-[14px] flex flex-row items-start gap-[10px]'><span>Sort By: Recommended</span>
    <Image src='/DropDownvector.svg' alt='side-vector' width={14} height={14}
    className='w-[14px] h-[14px] rotate-90' /></div>
    
  </div>
</div>

<div>
    <ShopAll/>
</div>

</div>
  
   </section>
    </>
   
  )
}

export default ShopAllPage;