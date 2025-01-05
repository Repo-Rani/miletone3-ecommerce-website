'use client'
import React from 'react'
import Image from 'next/image'
import {  TrendingProps } from '../../types/type'
import { IoIosStar } from "react-icons/io";
import { useState } from "react";
import { IoIosStarHalf } from "react-icons/io";
import Link from 'next/link';



const Trending = ({
  id,
  image,

  title,
  ratingNum,
  price,
  reviews,
}: TrendingProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" relative mx-auto   ">

    <div
      className="xxxl:w-[300px] md:w-[290px] sm:w-[370px] w-[320px]  lg:w-[330px] xl:w-[285px] md:h-[350px]  h-[485px] flex flex-col justify-center items-center  px-10 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      {/* Product Image */}
      <Link href={`trending/${id}`} passHref>

      <Image
        src={ image} 
        alt="product-image"
        width={300}
        height={300}
        className=" w-[300px] md:h-[235px] h-[300px] transition-transform duration-300 ease-in-out"
      />
      </Link>

      {/* Product Details */}
   
        <h3 className="text-[18px] mt-[10px] font-lato font-medium text-black whitespace-nowrap">{title}</h3>
        <span className='font-lato text-[14px] text-[#5e5e5e]'>${price}</span>
        <div className='flex justify-between w-[135px] h-[14px] '>
        <div className='flex justify-between w-[80px] h-[14px]'>
        <IoIosStar className='w-[14px] h-[14px] text-[#735555]' />
        <IoIosStar className='w-[14px] h-[14px] text-[#735555]' />
        <IoIosStar className='w-[14px] h-[14px] text-[#735555]' />
        <IoIosStar className='w-[14px] h-[14px] text-[#735555]' />
        <IoIosStarHalf className='w-[14px] h-[14px] text-[#735555]'/>

        </div>
        <div className='flex justify-between w-[40px] relative top-[-5px]'>
        <p className="text-[14px] font-lato text-[#5e5e5e] ">{ratingNum}</p>
        <p className="text-[14px] font-lato text-[#5e5e5e]">{reviews}</p>
    
        </div>
        </div> 
      {/* Add to Cart Button */}
      {isHovered && (
        <button className="relative top-[40px] md:top-[50px] md:text-[16px] text-[14px]  px-6 py-2 bg-transparent text-black border-[1px] border-black rounded hover:bg-black hover:text-white hover:scale-105 transition-all ease-in-out duration-300">
          Add to Cart
        </button>
      )}

    </div>
  </div>
  );
};

export default Trending;
