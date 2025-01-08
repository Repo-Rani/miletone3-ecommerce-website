'use client';
import React, { useState,} from 'react';
import Image from 'next/image';
import { BestSellerProps } from '../../types/type';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import Link from 'next/link';

const BestSeller = ({
  id,
  image,
  img,
  title,
  ratingNum,
  price,
  reviews,
  latest,
}: BestSellerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  

 
  return (
    <div className="best-seller relative mx-auto   ">
      
      <div
        className="xxxl:w-[300px] md:w-[265px] sm:w-[375px] w-[320px]  lg:w-[330px] xl:w-[285px] md:h-[350px]  h-[425px] flex flex-col justify-center items-center  px-10 cursor-pointer relative "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <Link href={`bestsellers/${id}`} passHref>
          <Image
            src={isHovered ? img : image}
            alt="product-image"
            width={300}
            height={300}
            className=" w-[300px] md:h-[210px] h-[300px] transition-transform duration-300 ease-in-out"
          />
        </Link>

        {/* Latest Badge */}
        {latest && (
          <div className="absolute top-4 bg-black px-6 py-5">
            <span className="font-lato text-[16px] text-white">{latest}</span>
          </div>
        )}

        {/* Product Details */}
        <h3 className="text-[18px] font-lato  font-medium text-black whitespace-nowrap">{title}</h3>
        <span className="font-lato text-[14px] text-[#5e5e5e]">${price}</span>
        <div className="flex justify-between w-[135px] h-[14px]">
          <div className="flex justify-between w-[80px] h-[14px]">
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStarHalf className="w-[14px] h-[14px] text-[#735555]" />
          </div>
          <div className="flex justify-between w-[40px] relative top-[-5px]">
            <p className="text-[14px] font-lato text-[#5e5e5e]">{ratingNum}</p>
            <p className="text-[14px] font-lato text-[#5e5e5e]">{reviews}</p>
          </div>
        </div>

        {/* Add to Cart Button */}
        {isHovered && (
          <button
          
            className="relative top-[40px]  md:top-[50px] md:text-[16px] text-[12px]  md:px-6 px-5 py-2 bg-transparent text-black border-[1px] border-black rounded hover:bg-black hover:text-white hover:scale-105 transition-all ease-in-out duration-300"
          >
            Add to Cart
          </button>
        )}
      </div>

     
    </div>
  );
};

export default BestSeller;
