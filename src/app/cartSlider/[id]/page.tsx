"use client";
import React from "react";
import Image from "next/image";
import { bestSellerData, shopallData } from "../../../../data/data";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegThumbsUp } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import CardSliders from "@/components/CardSliders";
import { useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

const CartliderDetails: React.FC<Props> = ({ params }) => {
    const [quantity, setQuantity] = useState(1);
    
      const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1, Number(e.target.value));
        setQuantity(value);
      };
  const { id } = params;
  const product = shopallData.find(
    (item: any) => item.id === id || item.id === Number(id)
  );
  if (!product) {
    return (
      <section className="w-full h-[1100px]">
        <Image
          src="/lipstickbigimage.webp"
          alt="makeup-image"
          height={400}
          width={400}
          quality={100}
          priority
          unoptimized
          className="h-[400px] w-full relative top-[100px]"
        />
        <h1 className="absolute top-[580px] left-[145px] md:left-[600px] font-playfair text-[#735555] text-[60px] md:text-[96px] font-bold">
          404
        </h1>
        <h3 className="text-[20px] md:text-[32px] font-lato font-bold text-[#333333] absolute md:left-[420px] top-[680px] md:top-[725px] text-center ">
          Oops! Looks like something went wrong
        </h3>

        <p className="text-[14px] md:text-[18px] font-normal text-[#4F4F4F] font-lato w-[320px] md:w-[490px] absolute left-[35px]  md:left-[420px] text-center top-[760px] md:top-[790px]">
          Page cannot be found! We will have it figured out in no time.
          Meanwhile, check out these fresh ideas:
        </p>

        <button className=" w-[130px] h-[40px] md:w-[197px] md:h-[58px] absolute md:left-[600px] left-[130px] top-[840px] md:top-[870px] py-[16px] px-[48px] rounded-[6px] text-[14px] md:text-[18px] font-bold text-white font-playfair flex justify-center items-center bg-[#735555] whitespace-nowrap">
          <Link href="/blog">Go to Shop</Link>
        </button>
      </section>
    );
  }

  return (
    <>
      <section className="w-full h-[2300px] relative top-[160px]">
        <div className="w-[980px] h-[1500px]   mx-auto ">
          <div className="w-[890px] h-[1500px] mx-auto ">
            <div className="flex justify-between items-center w-[850px] h-[25px]  ">
              <h3 className="text-[18px] text-black font-lato ">
                Home/
                <span className="text-[18px] text-black font-lato  opacity-25">
                  {product.title}
                </span>
              </h3>
              <div className="w-[120px] h-[25px] flex justify-center items center  gap-2">
                <Image
                  src="/DropDownvector.svg"
                  alt="vector"
                  height={25}
                  width={25}
                  className="rotate-180  opacity-25"
                />
                <span className="text-[18px] font-lato text-black opacity-25">
                  Prev
                </span>
                <span className="text-[18px] font-lato text-black">|</span>
                <span className="text-[18px] font-lato text-black">Next</span>
                <Image
                  src="/DropDownvector.svg"
                  alt="vector"
                  height={25}
                  width={25}
                />
              </div>
            </div>
            <div className="w-[890px] h-[770px]  grid grid-cols-2 gap-5 relative top-[70px]">
              <div className=" w-[450px] h-[450px] border-[1.5px] border-gray-400 flex flex-col justify-between ">
                <Image
                  src={product.image}
                  alt="product-image"
                  height={450}
                  width={450}
                />

                <p className="w-[450px] h-[120px] font-lato text-[18px] text-black tracking-wide px-6 relative top-[30px] left-[10px]">
                  I'm a product description. This is a great place to "sell"
                  your product and grab buyers' attention. Describe your product
                  clearly and concisely. Use unique keywords. Write your own
                  description instead of using manufacturers' copy.
                </p>
              </div>

              <div className="relative left-[50px]">
                <div className="flex flex-col justify-between items-center relative left-[-100px]">
                  <h1 className="text-[22px] font-lato text-[#575757] w-[300px]">
                    {product.title}
                  </h1>
                  <div className="flex justify-between relative left-[-60px] top-[10px] w-[180px]">
                    <div className="flex justify-between w-[80px] h-[14px] ">
                      <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
                      <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
                      <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
                      <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
                      <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
                    </div>
                    <div className="flex justify-start gap-1">
                      <p className="text-[14px] font-lato text-[#5e5e5e]">
                        {product.ratingNum}
                        <span className="font-lato text-[14px] text-black">
                          |
                        </span>
                      </p>
                      <p className="text-[14px] font-lato text-[#5e5e5e]">
                        {product.reviews} <span className="">reviews</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[14px] font-lato text-black relative top-[20px] left-[-115px]">
                    SKU:0020
                  </span>
                  <p className="relative left-[-130px] top-[30px] font-lato text-[18px] text-[#575757]">
                    ${product.price}
                  </p>
                  <div className="flex flex-col justify-between w-[75px] h-[68px] relative left-[-110px] top-[50px]">
      <label htmlFor="quantity" className="text-[18px] font-lato text-black">
        Quantity
      </label>
      <input
        id="quantity"
        type="number"
        value={quantity}
        min={1}
        onChange={handleQuantityChange}
        className="w-[50px] h-[30px] text-[16px] font-lato flex justify-center  text-black"
      />
    </div>
                  <div className="w-[350px] h-[100px] relative left-[30px] top-[80px] ">
                    <div className="flex justify-between w-[360px]">
                      <button className="bg-black text-white w-[300px] h-[42px] hover:bg-white hover:text-black  transition-all duration-300 ease-in-out">
                        <span className="w-[200px] h-[25px] font-lato text-[16px] ">
                          Add to Cart
                        </span>
                      </button>
                      <button className="bg-white border-[1px]  border-gray-400 w-[42px] h-[42px] flex justify-center items-center ">
                        <GoHeart className="w-[25px] h-[28px] " />
                      </button>
                    </div>
                    <button className="bg-black text-white w-[360px] h-[42px] hover:bg-white hover:text-black  transition-all duration-300 ease-in-out relative top-[15px]">
                      <span className="w-[260px] h-[25px] font-lato text-[16px] mr-16 ">
                        Buy Now
                      </span>
                    </button>
                  </div>
                  <div className="w-[330px] h-[22px] flex justify-between items-center relative top-[125px] left-[20px]">
                    <h2 className="font-lato text-[18px] text-black">
                      PRODUCT INFO
                    </h2>
                    <FaMinus className="text-[12px] font-lato text-gray-400 " />
                  </div>
                  <p className="w-[350px] h-[100px] font-lato text-[16px] text-black relative top-[145px] left-[35px]">
                    I'm a product detail. I'm a great place to add more
                    information about your product such as sizing, material,
                    care and cleaning instructions. This is also a great space
                    to write what makes this product special and how your
                    customers can benefit from this item.
                  </p>

                  <div className="border-b-[1px] border-gray-400 w-[350px] h-0 relative top-[200px] left-[25px]"></div>

                  <div className="w-[330px] h-[22px] flex justify-between items-center relative top-[230px] left-[30px]">
                    <h2 className="font-lato text-[18px] text-black uppercase">
                      Return & Refund Policy{" "}
                    </h2>
                    <FaPlus className="text-[12px] font-lato text-gray-400" />
                  </div>

                  <div className="border-b-[1px] border-gray-400 w-[350px] h-0 relative top-[270px] left-[30px]"></div>

                  <div className="w-[330px] h-[22px] flex justify-between items-center relative top-[300px] left-[30px]">
                    <h2 className="font-lato text-[18px] text-black uppercase">
                      Shipping Info{" "}
                    </h2>
                    <FaPlus className="text-[12px] font-lato text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[888px] h-[200px] flex justify-between relative top-[60px]  ">
              <div className="w-[250px] h-[148px] flex flex-col justify-between ">
                <h2 className="text-[22px] font-lato text-black relative">
                  Reviews
                </h2>
                <div className="w-[120px] h-[25px] flex justify-between items-center relative ">
                  <div className="flex items-center justify-between w-[80px] h-[14px] ">
                    <IoIosStar className="w-[16px] h-[16px] text-[#735555]" />
                    <IoIosStar className="w-[16px] h-[16px] text-[#735555]" />
                    <IoIosStar className="w-[16px] h-[16px] text-[#735555]" />
                    <IoIosStar className="w-[16px] h-[16px] text-[#735555]" />
                    <IoIosStar className="w-[16px] h-[16px] text-[#735555]" />
                  </div>

                  <span className="font-lato text-[20px] text-black">
                    ${product.price}
                  </span>
                </div>

                <span className="font-lato text-[16px] text-black ">
                  Based on 1 review
                </span>

                <button className="bg-black text-white w-[200px] h-[35px] hover:bg-white hover:text-black  transition-all duration-300 ease-in-out relative top-[15px]">
                  <span className="w-[200px] h-[25px] font-lato text-[16px] ">
                    Leave a Review
                  </span>
                </button>
              </div>
              <div className="w-[200px] h-[200px] flex flex-col justify-between  flex-grow">
                <div className=" w-[420px] h-[180px] relative left-[220px] flex flex-col justify-between ">
                  <div className="flex justify-between items-center">
                    <span className="font-lato text-[16px] text-black">
                      5 stars
                    </span>
                    <div className="bg-[#d19999] w-[350px] h-[8px]"></div>
                    <span className="font-lato text-[16px] text-black">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-lato text-[16px] text-black">
                      4 stars
                    </span>
                    <div className="bg-[#5e5e5e] w-[350px] h-[8px]"></div>
                    <span className="font-lato text-[16px] text-black">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-lato text-[16px] text-black">
                      3 stars
                    </span>
                    <div className="bg-[#5e5e5e] w-[350px] h-[8px]"></div>
                    <span className="font-lato text-[16px] text-black">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-lato text-[16px] text-black">
                      2 stars
                    </span>
                    <div className="bg-[#5e5e5e] w-[350px] h-[8px]"></div>
                    <span className="font-lato text-[16px] text-black">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-lato text-[16px] text-black">
                      1 stars
                    </span>
                    <div className="bg-[#5e5e5e] w-[350px] h-[8px]"></div>
                    <span className="font-lato text-[16px] text-black">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[888px] h-[64px] flex justify-between items-center">
              <div className="w-[514px] h-[20px] relative top-[80px]">
                <span className="text-[18px] font-lato text-black whitespace-nowrap">
                  1 review
                </span>
              </div>

              <div className="w-[480px] h-[36px] flex justify-between items-center  relative top-[80px]">
                <div className="w-[200px] h-[24px] flex justify-between items-center">
                  <span className="text-[18px] font-lato text-black whitespace-nowrap">
                    Filter by rating: All Stars
                  </span>
                  <Image
                    src="/DropDownvector.svg"
                    alt="vector"
                    height={25}
                    width={25}
                    className="rotate-90 ml-1 "
                  />
                </div>
                <div className="w-[200px] h-[24px] flex justify-between items-center">
                  <span className="text-[18px] font-lato text-black whitespace-nowrap">
                    Sort by: Most Relevent
                  </span>
                  <Image
                    src="/DropDownvector.svg"
                    alt="vector"
                    height={25}
                    width={25}
                    className="rotate-90 "
                  />
                </div>
              </div>
            </div>

            <hr className="w-[888px] h-[0.8px] relative top-[110px]" />

            <div className="w-[888px] h-[225px]  relative top-[150px]">
              <div className="w-[888px] h-[24px] flex justify-between items-center  ">
                <div className="w-[196px] h-[20px] flex justify-between items-center">
                  <span className="font-lato text-black text-[14px] w-[93px] h-[20px]">
                    Bryce Callighan
                  </span>
                  <span className="w-[8px] h-[20px] text-black font-lato text-[30px] mb-9">
                    .
                  </span>
                  <span className="font-lato text-black text-[14px] w-[78px] h-[20px]">
                    Apr 22,2022
                  </span>
                </div>

                <HiOutlineDotsVertical className="w-[24px] h-[24px]" />
              </div>

              <div className="flex items-center justify-between w-[94px] h-[14px] relative top-[5px] ">
                <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
                <IoIosStar className="w-[16px] h-[16px] text-[#735555]" />
                <IoIosStar className="w-[16px] h-[16px] text-[#735555]" />
                <IoIosStar className="w-[16px] h-[16px] text-[#735555]" />
                <IoIosStar className="w-[16px] h-[16px] text-[#735555]" />
              </div>

              <span className="w-[160px] h-[21px] text-[18px] font-lato text-[#000000] relative top-[15px] ">
                Pleasantly Surprised
              </span>

              <p className="w-[760px] h-[40px]text-[14px] font-lato text-[#000000] relative top-[15px] ">
                A friend recommended this item for me a few weeks ago. Was a bit
                skeptical at first but all the great reviews convinced me to try
                it. Gotta say, I'm glad I listened! The product was packaged
                well, arrived on time and the quality was great for this price
                range.{" "}
              </p>
              <p className="w-[760px] h-[40px]text-[14px] font-lato text-[#000000] relative top-[10px] ">
                Will buy again.
              </p>

              <div className="w-[232px] h-[24px] flex justify-between items-center">
                <p className="w-[100px] h-[24px] font-lato text-[14px] text-[#000000] relative top-[15px] ">
                  Was this helpful?
                </p>
                <div className="w-[122px] h-[24px] flex justify-between items-center relative top-[15px]">
                  <div className="w-[48px] h-[24px] flex justify-center gap-1">
                    <FaRegThumbsUp />
                    <span className="text-[14px] text-[#000000] font-lato">
                      Yes
                    </span>
                  </div>
                  <div className="w-[60px] h-[24px] flex justify-center gap-1">
                    <GoCommentDiscussion />
                    <span className="text-[14px] text-[#000000] font-lato">
                      Reply
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[200px] left-[150px]  ">
          <h2 className="font-lato text-black text-[22px]">
            You Might Also Like
          </h2>
        </div>
        <div className="relative top-[50px]">
          <CardSliders />
        </div>
      </section>
    </>
  );
};

export default CartliderDetails;
