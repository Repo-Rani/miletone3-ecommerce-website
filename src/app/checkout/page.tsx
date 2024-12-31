import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
<>
<div className="w-[320px] md:w-[872px] md:h-[723px] relative md:left-0 left-[30px]">
          <h1 className="text-[20px] font-bold font-helvetica text-black  mb-3">
            Shipping Address
          </h1>
          <div className="relative flex flex-col gap-[10px] md:gap-[20px]">
            <div className="flex md:justify-between justify-center gap-[20px] ">
              <div className="md:w-[424px] md:h-[88px]   flex flex-col md:justify-between justify-center gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[14px] md:text-[16px] font-helvetica font-normal text-black"
                >
                  First name
                </label>
                <input
                  type="text"
                  className=" w-[150px] md:w-[424px] h-[35px] md:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
              <div className="md:w-[424px] md:h-[88px]   flex flex-col md:justify-between justify-center gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[14px] md:text-[16px]  font-helvetica font-normal text-black"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-[150px] md:w-[424px] h-[35px] md:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
            </div>
            <div className="flex md:justify-between justify-center gap-[20px] ">
              <div className="md:w-[424px] md:h-[88px]   flex flex-col md:justify-between justify-center gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[14px] md:text-[16px]  font-helvetica font-normal text-black"
                >
                  Email address
                </label>
                <input
                  type="text"
                  className="w-[150px] md:w-[424px] h-[35px] md:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
              <div className="md:w-[424px] md:h-[88px]   flex flex-col md:justify-between justify-center gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[14px] md:text-[16px] font-helvetica font-normal text-black"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  className="w-[150px] md:w-[424px] h-[35px] md:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
            </div>
            <div className="flex md:justify-between justify-center gap-[20px] ">
              <div className="md:w-[424px] md:h-[88px]   flex flex-col md:justify-between justify-center gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[14px] md:text-[16px]  font-helvetica font-normal text-black"
                >
                  Company
                </label>
                <input
                  type="text"
                  className="w-[150px] md:w-[424px] h-[35px] md:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>

              <div className="md:w-[424px] md:h-[88px]   flex flex-col md:justify-between justify-center gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[14px] md:text-[16px]  font-helvetica font-normal text-black"
                >
                  Country
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-[150px] md:w-[424px] h-[35px] md:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4 pr-10 font-helvetica text-[12px] md:text-[16px] text-black/70 font-normal"
                    placeholder="Choose country"
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <Image
                      src="/CaretDown.svg"
                      alt="dropdown"
                      height={24}
                      width={24}
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:justify-between justify-center gap-[20px] ">
              <div className="md:w-[424px] md:h-[88px]   flex flex-col md:justify-between justify-center gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[12px] md:text-[16px]  font-helvetica font-normal text-black"
                >
                  City
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-[150px] md:w-[424px] h-[35px] md:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4 pr-10 font-helvetica text-[10px] md:text-[16px] text-black/70 font-normal"
                    placeholder="Choose city"
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <Image
                      src="/CaretDown.svg"
                      alt="dropdown"
                      height={24}
                      width={24}
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-[424px] md:h-[88px]   flex flex-col md:justify-between justify-center gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[14px] md:text-[16px] font-helvetica font-normal text-black"
                >
                  Zip code
                </label>
                <input
                  type="text"
                  className="w-[150px] md:w-[424px] h-[35px] md:h-[56px] border-[1px] border-[#E0E0E0] px-4 outline-none"
                />
              </div>
            </div>
            <div className="flex md:justify-between justify-center gap-[20px] ">
            <div className="md:w-[424px] md:h-[88px]  flex flex-col md:justify-between justify-center gap-[10px]">
            <label
                  htmlFor=""
                  className="text-[14px] md:text-[16px] font-helvetica font-normal text-black"
                >
                  Address 1
                </label>
                <input
                  type="text"
                  className="w-[150px] md:w-[424px] h-[35px] md:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
              <div className="md:w-[424px] h-[88px] flex flex-col md:justify-between justify-center gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[14px] md:text-[16px] font-helvetica font-normal text-black"
                >
                  Address 2
                </label>
                <input
                  type="text"
                  className="w-[150px] md:w-[424px] h-[35px] md:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[16px] md:text-[20px]  font-helvetica text-black font-bold mt-[20px]">
              Billing Address
            </h1>
            <div className="flex items-center gap-[6px] mt-1">
              <div className="w-[20px] h-[20px] border-[1px] border-[#BDBDBD]"></div>
              <p className="font-normal text-[12px] md:text-[16px]  text-[#4F4F4F] font-helvetica">
                Same as shipping address
              </p>
            </div>
          </div>
          <div className="flex justify-start gap-[20px] relative top-[30px] ">
            <button className="w-[150px] md:w-[424px] h-[35px] md:h-[56px] border-[1px] border-[#E0E0E0]">
              <div className="flex justify-center items-center gap-[8px]">
                <Image
                  src="/CaretLeft (1).svg"
                  alt=""
                  height={24}
                  width={24}
                  className="md:w-[24px] md:h-[24px] w-[18px] h-[18px] "
                />
                <p className="text-[#4F4F4F] text-[12px] md:text-[16px] font-helvetica font-normal">
                 <Link href="/cart"> Back to cart</Link>
                </p>
              </div>
            </button>
            <button className="w-[150px] md:w-[424px] h-[35px] md:h-[56px]  bg-[#FF9F0D] ">
              <div className="flex justify-center items-center gap-[8px]">
                <p className="text-white text-[12px] md:text-[16px] font-helvetica font-normal">
                  Proceed to shipping
                </p>
                <Image
                  src="/CaretLeft.svg"
                  alt=""
                  height={24}
                  width={24}
                  className="w-[24px] h-[24px]"
                />
              </div>
            </button>
          </div>
        </div>

</>  )
}

export default page