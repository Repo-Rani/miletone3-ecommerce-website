"use client";
import React, { useState } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import Image from "next/image";
import { BestSellerPageProps } from "../../types/type";
import Link from "next/link";

const BestSallerPageCard = ({
  id,
  image,
  img,
  title,
  ratingNum,
  price,
  reviews,
}: BestSellerPageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className=" lg:w-[300px] xl:w-[350px] md:w-[350px] md:h-[390px] xl:h-[450px] flex flex-col items-center px-10 cursor-pointer relative lg:top-0 top-[-140px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <Link href={`bestSellerPage/${id}`} passHref>
          <Image
            src={isHovered ? img : image}
            alt="product-image"
            width={350}
            height={300}
            className="transition-transform duration-300 ease-in-out"
          />
        </Link>

        {/* Product Details */}
        <h3 className="text-[18px] font-lato font-medium text-black whitespace-nowrap">
          {title}
        </h3>
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
          <button className="absolute lg:top-[310px] lg:left-[75px] xl:left-[95px] md:top-[350px]  xxxl:left-[100px] xsm:top-[430px] sm:top-[360px] top-[300px] xl:top-[370px] xl:px-9 py-2 px-6 bg-transparent text-black border-[1px] border-black rounded hover:bg-black hover:text-white hover:scale-105 transition-all ease-in-out duration-300">
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};

export default BestSallerPageCard;
